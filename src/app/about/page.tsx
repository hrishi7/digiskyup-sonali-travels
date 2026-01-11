'use client';

import { Box, Container, Typography } from '@mui/material';
import { Home } from 'lucide-react';
import { aboutPageContent } from '@/data/about';

export default function AboutPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Hero Section with Background - Same as Contact Us */}
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
          {aboutPageContent.hero.title}
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
          <Typography sx={{ color: 'white', fontWeight: 500 }}>{aboutPageContent.hero.breadcrumb.home}</Typography>
          <Typography sx={{ color: 'white' }}>|</Typography>
          <Typography sx={{ color: 'white' }}>{aboutPageContent.hero.breadcrumb.current}</Typography>
        </Box>
      </Box>

      {/* About Us Image Postcards */}
      <Box
        sx={{
          backgroundColor: '#2C3E50',
          py: 8,
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: { xs: 2, md: 4 },
              flexWrap: 'wrap',
              position: 'relative',
              minHeight: '400px',
            }}
          >
            {aboutPageContent.postcards.map((postcard, index) => (
              <Box
                key={postcard.id}
                sx={{
                  position: 'relative',
                  width: { xs: '280px', sm: '320px', md: '380px' },
                  backgroundColor: 'white',
                  padding: '20px',
                  paddingBottom: '60px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                  borderRadius: '4px',
                  transform: `rotate(${postcard.rotation}deg) translateY(${index % 2 === 0 ? '0px' : '20px'})`,
                  transition: 'all 0.3s ease',
                  zIndex: 3 - index,
                  '&:hover': {
                    transform: `rotate(0deg) translateY(-10px) scale(1.05)`,
                    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.2)',
                    zIndex: 10,
                  },
                }}
              >
                <Box
                  component="img"
                  src={postcard.image}
                  alt={postcard.alt}
                  sx={{
                    width: '100%',
                    height: { xs: '220px', sm: '250px', md: '280px' },
                    objectFit: 'cover',
                    borderRadius: '2px',
                  }}
                />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Main Content Section */}
      <Box sx={{ backgroundColor: 'white', py: 8 }}>
        <Container maxWidth="lg">
          {/* About Us Label */}
          <Typography
            sx={{
              color: '#1976D2',
              fontSize: '0.875rem',
              fontWeight: 600,
              letterSpacing: '2px',
              mb: 2,
            }}
          >
            {aboutPageContent.content.sectionLabel}
          </Typography>

          {/* Main Title */}
          <Typography
            variant="h3"
            sx={{
              color: '#FDB714',
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '2.75rem' },
              mb: 3,
            }}
          >
            {aboutPageContent.content.title}
          </Typography>

          {/* Content Paragraphs */}
          <Box sx={{ mb: 4 }}>
            <Typography
              sx={{
                color: '#666',
                fontSize: '1rem',
                lineHeight: 1.8,
                mb: 2,
              }}
            >
              <span style={{ color: '#8BC34A', fontWeight: 600 }}>{aboutPageContent.content.highlightText}</span>
              {' '}{aboutPageContent.content.paragraphs[0]}{' '}
              <span style={{ fontWeight: 700, color: '#333' }}>{aboutPageContent.content.highlightBold}</span>
              {aboutPageContent.content.paragraphs[1]}
            </Typography>
            <Typography
              sx={{
                color: '#666',
                fontSize: '1rem',
                lineHeight: 1.8,
              }}
            >
              {aboutPageContent.content.paragraphs[2]}
            </Typography>
          </Box>

          {/* Footer Boxes - Google Reviews and Support */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 3,
              mt: 6,
            }}
          >
            {/* Google Reviews Box */}
            <Box
              sx={{
                flex: 1,
                backgroundColor: 'white',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                padding: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              }}
            >
              <Box sx={{ mb: 2 }}>
                <svg width="200" height="80" viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
                    <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
                    <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/>
                    <path d="M224 3.87v65.13h-9.5V3.87h9.5z" fill="#34A853"/>
                    <path d="M261.66 54.22l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/>
                    <path d="M34.93 40.94v-9.41h31.71c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C15.96 68.88 0 53.42 0 34.44 0 15.46 15.96 0 34.94 0c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z" fill="#4285F4"/>
                  </g>
                </svg>
              </Box>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#666',
                  fontWeight: 500,
                }}
              >
                {aboutPageContent.footer.googleReviews.label}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 1 }}>
                <Typography
                  sx={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#333',
                  }}
                >
                  {aboutPageContent.footer.googleReviews.rating}
                </Typography>
                <Box sx={{ display: 'flex', gap: 0.2, ml: 0.5 }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Typography key={star} sx={{ color: '#FDB714', fontSize: '1.2rem' }}>★</Typography>
                  ))}
                </Box>
              </Box>
            </Box>

            {/* 24x7 Support Box */}
            <Box
              sx={{
                flex: 1,
                backgroundColor: '#5CB85C',
                borderRadius: '8px',
                padding: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              }}
            >
              <Typography
                sx={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                {aboutPageContent.footer.support.text}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
