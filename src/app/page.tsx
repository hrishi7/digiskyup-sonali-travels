import { Metadata } from 'next';
import { Box, Container, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';
import { pageSEO } from '@/config/seo.config';
import { heroSection, featureCards, whyChooseUs, reviewSection } from '@/data/homepage';
import { tourPackagesPageContent, TourPackage } from '@/data/tourPackages';
import ReviewSection from '@/components/ReviewSection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: pageSEO.home.title,
  description: pageSEO.home.description,
};

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1, position: 'relative', overflow: 'hidden' }}>
      {/* Hero Section with Video Background */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '600px', sm: '700px', md: '800px' },
          overflow: 'hidden',
        }}
      >
        {/* Video Background */}
        <Box
          component="video"
          autoPlay
          loop
          muted
          playsInline
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        >
          <source src={heroSection.videoUrl} type="video/mp4" />
        </Box>

        {/* Dark Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            zIndex: 1,
          }}
        />

        {/* Hero Content */}
        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 2,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            px: { xs: 2, sm: 3 },
          }}
        >
          {/* Company Name */}
          <Typography
            variant="overline"
            sx={{
              color: '#FFB800',
              fontSize: { xs: '0.875rem', sm: '1rem' },
              fontWeight: 600,
              letterSpacing: '0.15em',
              mb: 2,
            }}
          >
            {heroSection.companyName}
          </Typography>

          {/* Headline */}
          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: '#FFFFFF',
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5rem' },
              fontWeight: 700,
              lineHeight: 1.2,
              mb: 3,
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            {heroSection.headline}
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              color: '#FFFFFF',
              fontSize: { xs: '0.95rem', sm: '1.1rem', md: '1.15rem' },
              lineHeight: 1.7,
              maxWidth: '900px',
              mb: 4,
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
            }}
          >
            {heroSection.description}
          </Typography>

          {/* CTA Button */}
          <Link href="/tour-packages">
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#0A5F4E',
              color: '#FFFFFF',
              fontSize: { xs: '1rem', sm: '1.1rem' },
              fontWeight: 600,
              px: { xs: 4, sm: 5 },
              py: { xs: 1.5, sm: 1.8 },
              mb: 2,
              borderRadius: '8px',
              textTransform: 'none',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              '&:hover': {
                backgroundColor: '#084538',
                boxShadow: '0 6px 16px rgba(0, 0, 0, 0.4)',
              },
            }}
          >
            {heroSection.ctaText}
          </Button></Link>
        </Container>
      </Box>

      {/* Tour Packages Section */}
      <Box sx={{ backgroundColor: 'white', py: 8, mb:20 }}>
        <Container maxWidth="lg">
          {/* Section Header */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              sx={{
                color: '#1B4D3E',
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '2px',
                mb: 2,
              }}
            >
              OUR PACKAGES
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
              Featured Tour Packages
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
              Explore our carefully curated tour packages designed to give you an unforgettable Sundarban experience. Choose from our economical, standard, or premium packages to match your preferences.
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
                      margin: 0,
                      padding: 0,
                    }}
                  />

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

      {/* Feature Cards Section - Overlapping */}
      <Box
        sx={{
          position: 'relative',
          mt: { xs: '-120px', sm: '-140px', md: '-160px' },
          zIndex: 3,
          pb: 8,
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(4, 1fr)',
              },
              gap: { xs: 3, sm: 4, md: 4 },
            }}
          >
            {featureCards.map((card) => (
              <Card
                key={card.id}
                sx={{
                  backgroundColor: '#0A5F4E',
                  color: '#FFFFFF',
                  borderRadius: '16px 0 16px 0',
                  overflow: 'visible',
                  position: 'relative',
                  height: '100%',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4)',
                  },
                }}
              >
                {/* Card Image */}
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    image={card.image}
                    alt={card.title}
                    sx={{
                      height: { xs: 180, sm: 200 },
                      objectFit: 'cover',
                      borderRadius: '16px 0 0 0',
                    }}
                  />
                  
                </Box>

                <CardContent
                  sx={{
                    p: 3,
                    position: 'relative',
                    '&:last-child': { pb: 3 },
                  }}
                >
                  {/* Decorative Leaf Icon */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '-35px',
                      left: '20px',
                      width: '50px',
                      height: '50px',
                      backgroundColor: '#0A5F4E',
                      borderRadius: '50%',
                      border: '3px solid #FFB800',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                    }}
                  >
                    🌿
                  </Box>

                  {/* Card Title */}
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      mb: 1.5,
                      mt: 2,
                    }}
                  >
                    {card.title}
                  </Typography>

                  {/* Card Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                      color: 'rgba(255, 255, 255, 0.9)',
                    }}
                  >
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              {whyChooseUs.title}
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              {whyChooseUs.description}
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Reviews Section */}
      <ReviewSection
        title={reviewSection.title}
        description={reviewSection.description}
        reviewItems={reviewSection.reviewItems}
      />
    </Box>
  );
}
