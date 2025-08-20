import React, { useState } from 'react';
import { Menu, MenuItem, Button, Stack, Typography } from '../elements';

const MenuRef: React.FC = () => {
  const [anchorEl1, setAnchorEl1] = useState<HTMLElement | null>(null);
  const [open1, setOpen1] = useState(false);
  const [anchorEl2, setAnchorEl2] = useState<HTMLElement | null>(null);
  const [open2, setOpen2] = useState(false);
  const [anchorEl3, setAnchorEl3] = useState<HTMLElement | null>(null);
  const [open3, setOpen3] = useState(false);
  const [anchorEl4, setAnchorEl4] = useState<HTMLElement | null>(null);
  const [open4, setOpen4] = useState(false);
  const [anchorEl5, setAnchorEl5] = useState<HTMLElement | null>(null);
  const [open5, setOpen5] = useState(false);
  const [anchorEl6, setAnchorEl6] = useState<HTMLElement | null>(null);
  const [open6, setOpen6] = useState(false);

  const handleClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl1(event.currentTarget);
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
    setAnchorEl1(null);
  };

  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl2(event.currentTarget);
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
    setAnchorEl2(null);
  };

  const handleClick3 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl3(event.currentTarget);
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
    setAnchorEl3(null);
  };

  const handleClick4 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl4(event.currentTarget);
    setOpen4(true);
  };

  const handleClose4 = () => {
    setOpen4(false);
    setAnchorEl4(null);
  };

  const handleClick5 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl5(event.currentTarget);
    setOpen5(true);
  };

  const handleClose5 = () => {
    setOpen5(false);
    setAnchorEl5(null);
  };
  const handleClick6 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl6(event.currentTarget);
    setOpen6(true);
  };

  const handleClose6 = () => {
    setOpen6(false);
    setAnchorEl6(null);
  };

  const handleMenuItemClick = (action: string) => {
    console.log(`Action: ${action}`);
  };

  return (
    <Stack spacing={4} className="p-8">
      <Typography variant="h4" className="font-bold">
        Menu Component Reference
      </Typography>
      
      <Stack spacing={6}>
        {/* Basic Menu */}
        <Stack spacing={2}>
          <Typography variant="h6" className="font-semibold">
            Basic Menu
          </Typography>
          <div className="relative">
            <Button onClick={handleClick1}>Open Menu</Button>
            <Menu
              open={open1}
              anchorEl={anchorEl1}
              onClose={handleClose1}
              position="bottom-left"
            >
              <MenuItem onClick={() => handleMenuItemClick('profile')}>
                Profile
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('settings')}>
                Settings
              </MenuItem>
              <MenuItem divider />
              <MenuItem onClick={() => handleMenuItemClick('logout')}>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Stack>

        {/* Additional MenuItem examples */}
        <Stack spacing={2}>
          <Typography variant="h6" className="font-semibold">
            Additional MenuItem Examples
          </Typography>
          <div className="relative">
            <Button onClick={handleClick2}>Show More Examples</Button>
            <Menu
              open={open2}
              anchorEl={anchorEl2}
              onClose={handleClose2}
              position="bottom-left"
            >
              <MenuItem 
                startIcon={<span>📊</span>}
                endIcon={<span>→</span>}
                onClick={() => handleMenuItemClick('analytics')}
              >
                Analytics Dashboard
              </MenuItem>
              <MenuItem 
                startIcon={<span>📈</span>}
                color="success"
                onClick={() => handleMenuItemClick('reports')}
              >
                Generate Reports
              </MenuItem>
              <MenuItem 
                startIcon={<span>⚠️</span>}
                color="warning"
                onClick={() => handleMenuItemClick('alerts')}
              >
                View Alerts
              </MenuItem>
              <MenuItem divider />
              <MenuItem 
                startIcon={<span>🎨</span>}
                variant="outlined"
                onClick={() => handleMenuItemClick('theme')}
              >
                Theme Settings
              </MenuItem>
              <MenuItem 
                startIcon={<span>🔒</span>}
                variant="contained"
                color="error"
                onClick={() => handleMenuItemClick('security')}
              >
                Security Settings
              </MenuItem>
            </Menu>
          </div>
        </Stack>

        {/* Menu with Icons */}
        <Stack spacing={2}>
          <Typography variant="h6" className="font-semibold">
            Menu with Icons
          </Typography>
          <div className="relative">
            <Button onClick={handleClick3}>Menu with Icons</Button>
            <Menu
              open={open3}
              anchorEl={anchorEl3}
              onClose={handleClose3}
              position="bottom-left"
            >
              <MenuItem 
                startIcon={<span>👤</span>}
                onClick={() => handleMenuItemClick('profile')}
              >
                Profile
              </MenuItem>
              <MenuItem 
                startIcon={<span>⚙️</span>}
                onClick={() => handleMenuItemClick('settings')}
              >
                Settings
              </MenuItem>
              <MenuItem divider />
              <MenuItem 
                startIcon={<span>🚪</span>}
                onClick={() => handleMenuItemClick('logout')}
              >
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Stack>

        {/* Different Positions */}
        <Stack spacing={2}>
          <Typography variant="h6" className="font-semibold">
            Different Positions
          </Typography>
          <Stack direction="row" spacing={4}>
            <div className="relative">
              <Button onClick={handleClick4}>Bottom Left</Button>
              <Menu
                open={open4}
                anchorEl={anchorEl4}
                onClose={handleClose4}
                position="bottom-left"
              >
                <MenuItem onClick={() => handleMenuItemClick('item1')}>
                  Item 1
                </MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('item2')}>
                  Item 2
                </MenuItem>
              </Menu>
            </div>
            
            <div className="relative">
              <Button onClick={handleClick5}>Bottom Right</Button>
              <Menu
                open={open5}
                anchorEl={anchorEl5}
                onClose={handleClose5}
                position="bottom-right"
              >
                <MenuItem onClick={() => handleMenuItemClick('item1')}>
                  Item 1
                </MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('item2')}>
                  Item 2
                </MenuItem>
              </Menu>
            </div>
          </Stack>
        </Stack>

        {/* Disabled Items */}
        <Stack spacing={2}>
          <Typography variant="h6" className="font-semibold">
            Disabled Items
          </Typography>
          <div className="relative">
            <Button onClick={handleClick6}>Menu with Disabled Items</Button>
            <Menu
              open={open6}
              anchorEl={anchorEl6}
              onClose={handleClose6}
              position="bottom-left"
            >
              <MenuItem onClick={() => handleMenuItemClick('edit')}>
                Edit
              </MenuItem>
              <MenuItem disabled>
                Delete (Disabled)
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('duplicate')}>
                Duplicate
              </MenuItem>
            </Menu>
          </div>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MenuRef;
