'use client';

import { Box, Container, Typography, TextField, Button, MenuItem } from '@mui/material';
import { Phone, Mail, Users, Calendar, Home, Package } from 'lucide-react';
import { useState } from 'react';
import { contactPageContent } from '@/data/contact';

// TODO: Add payment qr code
// TODO: Add payment screenshot
// TODO: Add payment amounts
// TODO when click on icon payment screenshot file type input we should see a dialog with scanner

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    numberOfPerson: '',
    date: '',
    package: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('=== Form Submission ===');
    console.log('Form Data:', formData);
    console.log('Name:', formData.name);
    console.log('Email:', formData.email);
    console.log('Phone:', formData.phone);
    console.log('Number of Person:', formData.numberOfPerson);
    console.log('Date:', formData.date);
    console.log('Package:', formData.package);
    console.log('======================');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Hero Section with Background */}
      <Box
        sx={{
          position: 'relative',
          height: '400px',
          backgroundImage: 'url(/contactUs.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 1,
          },
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            color: 'white',
            fontWeight: 700,
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            position: 'relative',
            zIndex: 2,
            mb: 2,
          }}
        >
          {contactPageContent.hero.title}
        </Typography>
        
        {/* Breadcrumb */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            position: 'relative',
            zIndex: 2,
            color: 'white',
            fontSize: '1.1rem',
          }}
        >
          <Home size={20} color="#FDB714" />
          <Typography sx={{ color: 'white', fontWeight: 500 }}>{contactPageContent.hero.breadcrumb.home}</Typography>
          <Typography sx={{ color: 'white' }}>|</Typography>
          <Typography sx={{ color: 'white' }}>{contactPageContent.hero.breadcrumb.current}</Typography>
        </Box>
      </Box>

      {/* Main Content Section */}
      <Box sx={{ backgroundColor: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', gap: 6, flexDirection: { xs: 'column', md: 'row' } }}>
            {/* Left Column - Contact Details */}
            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  color: '#1B4D3E',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  letterSpacing: '2px',
                  mb: 2,
                }}
              >
                {contactPageContent.contactDetails.sectionLabel}
              </Typography>
              
              <Typography
                variant="h3"
                sx={{
                  color: '#1B4D3E',
                  fontWeight: 700,
                  fontSize: { xs: '2rem', md: '2.75rem' },
                  mb: 3,
                }}
              >
                {contactPageContent.contactDetails.title}
              </Typography>
              
              <Typography
                sx={{
                  color: '#666',
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  mb: 3,
                }}
              >
                {contactPageContent.contactDetails.description}
              </Typography>
              
              <Typography sx={{ color: '#666', mb: 1 }}>
                <span style={{ color: '#8BC34A', fontWeight: 600 }}>{contactPageContent.contactDetails.officeLabel}</span> : {contactPageContent.contactDetails.officeAddress}
              </Typography>

              {/* Contact Boxes */}
              <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                {contactPageContent.contactDetails.contactBoxes.map((contact) => (
                  <Box
                    key={contact.id}
                    sx={{
                      border: '2px dashed #8BC34A',
                      borderRadius: '8px',
                      padding: '20px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        border: '3px solid #1B4D3E',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {contact.type === 'phone' ? (
                        <Phone size={24} color="#1B4D3E" />
                      ) : (
                        <Mail size={24} color="#1B4D3E" />
                      )}
                    </Box>
                    <Box>
                      <Typography sx={{ color: '#1B4D3E', fontWeight: 600, fontSize: '1rem' }}>
                        {contact.label}
                      </Typography>
                      <Typography sx={{ color: '#FDB714', fontWeight: 700, fontSize: '1.1rem' }}>
                        {contact.value}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Right Column - Contact Form */}
            <Box sx={{ flex: 1 }}>
              <Box
                sx={{
                  backgroundColor: '#f5f5f5',
                  borderRadius: '12px',
                  padding: { xs: 3, md: 4 },
                }}
              >
                <Typography
                  sx={{
                    color: '#FDB714',
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    mb: 3,
                  }}
                >
                  {contactPageContent.form.title}
                </Typography>

                <form onSubmit={handleSubmit}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                    {/* Name Field */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Box
                        sx={{
                          width: 45,
                          height: 45,
                          backgroundColor: 'white',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Users size={20} color="#333" />
                      </Box>
                      <TextField
                        fullWidth
                        name="name"
                        placeholder={contactPageContent.form.fields.name}
                        value={formData.name}
                        onChange={handleChange}
                        sx={{
                          backgroundColor: 'white',
                          borderRadius: '8px',
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': { border: 'none' },
                            '& input': {
                              color: '#333',
                              padding: '12px 14px',
                            },
                          },
                          '& .MuiInputBase-input::placeholder': {
                            color: '#999',
                            opacity: 1,
                          },
                        }}
                      />
                    </Box>
                    {/* Phone Field */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Box
                        sx={{
                          width: 45,
                          height: 45,
                          backgroundColor: 'white',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Phone size={20} color="#333" />
                      </Box>
                      <TextField
                        fullWidth
                        name="phone"
                        placeholder={contactPageContent.form.fields.phone}
                        value={formData.phone}
                        onChange={handleChange}
                        sx={{
                          backgroundColor: 'white',
                          borderRadius: '8px',
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': { border: 'none' },
                            '& input': {
                              color: '#333',
                              padding: '12px 14px',
                            },
                          },
                          '& .MuiInputBase-input::placeholder': {
                            color: '#999',
                            opacity: 1,
                          },
                        }}
                      />
                    </Box>


                    {/* Package Selector */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Box
                        sx={{
                          width: 45,
                          height: 45,
                          backgroundColor: '#2C5F4F',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Package size={20} color="white" />
                      </Box>
                      <TextField
                        fullWidth
                        select
                        name="package"
                        value={formData.package}
                        onChange={handleChange}
                        placeholder={contactPageContent.form.fields.package}
                        sx={{
                          backgroundColor: 'white',
                          borderRadius: '8px',
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': { border: 'none' },
                          },
                          '& .MuiSelect-select': {
                            color: '#333',
                            padding: '12px 14px',
                          },
                        }}
                        SelectProps={{
                          displayEmpty: true,
                          renderValue: (value: unknown) => {
                            if (!value) {
                              return <span style={{ color: '#999' }}>{contactPageContent.form.fields.package}</span>;
                            }
                            return value as string;
                          },
                        }}
                      >
                        {contactPageContent.form.packageOptions.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Box>

                    {/* Date Field */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Box
                        sx={{
                          width: 45,
                          height: 45,
                          backgroundColor: 'white',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Calendar size={20} color="#333" />
                      </Box>
                      <TextField
                        fullWidth
                        name="date"
                        type="date"
                        placeholder={contactPageContent.form.fields.date}
                        value={formData.date}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                        sx={{
                          backgroundColor: 'white',
                          borderRadius: '8px',
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': { border: 'none' },
                            '& input': {
                              color: '#333',
                              padding: '12px 14px',
                            },
                          },
                          '& .MuiInputBase-input::placeholder': {
                            color: '#999',
                            opacity: 1,
                          },
                        }}
                      />
                    </Box>



                    {/* Number of Person Field */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Box
                        sx={{
                          width: 45,
                          height: 45,
                          backgroundColor: 'white',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Users size={20} color="#333" />
                      </Box>
                      <TextField
                        fullWidth
                        name="numberOfPerson"
                        placeholder={contactPageContent.form.fields.numberOfPerson}
                        value={formData.numberOfPerson}
                        onChange={handleChange}
                        sx={{
                          backgroundColor: 'white',
                          borderRadius: '8px',
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': { border: 'none' },
                            '& input': {
                              color: '#333',
                              padding: '12px 14px',
                            },
                          },
                          '& .MuiInputBase-input::placeholder': {
                            color: '#999',
                            opacity: 1,
                          },
                        }}
                      />
                    </Box>

                    

                    {/* Send Button */}
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{
                        backgroundColor: '#5CB85C',
                        color: 'white',
                        padding: '14px',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        borderRadius: '8px',
                        textTransform: 'none',
                        mt: 2,
                        '&:hover': {
                          backgroundColor: '#4CAF50',
                        },
                      }}
                    >
                      {contactPageContent.form.submitButton}
                    </Button>
                  </Box>
                </form>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
