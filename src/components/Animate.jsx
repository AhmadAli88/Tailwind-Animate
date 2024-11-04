import { useState } from 'react';
import { Button, Snackbar, Alert, AlertTitle, Slide, Grow } from '@mui/material';
import 'tailwindcss/tailwind.css';

export default function ToastExamples() {
  const [open, setOpen] = useState(false);
  const [toastConfig, setToastConfig] = useState({});

  const showToast = (config) => {
    setToastConfig(config);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  // Functions to display various toasts with Tailwind animations
  const showDefaultToast = () =>
    showToast({ severity: 'info', title: 'Default Toast', description: 'This is a default toast message', animationClass: 'animate-fade' });

  const showSlideUpToast = () =>
    showToast({ severity: 'info', title: 'Slide Up Toast', description: 'This toast slides up from the bottom', Transition: Slide, animationClass: 'animate-slide-up' });

  const showFadeToast = () =>
    showToast({ severity: 'info', title: 'Fade Toast', description: 'This toast fades in smoothly', Transition: Grow, animationClass: 'animate-in fade-in zoom-in delay-150' });

  const showBounceToast = () =>
    showToast({ severity: 'info', title: 'Bounce Toast', description: 'This toast has a bounce effect', animationClass: 'animate-bounce' });

  const showShakeToast = () =>
    showToast({ severity: 'info', title: 'Shake Toast', description: 'This toast shakes to grab attention', animationClass: 'animate-shake duration-300' });

  const showActionToast = () =>
    showToast({
      severity: 'info',
      title: 'Action Required',
      description: 'Please confirm your action',
      action: <Button color="secondary" size="small" onClick={handleClose}>Confirm</Button>,
      animationClass: 'animate-fade'
    });

  const showDestructiveToast = () =>
    showToast({ severity: 'error', title: 'Destructive Action', description: 'This action cannot be undone', animationClass: 'animate-shake' });

  const showLoadingToast = () =>
    showToast({ severity: 'info', title: 'Loading...', description: 'Please wait while we process your request', animationClass: 'animate-pulse' });

  const showCustomPositionToast = () =>
    showToast({ severity: 'info', title: 'Custom Position', description: 'This toast appears from the top', animationClass: 'animate-slide-down' });

  const showChainedAnimationToast = () =>
    showToast({ severity: 'info', title: 'Chained Animation', description: 'Multiple animations combined', animationClass: 'animate-fade animate-bounce' });

  return (
    <div className="space-y-4 p-4">
      <div className="grid grid-cols-2 gap-4">
        <Button variant="outlined" onClick={showDefaultToast}>Default Toast</Button>
        <Button variant="outlined" onClick={showSlideUpToast}>Slide Up Toast</Button>
        <Button variant="outlined" onClick={showFadeToast}>Fade Toast</Button>
        <Button variant="outlined" onClick={showBounceToast}>Bounce Toast</Button>
        <Button variant="outlined" onClick={showShakeToast}>Shake Toast</Button>
        <Button variant="outlined" onClick={showActionToast}>Action Toast</Button>
        <Button variant="contained" color="error" onClick={showDestructiveToast}>Destructive Toast</Button>
        <Button variant="outlined" onClick={showLoadingToast}>Loading Toast</Button>
        <Button variant="outlined" onClick={showCustomPositionToast}>Custom Position Toast</Button>
        <Button variant="outlined" onClick={showChainedAnimationToast}>Chained Animation Toast</Button>
      </div>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        TransitionComponent={toastConfig.Transition}
      >
        <Alert
          onClose={handleClose}
          severity={toastConfig.severity}
          action={toastConfig.action}
          className={toastConfig.animationClass}
        >
          <AlertTitle>{toastConfig.title}</AlertTitle>
          {toastConfig.description}
        </Alert>
      </Snackbar>
    </div>
  );
}
