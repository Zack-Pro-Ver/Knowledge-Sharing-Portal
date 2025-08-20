import React from 'react';
import { MenuItem, Stack, Typography } from '../elements';

const MenuItemRef: React.FC = () => {
  const handleMenuItemClick = (action: string) => {
    console.log(`Action: ${action}`);
  };

  return (
    <Stack spacing={4} className="p-8">
      <Typography variant="h4" className="font-bold">
        MenuItem Component Reference
      </Typography>
      
      <Stack spacing={6}>
        {/* Basic MenuItem */}
        <Stack spacing={2}>
          <Typography variant="h6" className="font-semibold">
            Basic MenuItem
          </Typography>
          <Stack spacing={2} className="max-w-xs">
            <MenuItem onClick={() => handleMenuItemClick('profile')}>
              Profile
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('settings')}>
              Settings
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('logout')}>
              Logout
            </MenuItem>
          </Stack>
        </Stack>

        {/* MenuItem with Icons */}
        <Stack spacing={2}>
          <Typography variant="h6" className="font-semibold">
            MenuItem with Icons
          </Typography>
          <Stack spacing={2} className="max-w-xs">
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
            <MenuItem 
              startIcon={<span>🚪</span>}
              onClick={() => handleMenuItemClick('logout')}
            >
              Logout
            </MenuItem>
          </Stack>
        </Stack>

        {/* MenuItem with End Icons */}
        <Stack spacing={2}>
          <Typography variant="h6" className="font-semibold">
            MenuItem with End Icons
          </Typography>
          <Stack spacing={2} className="max-w-xs">
            <MenuItem 
              endIcon={<span>→</span>}
              onClick={() => handleMenuItemClick('profile')}
            >
              Profile
            </MenuItem>
            <MenuItem 
              endIcon={<span>↗</span>}
              onClick={() => handleMenuItemClick('external')}
            >
              Open External Link
            </MenuItem>
          </Stack>
        </Stack>

        {/* MenuItem with Both Icons */}
        <Stack spacing={2}>
          <Typography variant="h6" className="font-semibold">
            MenuItem with Both Icons
          </Typography>
          <Stack spacing={2} className="max-w-xs">
            <MenuItem 
              startIcon={<span>👤</span>}
              endIcon={<span>→</span>}
              onClick={() => handleMenuItemClick('profile')}
            >
              Profile
            </MenuItem>
            <MenuItem 
              startIcon={<span>⚙️</span>}
              endIcon={<span>↗</span>}
              onClick={() => handleMenuItemClick('settings')}
            >
              Settings
            </MenuItem>
          </Stack>
        </Stack>

        {/* Disabled State */}
        <Stack spacing={2}>
          <Typography variant="h6" className="font-semibold">
            Disabled State
          </Typography>
          <Stack spacing={2} className="max-w-xs">
            <MenuItem disabled onClick={() => handleMenuItemClick('disabled')}>
              Disabled Menu Item
            </MenuItem>
            <MenuItem 
              disabled
              startIcon={<span>🗑️</span>}
              onClick={() => handleMenuItemClick('disabled-with-icon')}
            >
              Disabled with Icon
            </MenuItem>
          </Stack>
        </Stack>

        {/* Divider */}
        <Stack spacing={2}>
          <Typography variant="h6" className="font-semibold">
            Divider
          </Typography>
          <Stack spacing={2} className="max-w-xs">
            <MenuItem onClick={() => handleMenuItemClick('item1')}>
              Item 1
            </MenuItem>
            <MenuItem divider />
            <MenuItem onClick={() => handleMenuItemClick('item2')}>
              Item 2
            </MenuItem>
          </Stack>
        </Stack>

        {/* Complex Content */}
        <Stack spacing={2}>
          <Typography variant="h6" className="font-semibold">
            Complex Content
          </Typography>
          <Stack spacing={2} className="max-w-md">
            <MenuItem onClick={() => handleMenuItemClick('complex')}>
              <Stack direction="row" spacing={2} alignItems="center">
                <span className="text-xl">👤</span>
                <Stack spacing={0}>
                  <Typography variant="body1" className="font-medium">
                    John Doe
                  </Typography>
                  <Typography variant="body2" className="text-gray-600">
                    john.doe@example.com
                  </Typography>
                </Stack>
              </Stack>
            </MenuItem>
            
            <MenuItem onClick={() => handleMenuItemClick('notification')}>
              <Stack direction="row" spacing={2} alignItems="center">
                <span className="text-xl">🔔</span>
                <Stack spacing={0} className="flex-1">
                  <Typography variant="body1" className="font-medium">
                    New Message
                  </Typography>
                  <Typography variant="body2" className="text-gray-600">
                    You have 3 unread messages
                  </Typography>
                </Stack>
                <Typography variant="caption" className="text-gray-500">
                  2m ago
                </Typography>
              </Stack>
            </MenuItem>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MenuItemRef;
