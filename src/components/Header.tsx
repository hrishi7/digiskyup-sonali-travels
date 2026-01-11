'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Container,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navigationItems } from '@/data/navigation';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const pathname = usePathname();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  const drawer = (
    <Box
      sx={{
        width: 250,
        height: '100%',
        backgroundColor: 'primary.main',
        color: 'white',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
        }}
      >
        <Box sx={{ position: 'relative', width: 150, height: 65 }}>
          <Image
                  src="/sonali-logo.png"
            alt="Sonali Tour & Travels"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </Box>
        <IconButton
          color="inherit"
          aria-label="close drawer"
          onClick={handleDrawerToggle}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navigationItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              component={Link}
              href={item.path}
              onClick={handleDrawerToggle}
              sx={{
                backgroundColor: isActive(item.path)
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Top Contact Strip */}
      <Box
        sx={{
          backgroundColor: '#1565C0',
          color: 'white',
          py: 1,
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-start' },
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: { xs: 2, md: 4 },
              fontSize: { xs: '0.75rem', md: '0.875rem' },
            }}
          >
            {/* Location */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              <LocationOnIcon sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }} />
              <span>Canning, Sundarban</span>
            </Box>

            {/* Email */}
            <Box
              component="a"
              href="mailto:babluhalder8520@gmail.com"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                color: 'white',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              <EmailIcon sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }} />
              <span>babluhalder8520@gmail.com</span>
            </Box>

            {/* Phone */}
            <Box
              component="a"
              href="tel:+919614731529"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                color: 'white',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              <PhoneIcon sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }} />
              <span>+91 9614731529</span>
            </Box>
          </Box>
        </Container>
      </Box>

      <AppBar position="sticky" sx={{ backgroundColor: 'primary.main' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo */}
            <Box
              component={Link}
              href="/"
              sx={{
                flexGrow: isMobile ? 1 : 1,
                mr: 4,
                position: 'relative',
                width: { xs: 140, md: 200 },
                height: { xs: 110, md: 120 },
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Image
                      src="/sonali-logo.png"
                alt="Sonali Tour & Travels"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ flexGrow: 1, display: 'flex', gap: 1, alignItems: 'center' }}>
                {navigationItems.map((item) => (
                  <Button
                    key={item.id}
                    component={Link}
                    href={item.path}
                    sx={{
                      color: 'white',
                      textTransform: 'none',
                      fontSize: '1rem',
                      fontWeight: isActive(item.path) ? 'bold' : 'normal',
                      borderBottom: isActive(item.path)
                        ? '2px solid white'
                        : '2px solid transparent',
                      borderRadius: 0,
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}

            {/* Mobile ISO Tag */}
            {isMobile && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  backgroundColor: '#2E8B57',
                  px: 1,
                  py: 0.4,
                  borderRadius: 1,
                  fontSize: '0.65rem',
                  fontWeight: 500,
                  mr: 1,
                }}
              >
                <WorkspacePremiumIcon sx={{ fontSize: '0.85rem' }} />
                <span>ISO 9001:2015</span>
              </Box>
            )}

            {/* Mobile Menu Icon */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
