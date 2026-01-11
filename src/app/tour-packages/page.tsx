'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import { Home } from 'lucide-react';
import { tourPackagesPageContent, TourPackage, PackageFeature } from '@/data/tourPackages';
import Link from 'next/link';

export default function TourPackagesPage() {
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
          {tourPackagesPageContent.hero.title}
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
          <Typography sx={{ color: 'white', fontWeight: 500 }}>{tourPackagesPageContent.hero.breadcrumb.home}</Typography>
          <Typography sx={{ color: 'white' }}>|</Typography>
          <Typography sx={{ color: 'white' }}>{tourPackagesPageContent.hero.breadcrumb.current}</Typography>
        </Box>
      </Box>

      {/* Packages Section */}
      <Box sx={{ backgroundColor: 'white', py: 8 }}>
        <Container maxWidth="lg">
          {/* Section Header */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              sx={{
                color: '#1976D2',
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '2px',
                mb: 2,
              }}
            >
              {tourPackagesPageContent.packagesSection.sectionLabel}
            </Typography>
            
            <Typography
              variant="h3"
              sx={{
                color: '#1976D2',
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.75rem' },
                mb: 3,
              }}
            >
              {tourPackagesPageContent.packagesSection.title}
            </Typography>
            
            <Typography
              sx={{
                color: '#666',
                fontSize: '1rem',
                lineHeight: 1.8,
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              At <span style={{ color: '#8BC34A', fontWeight: 600 }}>{tourPackagesPageContent.packagesSection.highlightText}</span>, we provide exciting tour packages that let you explore the stunning Sundarbans. Enjoy wildlife safaris, peaceful boat rides, and comfortable stays while tasting delicious local food. Our flexible options are perfect for everyone, ensuring you have a memorable adventure tailored just for you!
            </Typography>
          </Box>

          {/* Package Cards Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
              gap: 4,
            }}
          >
            {tourPackagesPageContent.packages.map((pkg: TourPackage) => (
              <Box key={pkg.id}>
                <Box
                  sx={{
                    position: 'relative',
                    borderTopLeftRadius: '16px',
                    overflow: 'visible',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    margin: 0,
                    padding: 0,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  {/* Price Sticker - Top Right - Overlapping */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '-20px',
                      right: 0,
                      backgroundColor: '#FF3333',
                      color: 'white',
                      padding: '12px 20px',
                      fontWeight: 700,
                      fontSize: '1rem',
                      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 15% 100%)',
                      minWidth: '160px',
                      textAlign: 'right',
                      zIndex: 10,
                    }}
                  >
                    {pkg.price}
                  </Box>

                  {/* Card Image */}
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: '200px',
                      backgroundImage: `url(${pkg.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      borderTopLeftRadius: '24px',
                      // overflow: 'hidden',
                      // objectFit: 'contain',
                      margin: 0,
                      padding: 0,
                    }}
                  >

                    {/* Bottom Overlay Section */}
                    
                  </Box>

                  {/* Card Content */}
                  <Box
                    sx={{
                      backgroundColor: '#2C2C2C',
                      padding: '24px',
                      borderBottomRightRadius: '16px',
                    }}
                  >
                    <Typography
                      sx={{
                        color: '#FDB714',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        mb: 2,
                      }}
                    >
                      {pkg.title}
                    </Typography>
                    
                    <Typography
                      sx={{
                        color: '#E0E0E0',
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                        mb: 3,
                      }}
                    >
                      {pkg.description}
                    </Typography>

                    <Link href={`/tour-packages/${pkg.id}`} style={{ textDecoration: 'none' }}>
                      <Button
                        fullWidth
                        sx={{
                          backgroundColor: '#666',
                          color: 'white',
                          padding: '12px',
                          fontSize: '1rem',
                          fontWeight: 600,
                          borderRadius: '8px',
                          textTransform: 'none',
                          '&:hover': {
                            backgroundColor: '#555',
                          },
                        }}
                      >
                        Package Details
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
