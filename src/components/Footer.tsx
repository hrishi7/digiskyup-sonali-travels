'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link as MuiLink,
  IconButton,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from 'next/link';
import Image from 'next/image';
import { footerSections, socialMediaLinks, footerInfo } from '@/data/footer';

const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Facebook':
        return <FacebookIcon />;
      case 'Twitter':
        return <TwitterIcon />;
      case 'Instagram':
        return <InstagramIcon />;
      case 'LinkedIn':
        return <LinkedInIcon />;
      default:
        return null;
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        pt: 6,
        pb: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(5, 1fr)',
            },
            gap: 4,
          }}
        >
          {/* Social Media */}
          <Box>
            <Box sx={{ mb: 2 }}>
              <Image
                src="/logo-preview.png"
                alt="Maa Laxmi homestay Logo"
                width={150}
                height={50}
                style={{ objectFit: 'contain' }}
              />
            </Box>
            {/* <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', ml: 4 }}>
              Follow Us
            </Typography> */}
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {socialMediaLinks.map((social) => (
                <IconButton
                  key={social.id}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                      backgroundColor: 'secondary.main',
                    },
                  }}
                  aria-label={social.name}
                >
                  {getSocialIcon(social.icon)}
                </IconButton>
              ))}
            </Box>
          </Box>
          
          {/* Footer Sections */}
          {footerSections.map((section) => (
            <Box key={section.id}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                {section.title}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {section.links.map((link) => (
                  <MuiLink
                    key={link.id}
                    component={Link}
                    href={link.path}
                    color="inherit"
                    underline="hover"
                    sx={{
                      fontSize: '0.875rem',
                      '&:hover': {
                        color: 'secondary.main',
                      },
                    }}
                  >
                    {link.label}
                  </MuiLink>
                ))}
              </Box>
            </Box>
          ))}

         

           {/* Company Info */}
          <Box>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              {footerInfo.companyName}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              {footerInfo.tagline}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationOnIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
              <Typography variant="body2">{footerInfo.address}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <EmailIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
              <Typography variant="body2">{footerInfo.email}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <PhoneIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
              <Typography variant="body2">{footerInfo.phone}</Typography>
            </Box>
          </Box>

          {/* Google Map */}
          <Box>
            <Box
              sx={{
                width: '100%',
                height: '200px',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902875555556!2d90.36389!3d23.7726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77c6c6c6c6c%3A0x6c6c6c6c6c6c6c6c!2sYour%20Success%20Academy!5e0!3m2!1sen!2sbd!4v1699999999999"
              />
            </Box>
          </Box>

        </Box>

        <Divider sx={{ my: 3, backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />

        {/* Copyright */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: isMobile ? 'column' : 'row',
            gap: 1,
          }}
        >
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Created by{' '}
            <MuiLink
              href={footerInfo.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              underline="hover"
              sx={{
                '&:hover': {
                  color: 'secondary.main',
                },
              }}
            >
              DigiSkyUp
            </MuiLink>
            . All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
