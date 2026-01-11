'use client';

import { Box, Container, Typography, Card, CardMedia, Modal, IconButton } from '@mui/material';
import { Home, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { galleryImages } from '@/data/gallery';
import { useState } from 'react';

export default function GalleryPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleClose = () => {
    setSelectedImageIndex(null);
  };

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === 0 ? galleryImages.length - 1 : selectedImageIndex - 1
      );
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === galleryImages.length - 1 ? 0 : selectedImageIndex + 1
      );
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Hero Section with Background */}
      <Box
        sx={{
          position: 'relative',
          height: '400px',
          backgroundImage: 'url(/contactUs.png)',
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
          Gallery
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
          <Typography sx={{ color: 'white', fontWeight: 500 }}>Home</Typography>
          <Typography sx={{ color: 'white' }}>|</Typography>
          <Typography sx={{ color: 'white' }}>Gallery</Typography>
        </Box>
      </Box>

      {/* Gallery Grid Section */}
      <Box sx={{ backgroundColor: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                lg: 'repeat(4, 1fr)',
              },
              gap: 3,
            }}
          >
            {galleryImages.map((image, index) => (
              <Card
                key={image.id}
                onClick={() => handleImageClick(index)}
                sx={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={image.imageUrl}
                  alt={image.title}
                  sx={{
                    width: '100%',
                    height: 250,
                    objectFit: 'cover',
                  }}
                />
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Lightbox Modal */}
      <Modal
        open={selectedImageIndex !== null}
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '90vw',
            height: '90vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            outline: 'none',
          }}
          onClick={handleClose}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 20,
              right: 20,
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 10,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
            }}
          >
            <X size={28} />
          </IconButton>

          {/* Previous Button */}
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            sx={{
              position: 'absolute',
              left: { xs: 10, md: 40 },
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 10,
              width: { xs: 40, md: 56 },
              height: { xs: 40, md: 56 },
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
            }}
          >
            <ChevronLeft size={32} />
          </IconButton>

          {/* Image Container */}
          {selectedImageIndex !== null && (
            <Box
              onClick={(e) => e.stopPropagation()}
              sx={{
                position: 'relative',
                width: { xs: '85vw', md: '70vw' },
                height: { xs: '60vh', md: '70vh' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                borderRadius: '8px',
              }}
            >
              <img
                src={galleryImages[selectedImageIndex].imageUrl}
                alt={galleryImages[selectedImageIndex].title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  borderRadius: '8px',
                }}
              />
            </Box>
          )}

          {/* Next Button */}
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            sx={{
              position: 'absolute',
              right: { xs: 10, md: 40 },
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 10,
              width: { xs: 40, md: 56 },
              height: { xs: 40, md: 56 },
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
            }}
          >
            <ChevronRight size={32} />
          </IconButton>
        </Box>
      </Modal>
    </Box>
  );
}
