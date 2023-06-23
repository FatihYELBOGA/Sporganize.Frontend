import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';


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
            style={{
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: location.pathname === item.href ? '#647C31' : 'transparent',
              marginBottom: '8%',
              marginTop: '10%',
              height: '20%', 
              '&:hover': {
                backgroundColor: location.pathname === item.href ? '#647C31' : 'rgba(100, 124, 49, 0.5)',
              },
            }}
          >
            <ListItemText primary={item.label} style={{ color: '#000', textAlign: 'center' }} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default TeamsSidebar;