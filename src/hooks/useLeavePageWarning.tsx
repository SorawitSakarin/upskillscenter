import { useEffect } from 'react';

const useLeavePageWarning = (shouldWarn: boolean) => {
  
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!shouldWarn) return;
      
      e.preventDefault();
      // A custom message is no longer shown by modern browsers, but it's required to set returnValue.
      e.returnValue = 'Are you sure you want to leave this page?';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [shouldWarn]);
};

export default useLeavePageWarning;
