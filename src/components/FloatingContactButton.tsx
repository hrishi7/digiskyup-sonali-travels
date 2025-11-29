'use client';

import React, { useState } from 'react';
import {
  Fab,
  Snackbar,
  Alert,
  useMediaQuery,
  useTheme,
  Tooltip,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

interface FloatingContactButtonProps {
  phoneNumber: string;
  whatsappMessage?: string;
}

const FloatingContactButton: React.FC<FloatingContactButtonProps> = ({
  phoneNumber,
  whatsappMessage = 'Hello! I would like to inquire about your Sundarban tour packages.',
}) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleCall = () => {
    if (isMobile) {
      // On mobile, open phone dialer
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // On desktop, copy to clipboard
      navigator.clipboard.writeText(phoneNumber).then(
        () => {
          setSnackbarMessage('Phone number copied to clipboard!');
          setSnackbarOpen(true);
        },
        () => {
          setSnackbarMessage('Failed to copy phone number');
          setSnackbarOpen(true);
        }
      );
    }
  };

  const handleWhatsApp = () => {
    // Format phone number for WhatsApp (remove + and spaces)
    const formattedNumber = phoneNumber.replace(/[^0-9]/g, '');
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      {/* Call Button - Left Bottom */}
      <Tooltip 
        title={isMobile ? "Call us" : "Click to copy phone number"} 
        placement="right"
        arrow
      >
        <Fab
          color="primary"
          aria-label="call"
          onClick={handleCall}
          sx={{
            position: 'fixed',
            bottom: { xs: 24, md: 32 },
            left: { xs: 16, md: 32 },
            zIndex: 1000,
            backgroundColor: '#0A5F4E',
            width: { xs: 56, md: 64 },
            height: { xs: 56, md: 64 },
            '&:hover': {
              backgroundColor: '#084538',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 20px rgba(10, 95, 78, 0.4)',
            '@keyframes boom': {
              '0%, 100%': {
                transform: 'scale(1)',
              },
              '50%': {
                transform: 'scale(1.15)',
              },
            },
            animation: 'boom 1.5s ease-in-out infinite',
          }}
        >
          <PhoneIcon sx={{ fontSize: { xs: 28, md: 32 } }} />
        </Fab>
      </Tooltip>

      {/* WhatsApp Button - Right Bottom */}
      <Tooltip 
        title="Chat on WhatsApp" 
        placement="left"
        arrow
      >
        <Fab
          color="success"
          aria-label="whatsapp"
          onClick={handleWhatsApp}
          sx={{
            position: 'fixed',
            bottom: { xs: 24, md: 32 },
            right: { xs: 16, md: 32 },
            zIndex: 1000,
            backgroundColor: '#25D366',
            width: { xs: 56, md: 64 },
            height: { xs: 56, md: 64 },
            '&:hover': {
              backgroundColor: '#128C7E',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
          }}
        >
          <WhatsAppIcon sx={{ fontSize: { xs: 28, md: 32 } }} />
        </Fab>
      </Tooltip>

      {/* Snackbar for copy notification */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        sx={{ mb: 10 }}
      >
        <Alert 
          onClose={handleSnackbarClose} 
          severity="success" 
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default FloatingContactButton;
