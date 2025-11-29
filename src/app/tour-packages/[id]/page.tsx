'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import { CheckCircle } from 'lucide-react';
import { tourPackagesPageContent } from '@/data/tourPackages';
import { contactPageContent } from '@/data/contact';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default function PackageDetailsPage({ params }: { params: { id: string } }) {
  const packageId = parseInt(params.id);
  const packageData = tourPackagesPageContent.packages.find(pkg => pkg.id === packageId);

  if (!packageData || !packageData.details) {
    notFound();
  }

  const details = packageData.details;

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#f5f5f5' }}>
      {/* Hero Section with 8-4 Layout */}
      <Box sx={{ backgroundColor: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            {/* Left Section - 8 columns */}
            <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 66.66%' } }}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: '400px', md: '500px' },
                  backgroundImage: `url(${packageData.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  p: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}
              >
                {/* Top Decorative Corners */}
                <Box
                  sx={{
                    width: 0,
                    height: 0,
                    borderLeft: '60px solid #8BC34A',
                    borderBottom: '60px solid transparent',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                />
                <Box
                  sx={{
                    width: 0,
                    height: 0,
                    borderRight: '60px solid #8BC34A',
                    borderBottom: '60px solid transparent',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                  }}
                />

                {/* Bottom Content - Dark Section with Logo and Description */}
                <Box
                  sx={{
                    backgroundColor: '#1B4D3E',
                    borderRadius: '8px',
                    p: 3,
                    position: 'relative',
                    zIndex: 1,
                    opacity: 0.85,
                  }}
                >
                  {/* Logo */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                    }}
                  >
                    <Box
                      component="img"
                      src="/logo-preview.png"
                      alt="Sundarban Logo"
                      sx={{
                        height: '50px',
                        width: 'auto',
                      }}
                    />
                  </Box>

                  <Typography
                    sx={{
                      color: 'white',
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      lineHeight: 1.7,
                      textAlign: 'justify',
                    }}
                  >
                    {details.fullDescription}
                  </Typography>
                </Box>

                {/* Bottom Decorative Border */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '10px',
                    background: 'repeating-linear-gradient(45deg, #8BC34A, #8BC34A 1px, #1B4D3E 5px, #1B4D3E 2px)'
                  }}
                />
              </Box>
            </Box>

            {/* Right Section - 4 columns */}
            <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 33.33%' } }}>
              <Box
                sx={{
                  backgroundColor: '#1B4D3E',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  position: 'relative',
                }}
              >
                {/* Best Seller Flag */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    backgroundColor: '#FF3333',
                    color: 'white',
                    padding: '8px 16px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 15% 50%)',
                    minWidth: '100px',
                    textAlign: 'right',
                    zIndex: 10,
                  }}
                >
                  Best Seller
                </Box>

                {/* Header */}
                <Box
                  sx={{
                    backgroundColor: '#1B4D3E',
                    pt: 5,
                    pb: 2,
                    px: 3,
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      color: 'white',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      mb: 1,
                    }}
                  >
                    {packageData.title}
                  </Typography>
                </Box>

                {/* Price Section */}
                <Box
                  sx={{
                    // backgroundColor: 'white',
                    // py: 3,
                    // px: 3,
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      color: 'white',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      mb: 0.5,
                    }}
                  >
                    ₹
                  </Typography>
                  <Typography
                    sx={{
                      color: 'white',
                      fontSize: '2rem',
                      fontWeight: 700,
                      lineHeight: 1,
                      mb: 0.5,
                    }}
                  >
                    {details.pricePerHead} / Person [3D, 2N]
                  </Typography>
                </Box>

                {/* Highlights List */}
                <Box sx={{ px: 3, }}>
                  {details.highlights.map((highlight, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        py: 1.5,
                        borderBottom: index < details.highlights.length - 1 ? '1px solid #E0E0E0' : 'none',
                      }}
                    >
                      <CheckCircle size={20} color="white" />
                      <Typography
                        sx={{
                          color: 'white',
                          fontSize: '0.95rem',
                          fontWeight: 500,
                        }}
                      >
                        {highlight}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Box sx={{ textAlign: 'center', px: 3, mt: 2 }}>
                    <Typography
                        sx={{
                            color: 'white',
                            fontSize: '0.95rem',
                            fontWeight: 500,
                        }}
                    >
                        Call at {contactPageContent.contactDetails.contactBoxes[0].value} OR
                    </Typography>
                </Box>

                {/* Call Now Button */}
                <Box sx={{ px: 3, pb: 3, mt: 1 }}>
                    <Link href={`/contact`} style={{ textDecoration: 'none' }}>
                        <Button
                            fullWidth
                            sx={{
                            backgroundColor: '#8BC34A',
                            color: 'white',
                            padding: '14px',
                            fontSize: '1.1rem',
                            fontWeight: 700,
                            borderRadius: '8px',
                            textTransform: 'none',
                            '&:hover': {
                                backgroundColor: '#7CB342',
                            },
                            }}
                        >
                            Book Now
                        </Button>
                    </Link>
                </Box>
            </Box>
          </Box>
          </Box>
        </Container>
      </Box>

      {/* Itinerary Section - 8 column content */}
      <Box sx={{ backgroundColor: '#f5f5f5', py: 6 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 66.66%' } }}>
              {details.itinerary.map((day, dayIndex) => (
                <Box
                  key={dayIndex}
                  sx={{
                    backgroundColor: '#1B4D3E',
                    borderRadius: '16px',
                    p: 4,
                    mb: 4,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Top Decorative Border */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '10px',
                      background: 'repeating-linear-gradient(45deg, #8BC34A, #8BC34A 1px, #1B4D3E 5px, #1B4D3E 2px)'
                    }}
                  />

                  {/* Day Header */}
                  <Box
                    sx={{
                      backgroundColor: '#8BC34A',
                      borderRadius: '30px',
                      py: 2,
                      px: 4,
                      mt: 2,
                      mb: 3,
                    }}
                  >
                    <Typography
                      sx={{
                        color: 'white',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                      }}
                    >
                      {day.day} : {day.title}
                    </Typography>
                  </Box>

                  {/* Itinerary Items */}
                  {day.items.map((item, itemIndex) => (
                    <Box key={itemIndex} sx={{ mb: 3 }}>
                      <Typography
                        sx={{
                          color: 'white',
                          fontSize: '1rem',
                          fontWeight: 600,
                          mb: 1,
                        }}
                      >
                        {item.time}
                      </Typography>
                      <Typography
                        sx={{
                          color: 'white',
                          fontSize: '0.95rem',
                          lineHeight: 1.8,
                          textAlign: 'justify',
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  ))}

                  {/* Bottom Decorative Border */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '10px',
                      background: 'repeating-linear-gradient(45deg, #8BC34A, #8BC34A 1px, #1B4D3E 5px, #1B4D3E 2px)',
                    }}
                  />
                </Box>
              ))}
            </Box>
            <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 33.33%' } }}>
              {/* Empty space for uniform layout */}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Includes Section - 8 column content */}
      <Box sx={{ backgroundColor: '#f5f5f5', py: 6 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 66.66%' } }}>
              <Box
                sx={{
                  backgroundColor: '#1B4D3E',
                  borderRadius: '16px',
                  p: 4,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Top Decorative Border */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '10px',
                    background: 'repeating-linear-gradient(45deg, #8BC34A, #8BC34A 1px, #1B4D3E 5px, #1B4D3E 2px)'
                  }}
                />

                {/* Header */}
                <Box
                  sx={{
                    backgroundColor: '#8BC34A',
                    borderRadius: '30px',
                    py: 2,
                    px: 4,
                    mt: 2,
                    mb: 3,
                  }}
                >
                  <Typography
                    sx={{
                      color: 'white',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                    }}
                  >
                    INCLUDES
                  </Typography>
                </Box>

                {/* Includes List */}
                {details.includes.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 2,
                      mb: 2.5,
                    }}
                  >
                    <CheckCircle size={24} color="#8BC34A" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <Typography
                      sx={{
                        color: 'white',
                        fontSize: '0.95rem',
                        lineHeight: 1.8,
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}

                {/* Bottom Decorative Border */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '10px',
                    background: 'repeating-linear-gradient(45deg, #8BC34A, #8BC34A 1px, #1B4D3E 5px, #1B4D3E 2px)'
                  }}
                />
              </Box>
            </Box>
            <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 33.33%' } }}>
              {/* Empty space for uniform layout */}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Menu Details Section - 8 column content */}
      <Box sx={{ backgroundColor: '#f5f5f5', py: 6 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 66.66%' } }}>
              <Box
                sx={{
                  backgroundColor: '#1B4D3E',
                  borderRadius: '16px',
                  p: 4,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Top Decorative Border */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '10px',
                    background: 'repeating-linear-gradient(45deg, #8BC34A, #8BC34A 1px, #1B4D3E 5px, #1B4D3E 2px)'
                  }}
                />

                {/* Header */}
                <Box
                  sx={{
                    backgroundColor: '#8BC34A',
                    borderRadius: '30px',
                    py: 2,
                    px: 4,
                    mt: 2,
                    mb: 3,
                  }}
                >
                  <Typography
                    sx={{
                      color: 'white',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                    }}
                  >
                    Menu Details
                  </Typography>
                </Box>

                {/* Menu Days */}
                {details.menuDetails.map((menuDay, dayIndex) => (
                  <Box key={dayIndex} sx={{ mb: 4 }}>
                    <Typography
                      sx={{
                        color: 'white',
                        fontSize: '1.3rem',
                        fontWeight: 700,
                        mb: 2,
                      }}
                    >
                      {menuDay.day}
                    </Typography>

                    {menuDay.meals.map((meal, mealIndex) => (
                      <Typography
                        key={mealIndex}
                        sx={{
                          color: 'white',
                          fontSize: '0.95rem',
                          lineHeight: 2,
                          mb: 1,
                        }}
                      >
                        <strong>{meal.mealType}</strong> {meal.items}
                      </Typography>
                    ))}
                  </Box>
                ))}

                {/* Veg Menu Note */}
                <Typography
                  sx={{
                    color: 'white',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    mt: 3,
                  }}
                >
                  Veg Menu Also Available
                </Typography>

                {/* Bottom Decorative Border */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '10px',
                    background: 'repeating-linear-gradient(45deg, #8BC34A, #8BC34A 1px, #1B4D3E 5px, #1B4D3E 2px)'
                  }}
                />
              </Box>
            </Box>
            <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 33.33%' } }}>
              {/* Empty space for uniform layout */}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Things To Carry Section - 8 column content */}
      <Box sx={{ backgroundColor: '#f5f5f5', py: 6, pb: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 66.66%' } }}>
              <Box
                sx={{
                  backgroundColor: '#1B4D3E',
                  borderRadius: '16px',
                  p: 4,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Top Decorative Border */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '10px',
                    background: 'repeating-linear-gradient(45deg, #8BC34A, #8BC34A 1px, #1B4D3E 5px, #1B4D3E 2px)'
                  }}
                />

                {/* Header */}
                <Box
                  sx={{
                    backgroundColor: '#8BC34A',
                    borderRadius: '30px',
                    py: 2,
                    px: 4,
                    mt: 2,
                    mb: 3,
                  }}
                >
                  <Typography
                    sx={{
                      color: 'white',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                    }}
                  >
                    Things To Carry
                  </Typography>
                </Box>

                {/* Things to Carry List */}
                {details.thingsToCarry.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 2,
                      mb: 2.5,
                    }}
                  >
                    <CheckCircle size={24} color="#8BC34A" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <Typography
                      sx={{
                        color: 'white',
                        fontSize: '0.95rem',
                        lineHeight: 1.8,
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}

                {/* Bottom Decorative Border */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '10px',
                    background: 'repeating-linear-gradient(45deg, #8BC34A, #8BC34A 1px, #1B4D3E 5px, #1B4D3E 2px)'
                  }}
                />
              </Box>
            </Box>
            <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 33.33%' } }}>
              {/* Empty space for uniform layout */}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
