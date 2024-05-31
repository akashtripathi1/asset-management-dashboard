import React, { useEffect, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';

// Function to allow the alert to slide in and out
function SlideTransition(props) {
  return <Slide {...props} direction="down" />;
}

const Alerts = (props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (props.message) {
      setOpen(true);
      const timer = setTimeout(() => {
        setOpen(false);
      }, 3000); // Close the snackbar after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [props.message]);

  return (
    <Snackbar
      open={open}
      TransitionComponent={SlideTransition}
      message={props.message}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      key={'topcenter'}
      autoHideDuration={5000}
      onClose={() => setOpen(false)}
    >
      <MuiAlert elevation={6} variant="filled" severity="info">
        {props.message}
      </MuiAlert>
    </Snackbar>
  );
};

export default Alerts;
