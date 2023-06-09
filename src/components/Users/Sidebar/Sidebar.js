import { Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { id: 1, label: 'Account', href: '/profile' },
  { id: 3, label: 'My Appointments', href: '/my-appointments' },
  { id: 4, label: 'My Friends', href: '/my-friends' },
  
  
];

const Sidebar = (props) => {

  const { setUserId, setRole } = props;
  const navigate = useNavigate();

  const [drawerOpen, setDrawerOpen] = useState(true);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLogout = () => {
    setUserId(0);
    setRole(null);
    navigate("/");
    console.log("User has logged out.");
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
      <List sx={{marginTop:2}}>
        {menuItems.map((item) => (
          <ListItem
            
            key={item.id}
            component={RouterLink}
            to={item.href}
            selected={location.pathname === item.href}
            sx={{
              display: 'flex',
            
              justifyContent: 'center',
              mb: '5%',
              mt: '5%',
              height: '10%',
              '&:hover': {
                backgroundColor: 'green',
                opacity:0.6
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
        <ListItem
          button
          onClick={handleLogout}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: '5%',
            backgroundColor: 'transparent',
            marginTop:55
          }}
        >
          
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
