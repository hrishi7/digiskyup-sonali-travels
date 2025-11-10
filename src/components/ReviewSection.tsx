'use client';

import { Box, Container, Typography, Avatar, Rating } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { ReviewItem } from '@/data/homepage';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface ReviewSectionProps {
  title: string;
  description: string;
  reviewItems: ReviewItem[];
}

export default function ReviewSection({ title, description, reviewItems }: ReviewSectionProps) {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: '#FFFFFF',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 4, md: 6 },
            px: { xs: 2, sm: 3 },
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
              fontWeight: 700,
              color: '#0A5F4E',
              mb: 2,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
              lineHeight: 1.7,
              color: '#555555',
              maxWidth: '900px',
              mx: 'auto',
            }}
          >
            {description}
          </Typography>
        </Box>

        {/* Review Carousel */}
        <Box
          sx={{
            px: { xs: 2, sm: 3 },
            pt: { xs: 6, sm: 7 },
            '& .swiper': {
              pb: 6,
            },
            '& .swiper-slide': {
              height: 'auto',
              minHeight: { xs: '320px', sm: '350px' },
            },
            '& .swiper-pagination-bullet': {
              backgroundColor: '#0A5F4E',
              opacity: 0.4,
            },
            '& .swiper-pagination-bullet-active': {
              opacity: 1,
            },
            '& .swiper-button-next, & .swiper-button-prev': {
              color: '#0A5F4E',
              '&::after': {
                fontSize: { xs: '30px', md: '40px' },
              },
            },
          }}
        >
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
          >
            {reviewItems.map((review) => (
              <SwiperSlide key={review.id}>
                <Box
                  sx={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    p: { xs: 3, sm: 4 },
                    pt: { xs: 7, sm: 8 },
                    ml: 2,
                    mr: 2,
                    // pb: { xs: 4, sm: 5 },
                    position: 'relative',
                    minHeight: { xs: '280px', sm: '300px' },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 8px 28px rgba(0, 0, 0, 0.15)',
                    },
                  }}
                >
                  {/* Avatar - Positioned at top center */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '20px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}
                  >
                    <Avatar
                      src={review.imageUrl}
                      alt={review.name}
                      sx={{
                        width: { xs: 80, sm: 90 },
                        height: { xs: 80, sm: 90 },
                        border: '4px solid #FFFFFF',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                      }}
                    />
                  </Box>

                  {/* Name */}
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontSize: { xs: '1.1rem', sm: '1.25rem' },
                      fontWeight: 600,
                      color: '#0A5F4E',
                      mb: 1,
                      mt: 6,
                    }}
                  >
                    {review.name}
                  </Typography>

                  {/* Star Rating */}
                  <Rating
                    value={review.rating}
                    readOnly
                    precision={0.5}
                    sx={{
                      mb: 2,
                      '& .MuiRating-iconFilled': {
                        color: '#FFB800',
                      },
                    }}
                  />

                  {/* Review Text */}
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: '0.9rem', sm: '0.95rem' },
                      lineHeight: 1.7,
                      color: '#666666',
                      fontStyle: 'italic',
                      ml: 2,
                      mr: 2,
                    }}
                  >
                    &ldquo;{review.review}&rdquo;
                  </Typography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
}
