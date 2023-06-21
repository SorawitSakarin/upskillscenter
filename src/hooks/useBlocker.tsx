// import * as React from 'react';
// import { UNSAFE_NavigationContext } from 'react-router-dom';
// import type { History, Blocker, Transition } from 'history';

// // This custom hook is used to block navigation when a certain condition is met
// // It receives a blocker function and a boolean to determine when to block
// export function useBlocker(blocker: Blocker, when = true): void {
//   // We're using the UNSAFE_NavigationContext to access the navigator object
//   // The navigator object is cast to the History type, which represents the browser's history stack, history navigation actions, and the current location.
//   const navigator = React.useContext(UNSAFE_NavigationContext)
//     .navigator as History;

//   // Here we use useEffect hook to set up blocking navigation
//   React.useEffect(() => {
//     // If `when` is false, we don't set up the blocker and exit early
//     if (!when) return;

//     // We call navigator.block to set up blocking navigation
//     // It takes a function, which receives a transition object when navigation is blocked
//     // The transition object contains information about the navigation action
//     const unblock = navigator.block((tx: Transition) => {
//       // We create a new transition object that automatically unblocks navigation when retrying
//       const autoUnblockingTx = {
//         ...tx,
//         retry() {
//           unblock();
//           tx.retry();
//         },
//       };

//       // Call the blocker function with the new transition object
//       blocker(autoUnblockingTx);
//     });

//     // The effect cleanup function calls unblock to remove the navigation blocker
//     return unblock;
//   }, [navigator, blocker, when]); // Effect dependencies
// }
import * as React from 'react';
import { UNSAFE_NavigationContext } from 'react-router-dom';
import type { History, Blocker, Transition } from 'history';

export function useBlocker(blocker: Blocker, when = true): void {
  const navigator = React.useContext(UNSAFE_NavigationContext)
    .navigator as History;

  React.useEffect(() => {
    if (!when) return;

    const unblock = navigator.block((tx: Transition) => {
      const autoUnblockingTx = {
        ...tx,
        retry() {
          unblock();
          tx.retry();
        },
      };

      blocker(autoUnblockingTx);
    });

    return unblock;
  }, [navigator, blocker, when]);
}
