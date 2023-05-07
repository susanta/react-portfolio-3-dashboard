import { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { tokens } from '../../theme';

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Box
      sx={{
        '&.pro-sidebar-inner': {
          background: `${colors.primary[400]} !important`,
        },
        '&.pro-icon-wrapper': {
          backgroundColor: 'transparent !important',
        },
        '&.pro-inner-item': {
          padding: '5px 35px 5px 20px !important',
        },
        '&.pro-inner-item:hover': {
          color: '#868dfb !important',
        },
        '&.pro-menu-item.active': {
          color: '#6870fa !important',
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* Logo & Menu Icon */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: '10px 0 20px 0',
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMIN
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`https://dummyimage.com/400x400/0b9184/fff`}
                  style={{ cursor: 'pointer', borderRadius: '50%' }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: '10px 0 0 0' }}
                >
                  Admin Name
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Admin
                </Typography>
              </Box>
            </Box>
          )}
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
