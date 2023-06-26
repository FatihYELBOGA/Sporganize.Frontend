import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Box from '@material-ui/core/Box';

const menuItems = [
  { id: 1, label: 'Create Team', href: '/Teams' },
  { id: 2, label: 'Join Team', href: '/JoinTeam' },
];

const TeamsSidebar = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={drawerOpen}
      sx={{
        width: '20%',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: '20%',
          boxSizing: 'border-box',
          top: '10%',
          height: '100%',
          backgroundColor: '#E8EAE0',
        },
      }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.id}
            component={RouterLink}
            to={item.href}
            selected={location.pathname === item.href}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: '8%',
              mt: '10%',
              height: '20%', 
              '&:hover': {
                backgroundColor: 'rgba(100, 124, 49, 0.5)',
              },
              '&.Mui-selected, &.Mui-selected:hover': {
                backgroundColor: '#647C31',
              },
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                backgroundColor: location.pathname === item.href ? '#647C31' : 'transparent',
                zIndex: -1,
              }}
            />
            <ListItemText 
              primary={item.label} 
              sx={{ 
                color: location.pathname === item.href ? '#fff' : '#000', 
                textAlign: 'center',
                '&:hover': {
                  color: '#fff',
                },
              }} 
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default TeamsSidebar;
