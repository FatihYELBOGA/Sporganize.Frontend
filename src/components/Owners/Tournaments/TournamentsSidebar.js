import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Box from '@material-ui/core/Box';


const menuItems = [
  { id: 1, label: 'Create Tournament', href: '/owner-tournaments' },
  { id: 2, label: 'My Tournaments', href: '/owner-mytournaments' },
];

const TournamentSidebar = () => {
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
          width: '15%',
          boxSizing: 'border-box',
          top: '10%',
          height: '100%',
          backgroundColor: '#f7f7f7',
        },
      }}
    >
 
      <List>
        {menuItems.map((item) => (
          <ListItem
          
            key={item.id}
            component={RouterLink}
            to={item.href}
            selected={location.pathname === item.href}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: '8%',
              mt: '10%',
              height: '30%', 
              '&:hover': {
                backgroundColor: 'green',
                opacity:0.7,
              },
              '&.Mui-selected, &.Mui-selected:hover': {
                backgroundColor: 'green',
              },
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                backgroundColor: location.pathname === item.href ? 'green' : 'transparent',
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

export default TournamentSidebar;
