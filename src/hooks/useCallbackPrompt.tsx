// import { useCallback, useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useBlocker } from './useBlocker';

// // Define the type of the location state
// // type LocationState = {
// //   pathname: string;
// // };

// // Type for the custom hook return values
// type CallbackPromptReturn = [boolean, () => void, () => void];

// export function useCallbackPrompt(when: boolean): CallbackPromptReturn {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [showPrompt, setShowPrompt] = useState(false);
//   const [lastLocation, setLastLocation] = useState(null);
//   const [confirmedNavigation, setConfirmedNavigation] = useState(false);

//   const cancelNavigation = useCallback(() => {
//     setShowPrompt(false);
//     setLastLocation(null);
//   }, []);

//   // Handle blocking - when a user clicks on another route, the prompt will be shown
//   const handleBlockedNavigation = useCallback(
//     (nextLocation:any) => {
//       // Check if the next location and current location are the same
//       // If they're not the same and navigation hasn't been confirmed, show the prompt
//       if (
//         !confirmedNavigation &&
//         nextLocation.location.pathname !== location.pathname
//       ) {
//         setShowPrompt(true);
//         setLastLocation(nextLocation);
//         return false;
//       }
//       return true;
//     },
//     [confirmedNavigation, location]
//   );

//   const confirmNavigation = useCallback(() => {
//     setShowPrompt(false);
//     setConfirmedNavigation(true);
//   }, []);

//   useEffect(() => {
//     // If navigation is confirmed and we have a last location, navigate to it
//     if (confirmedNavigation && lastLocation) {
//       navigate(lastLocation.location?.pathname);

//       // Reset the confirmedNavigation state after navigation
//       setConfirmedNavigation(false);
//     }
//   }, [confirmedNavigation, lastLocation, navigate]);

//   useBlocker(handleBlockedNavigation, when);

//   return [showPrompt, confirmNavigation, cancelNavigation];
// }

import { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { useBlocker } from './useBlocker'

export function useCallbackPrompt(when: boolean): (boolean | (() => void))[] {
  const navigate = useNavigate()
  const location = useLocation()
  const [showPrompt, setShowPrompt] = useState(false)
  const [lastLocation, setLastLocation] = useState<any>(null)
  const [confirmedNavigation, setConfirmedNavigation] = useState(false)

  const cancelNavigation = useCallback(() => {
    setShowPrompt(false)
    setLastLocation(null)
  }, [])

  // handle blocking when user click on another route prompt will be shown
  const handleBlockedNavigation = useCallback(
    (nextLocation:any) => {
      // in if condition we are checking next location and current location are equals or not
      if (
        !confirmedNavigation &&
        nextLocation.location.pathname !== location.pathname
      ) {
        setShowPrompt(true)
        setLastLocation(nextLocation)
        return false
      }
      return true
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [confirmedNavigation, location]
  )

  const confirmNavigation = useCallback(() => {
    setShowPrompt(false)
    setConfirmedNavigation(true)
  }, [])

  useEffect(() => {
    if (confirmedNavigation && lastLocation) {
      navigate(lastLocation.location?.pathname)

      // Clean-up state on confirmed navigation
      setConfirmedNavigation(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [confirmedNavigation, lastLocation])

  useBlocker(handleBlockedNavigation, when)

  return [showPrompt, confirmNavigation, cancelNavigation]
}