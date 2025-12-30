'use client';

import { Box, Container, Typography, TextField, Button, MenuItem, CircularProgress } from '@mui/material';
import { Phone, Mail, Users, Calendar, Home, Package, DollarSign, Upload, X, CheckCircle } from 'lucide-react';
import { useState, useMemo } from 'react';
import Alert from '@mui/material/Alert';
import { contactPageContent } from '@/data/contact';
import { tourPackagesPageContent } from '@/data/tourPackages';
import { uploadToImageKit } from '@/services/imagekit';

// TODO: Add payment qr code
// TODO: Add payment screenshot
// TODO: Add payment amounts
// TODO when click on icon payment screenshot file type input we should see a dialog with scanner

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    numberOfPerson: '',
    date: '',
    package: '',
    advancedAmount: '',
    paymentScreenshot: '',
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState('');

  // Calculate total amount and advance payment
  const calculatedAmounts = useMemo(() => {
    const numberOfPersons = parseInt(formData.numberOfPerson) || 0;
    const selectedPackageTitle = formData.package;
    
    // Find the selected package from tour packages
    const selectedPackage = tourPackagesPageContent.packages.find(
      pkg => pkg.title === selectedPackageTitle
    );
    
    if (!selectedPackage || !selectedPackage.details || numberOfPersons === 0) {
      return { totalAmount: 0, advanceAmount: 0 };
    }
    
    const pricePerHead = parseInt(selectedPackage.details.pricePerHead) || 0;
    const totalAmount = numberOfPersons * pricePerHead;
    const advanceAmount = Math.round(totalAmount * 0.5);
    
    return { totalAmount, advanceAmount };
  }, [formData.numberOfPerson, formData.package]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleImageChange = (file: File | null) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setUploadedFile(file);
      setFormData({
        ...formData,
        paymentScreenshot: file.name,
      });
      // Clear error for payment screenshot when user uploads image
      if (errors.paymentScreenshot) {
        setErrors({
          ...errors,
          paymentScreenshot: '',
        });
      }
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    handleImageChange(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0] || null;
    if (file && file.type.startsWith('image/')) {
      handleImageChange(file);
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    setUploadedFile(null);
    setFormData({
      ...formData,
      paymentScreenshot: '',
    });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Validate phone
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    // Validate advanced amount
    if (!formData.advancedAmount.trim()) {
      newErrors.advancedAmount = 'Advanced amount is required';
    } else if (isNaN(Number(formData.advancedAmount)) || Number(formData.advancedAmount) <= 0) {
      newErrors.advancedAmount = 'Please enter a valid amount';
    }

    // Validate payment screenshot
    if (!formData.paymentScreenshot) {
      newErrors.paymentScreenshot = 'Payment screenshot is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendToWhatsApp = (imageUrl?: string) => {
    // Format the message
    const message = `*New Booking Request*\n\n` +
      `📝 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `📦 *Package:* ${formData.package || 'Not selected'}\n` +
      `📅 *Date:* ${formData.date || 'Not specified'}\n` +
      `👥 *Number of Persons:* ${formData.numberOfPerson || 'Not specified'}\n` +
      `💰 *Advanced Amount:* ₹${formData.advancedAmount}\n` +
      (imageUrl ? `📸 *Payment Proof:* ${imageUrl}` : `📸 *Payment Screenshot:* ${formData.paymentScreenshot}\n\n_Note: Payment screenshot will be sent separately_`);

    // Get the primary contact number from contact data
    const whatsappNumber = '919614731529'; // From contactPageContent
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new window
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    setShowSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        numberOfPerson: '',
        date: '',
        package: '',
        advancedAmount: '',
        paymentScreenshot: '',
      });
      setImagePreview(null);
      setUploadedFile(null);
    }, 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous errors
    setErrors({});
    
    // Validate form
    if (!validateForm()) {
      // Scroll to top to show errors
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // If validation passes, upload image to ImageKit first
    setIsUploading(true);
    setUploadProgress('Uploading payment screenshot...');

    try {
      let imageUrl: string | undefined;

      if (uploadedFile) {
        // Upload to ImageKit
        const uploadResult = await uploadToImageKit(uploadedFile, `payment_${Date.now()}_${uploadedFile.name}`);
        imageUrl = uploadResult.url;
        setUploadProgress('Upload successful! Opening WhatsApp...');
      }

      // Small delay to show success message
      await new Promise(resolve => setTimeout(resolve, 500));

      // Send to WhatsApp with ImageKit URL
      sendToWhatsApp(imageUrl);
    } catch (error) {
      console.error('Upload failed:', error);
      setErrors({
        ...errors,
        paymentScreenshot: 'Failed to upload image. Please try again.',
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setIsUploading(false);
      setUploadProgress('');
    }
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

                

                {/* Upload Progress Alert */}
                {isUploading && uploadProgress && (
                  <Alert severity="info" sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
                    <CircularProgress size={20} />
                    {uploadProgress}
                  </Alert>
                )}

                <form onSubmit={handleSubmit}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                    {/* Name Field */}
                    <Box>
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
                          error={!!errors.name}
                          sx={{
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': { 
                                border: errors.name ? '2px solid #f44336' : 'none',
                              },
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
                      {errors.name && (
                        <Typography sx={{ color: '#f44336', fontSize: '0.875rem', mt: 0.5, ml: 7 }}>
                          {errors.name}
                        </Typography>
                      )}
                    </Box>
                    {/* Phone Field */}
                    <Box>
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
                          error={!!errors.phone}
                          sx={{
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': { 
                                border: errors.phone ? '2px solid #f44336' : 'none',
                              },
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
                      {errors.phone && (
                        <Typography sx={{ color: '#f44336', fontSize: '0.875rem', mt: 0.5, ml: 7 }}>
                          {errors.phone}
                        </Typography>
                      )}
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
                        {tourPackagesPageContent.packages.map((option) => (
                          <MenuItem key={option.id} value={option.title}>
                            {option.title}
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
                        type='number'
                        inputProps={{ min: 1 }}
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

                    {/* Advanced Amount Field */}
                    <Box>
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
                          <DollarSign size={20} color="#4CAF50" />
                        </Box>
                        <TextField
                          fullWidth
                          name="advancedAmount"
                          placeholder={contactPageContent.form.fields.advancedAmount}
                          value={formData.advancedAmount}
                          onChange={handleChange}
                          error={!!errors.advancedAmount}
                          sx={{
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': { 
                                border: errors.advancedAmount ? '2px solid #f44336' : 'none',
                              },
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
                      {errors.advancedAmount && (
                        <Typography sx={{ color: '#f44336', fontSize: '0.875rem', mt: 0.5, ml: 7 }}>
                          {errors.advancedAmount}
                        </Typography>
                      )}
                      {calculatedAmounts.totalAmount > 0 && (
                        <Box sx={{ ml: 7, mt: 1 }}>
                          <Typography sx={{ 
                            color: '#4CAF50', 
                            fontSize: '0.875rem',
                            fontWeight: 500,
                            lineHeight: 1.5
                          }}>
                            Total Amount: ₹{calculatedAmounts.totalAmount.toLocaleString('en-IN')}
                          </Typography>
                          <Typography sx={{ 
                            color: '#666', 
                            fontSize: '0.75rem',
                            mt: 0.5,
                            fontStyle: 'italic'
                          }}>
                            Please pay 50% of the total amount as advance. In this case, 50% of ₹{calculatedAmounts.totalAmount.toLocaleString('en-IN')} = ₹{calculatedAmounts.advanceAmount.toLocaleString('en-IN')}
                          </Typography>
                        </Box>
                      )}
                    </Box>
                    {/* <Typography variant="body2" color="primary" sx={{ mt: 2 }}>
                      Please pay 50% which is {{formData.numberOfPerson}} of the amount.
                    </Typography> */}

                    {/* i want to show image of QrCode here in 240px * 240px size */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5 }}>
                      <img src={contactPageContent.paymentQrCode} alt="" style={{width:"180px", height:"240px"}} />
                      <Typography variant="body2" color="primary" sx={{ mt: 2 }}>
                        Scan the QR code to make a payment & upload the same below.
                      </Typography>
                    </Box>

                    {/* payment screenshot - Drag and Drop Area */}
                    <Box sx={{ mt: 1 }}>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileInputChange}
                        style={{ display: 'none' }}
                        id="payment-screenshot-input"
                      />
                      <Box
                        onClick={() => document.getElementById('payment-screenshot-input')?.click()}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        sx={{
                          border: `2px dashed ${errors.paymentScreenshot ? '#f44336' : isDragging ? '#4CAF50' : '#8BC34A'}`,
                          borderRadius: '12px',
                          padding: imagePreview ? '0' : '40px 20px',
                          backgroundColor: isDragging ? '#f1f8e9' : 'white',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          minHeight: imagePreview ? 'auto' : '180px',
                          position: 'relative',
                          '&:hover': {
                            borderColor: '#4CAF50',
                            backgroundColor: '#f9fbe7',
                          },
                        }}
                      >
                        {!imagePreview ? (
                          <>
                            <Upload size={40} color="#8BC34A" />
                            <Typography
                              sx={{
                                mt: 2,
                                color: '#666',
                                fontSize: '1rem',
                                textAlign: 'center',
                              }}
                            >
                              Select / Drag Screenshot Photo
                            </Typography>
                            <Typography
                              sx={{
                                mt: 0.5,
                                color: '#999',
                                fontSize: '0.875rem',
                              }}
                            >
                              (Image files only)
                            </Typography>
                          </>
                        ) : (
                          <Box sx={{ position: 'relative', width: '100%', padding: '16px' }}>
                            <Box
                              component="img"
                              src={imagePreview}
                              alt="Payment screenshot preview"
                              sx={{
                                width: '100%',
                                maxHeight: '300px',
                                objectFit: 'contain',
                                borderRadius: '8px',
                              }}
                            />
                            <Box
                              sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: 2,
                                mt: 2,
                              }}
                            >
                              <Button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  document.getElementById('payment-screenshot-input')?.click();
                                }}
                                sx={{
                                  color: '#4CAF50',
                                  textTransform: 'none',
                                  fontWeight: 600,
                                  '&:hover': {
                                    backgroundColor: '#f1f8e9',
                                  },
                                }}
                              >
                                Change
                              </Button>
                              <Button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleRemoveImage();
                                }}
                                sx={{
                                  color: '#f44336',
                                  textTransform: 'none',
                                  fontWeight: 600,
                                  '&:hover': {
                                    backgroundColor: '#ffebee',
                                  },
                                }}
                                startIcon={<X size={16} />}
                              >
                                Remove
                              </Button>
                            </Box>
                          </Box>
                        )}
                      </Box>
                      {errors.paymentScreenshot && (
                        <Typography sx={{ color: '#f44336', fontSize: '0.875rem', mt: 1 }}>
                          {errors.paymentScreenshot}
                        </Typography>
                      )}
                    </Box>

                    {/* Send Button */}
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      disabled={isUploading}
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
                        '&:disabled': {
                          backgroundColor: '#cccccc',
                          color: '#666666',
                        },
                      }}
                      startIcon={isUploading ? <CircularProgress size={20} color="inherit" /> : null}
                    >
                      {isUploading ? 'Processing...' : contactPageContent.form.submitButton}
                    </Button>
                  </Box>
                </form>
                {/* Success Message */}
                {showSuccess && (
                  <Box
                    sx={{
                      mb: 3,
                      p: 3,
                      mt: 3,
                      backgroundColor: '#f1f8e9',
                      borderRadius: '12px',
                      border: '2px solid #8BC34A',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <CheckCircle size={28} color="#4CAF50" style={{ marginTop: 2, flexShrink: 0 }} />
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          sx={{
                            color: '#2C5F4F',
                            fontWeight: 600,
                            fontSize: '1.1rem',
                            mb: 1.5,
                          }}
                        >
                          Booking information will be sent via WhatsApp message and we will contact you shortly for booking confirmation and further details.
                        </Typography>
                        <Box
                          sx={{
                            backgroundColor: '#fff9e6',
                            border: '1px solid #FDB714',
                            borderRadius: '8px',
                            padding: '12px 16px',
                            mt: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              color: '#666',
                              fontSize: '0.9rem',
                              lineHeight: 1.6,
                            }}
                          >
                            <strong style={{ color: '#333' }}>Note:</strong> If you don&apos;t hear back from us within 2 to 3 days, please contact us on{' '}
                            <a href="tel:+919564546823" style={{ color: '#1976d2', textDecoration: 'none', fontWeight: 600 }}>
                              +919564546823
                            </a>
                            {' / '}
                            <a href="tel:+919064483605" style={{ color: '#1976d2', textDecoration: 'none', fontWeight: 600 }}>
                              +919064483605
                            </a>
                            {' or '}
                            <a href="mailto:mohandas7176@gmail.com" style={{ color: '#1976d2', textDecoration: 'none', fontWeight: 600 }}>
                              mohandas7176@gmail.com
                            </a>
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
