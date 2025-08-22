import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Menu from "./index";
import MenuItem from "../MenuItem";
import Typography from "../Typography";
import Stack from "../Stack";
import {
  RiHomeLine,
  RiUserLine,
  RiSettingsLine,
  RiEditLine,
  RiDeleteBinLine,
  RiNotificationLine,
  RiQuestionLine,
  RiLogoutCircleLine,
  RiFileListLine,
} from "@remixicon/react";

const meta: Meta<typeof Menu> = {
  title: "Elements/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Template component for interactive stories
const MenuTemplate = (args: any) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  return (
    <div className="relative">
      <button onClick={handleClick} className="px-4 py-2 bg-blue-500 text-white rounded">
        Open Menu
      </button>
      <Menu
        {...args}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        {args.children}
      </Menu>
    </div>
  );
};

// Basic Menu
export const Basic: Story = {
  render: () => (
    <MenuTemplate>
      <MenuItem startIcon={<RiHomeLine size={20} />}>Home</MenuItem>
      <MenuItem startIcon={<RiUserLine size={20} />}>Profile</MenuItem>
      <MenuItem startIcon={<RiSettingsLine size={20} />}>Settings</MenuItem>
      <MenuItem divider />
      <MenuItem startIcon={<RiLogoutCircleLine size={20} />}>Logout</MenuItem>
    </MenuTemplate>
  ),
};

// Menu with Icons
export const WithIcons: Story = {
  render: () => (
    <MenuTemplate>
      <MenuItem startIcon={<RiUserLine size={20} />}>Profile</MenuItem>
      <MenuItem startIcon={<RiSettingsLine size={20} />}>Settings</MenuItem>
      <MenuItem startIcon={<RiEditLine size={20} />}>Edit</MenuItem>
      <MenuItem startIcon={<RiDeleteBinLine size={20} />}>Delete</MenuItem>
    </MenuTemplate>
  ),
};

// Menu with Complex Content
export const Complex: Story = {
  render: () => (
    <MenuTemplate>
      <MenuItem startIcon={<RiUserLine size={20} />}>
        <Typography variant="body1">Profile</Typography>
        <Typography variant="caption" color="textSecondary">View your profile</Typography>
      </MenuItem>
      <MenuItem startIcon={<RiSettingsLine size={20} />}>
        <Typography variant="body1">Settings</Typography>
        <Typography variant="caption" color="textSecondary">Configure your preferences</Typography>
      </MenuItem>
      <MenuItem startIcon={<RiEditLine size={20} />}>
        <Stack direction="row" spacing={2} alignItems="center">
          <RiEditLine size={20} />
          <Stack direction="column" spacing={0}>
            <Typography variant="body1">Edit Profile</Typography>
            <Typography variant="caption" color="textSecondary">Update your information</Typography>
          </Stack>
        </Stack>
      </MenuItem>
    </MenuTemplate>
  ),
};

// Menu with Different Positions
export const Positions: Story = {
  render: () => (
    <MenuTemplate>
      <MenuItem startIcon={<RiFileListLine size={20} />}>File</MenuItem>
      <MenuItem startIcon={<RiEditLine size={20} />}>Edit</MenuItem>
      <MenuItem startIcon={<RiSettingsLine size={20} />}>View</MenuItem>
      <MenuItem startIcon={<RiSettingsLine size={20} />}>Settings</MenuItem>
    </MenuTemplate>
  ),
};

// Kitchen Sink
export const KitchenSink: Story = {
  render: () => (
    <MenuTemplate>
      <MenuItem startIcon={<RiUserLine size={20} />}>
        <Typography variant="body1">Profile</Typography>
      </MenuItem>
      <MenuItem startIcon={<RiSettingsLine size={20} />}>
        <Typography variant="body1">Settings</Typography>
      </MenuItem>
      <MenuItem startIcon={<RiEditLine size={20} />}>
        <Typography variant="body1">Edit Profile</Typography>
      </MenuItem>
      <MenuItem startIcon={<RiDeleteBinLine size={20} />}>
        <Typography variant="body1">Delete</Typography>
      </MenuItem>
      <MenuItem divider />
      <MenuItem startIcon={<RiSettingsLine size={20} />}>
        <Typography variant="body1">Settings</Typography>
      </MenuItem>
      <MenuItem startIcon={<RiNotificationLine size={20} />}>
        <Typography variant="body1">Notifications</Typography>
      </MenuItem>
      <MenuItem startIcon={<RiQuestionLine size={20} />}>
        <Typography variant="body1">Help & Support</Typography>
      </MenuItem>
      <MenuItem divider />
      <MenuItem startIcon={<RiLogoutCircleLine size={20} />}>
        <Typography variant="body1">Logout</Typography>
      </MenuItem>
    </MenuTemplate>
  ),
};
