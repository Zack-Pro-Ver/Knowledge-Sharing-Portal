import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import MenuItem from "./index";
import Typography from "../Typography";
import Stack from "../Stack";
import {
  RiHomeLine,
  RiUserLine,
  RiSettingsLine,
  RiEditLine,
  RiDeleteBinLine,
  RiMailLine,
  RiNotificationLine,
  RiQuestionLine,
  RiLogoutCircleLine,
  RiArrowRightLine,
  RiExternalLinkLine,
  RiForbidLine,
} from "@remixicon/react";

const meta: Meta<typeof MenuItem> = {
  title: "Elements/MenuItem",
  component: MenuItem,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Menu Item",
  },
};

export const Variants: Story = {
  render: () => (
    <Stack direction="column" spacing={2} style={{ minWidth: 200 }}>
      <MenuItem variant="text">Text Menu Item</MenuItem>
      <MenuItem variant="outlined">Outlined Menu Item</MenuItem>
      <MenuItem variant="contained">Contained Menu Item</MenuItem>
    </Stack>
  ),
};

export const Colors: Story = {
  render: () => (
    <Stack direction="column" spacing={2} style={{ minWidth: 200 }}>
      <MenuItem color="primary">Primary Menu Item</MenuItem>
      <MenuItem color="secondary">Secondary Menu Item</MenuItem>
      <MenuItem color="error">Error Menu Item</MenuItem>
      <MenuItem color="warning">Warning Menu Item</MenuItem>
      <MenuItem color="info">Info Menu Item</MenuItem>
      <MenuItem color="success">Success Menu Item</MenuItem>
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="column" spacing={2} style={{ minWidth: 200 }}>
      <MenuItem size="small">Small Menu Item</MenuItem>
      <MenuItem size="medium">Medium Menu Item</MenuItem>
      <MenuItem size="large">Large Menu Item</MenuItem>
    </Stack>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Stack direction="column" spacing={2} style={{ minWidth: 240 }}>
      <MenuItem startIcon={<RiHomeLine size={20} />}>Home</MenuItem>
      <MenuItem startIcon={<RiUserLine size={20} />} endIcon={<RiArrowRightLine size={16} />}>Profile</MenuItem>
      <MenuItem startIcon={<RiSettingsLine size={20} />}>Settings</MenuItem>
      <MenuItem startIcon={<RiEditLine size={20} />} endIcon={<RiExternalLinkLine size={16} />}>Edit</MenuItem>
      <MenuItem startIcon={<RiDeleteBinLine size={20} />}>Delete</MenuItem>
    </Stack>
  ),
};

export const WithTypography: Story = {
  render: () => (
    <Stack direction="column" spacing={2} style={{ minWidth: 200 }}>
      <MenuItem>
        <Typography variant="body1">Regular Text</Typography>
      </MenuItem>
      <MenuItem>
        <Typography variant="h6" color="primary">
          Primary Heading
        </Typography>
      </MenuItem>
      <MenuItem>
        <Typography variant="caption" color="secondary">
          Caption Text
        </Typography>
      </MenuItem>
      <MenuItem>
        <Typography variant="body2" fontWeight="bold">
          Bold Body Text
        </Typography>
      </MenuItem>
    </Stack>
  ),
};

export const ComplexContent: Story = {
  render: () => (
    <Stack direction="column" spacing={2} style={{ minWidth: 280 }}>
      <MenuItem>
        <Stack direction="row" spacing={2} alignItems="center">
          <RiMailLine size={20} />
          <Stack direction="column" spacing={0}>
            <Typography variant="body1" fontWeight="medium">
              New Message
            </Typography>
            <Typography variant="caption" color="textSecondary">
              You have 3 unread messages
            </Typography>
          </Stack>
        </Stack>
      </MenuItem>
      <MenuItem>
        <Stack direction="row" spacing={2} alignItems="center">
          <RiNotificationLine size={20} />
          <Stack direction="column" spacing={0}>
            <Typography variant="body1" fontWeight="medium">
              Notifications
            </Typography>
            <Typography variant="caption" color="textSecondary">
              5 new updates
            </Typography>
          </Stack>
          <Typography variant="caption" color="primary">
            View All
          </Typography>
        </Stack>
      </MenuItem>
      <MenuItem>
        <Stack direction="row" spacing={2} alignItems="center">
          <RiSettingsLine size={20} />
          <Typography variant="body1">Settings</Typography>
          <Typography variant="caption" color="textSecondary">
            Ctrl + ,
          </Typography>
        </Stack>
      </MenuItem>
    </Stack>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Stack direction="column" spacing={2} style={{ minWidth: 200 }}>
      <MenuItem disabled>Disabled Menu Item</MenuItem>
      <MenuItem disabled startIcon={<RiForbidLine size={20} />}>
        Disabled with Icon
      </MenuItem>
    </Stack>
  ),
};

export const Divider: Story = {
  render: () => (
    <Stack direction="column" spacing={0} style={{ minWidth: 200 }}>
      <MenuItem>First Item</MenuItem>
      <MenuItem divider />
      <MenuItem>Second Item</MenuItem>
      <MenuItem divider />
      <MenuItem>Third Item</MenuItem>
    </Stack>
  ),
};

export const Interactive: Story = {
  render: function Render() {
    const [selected, setSelected] = React.useState<string | null>(null);

    const handleClick = (item: string) => {
      setSelected(item);
    };

    return (
      <Stack direction="column" spacing={2} style={{ minWidth: 200 }}>
        <Typography variant="body2">
          Selected: {selected || "None"}
        </Typography>
        <MenuItem 
          onClick={() => handleClick("Profile")} 
          color={selected === "Profile" ? "primary" : "inherit"}
        >
          Profile
        </MenuItem>
        <MenuItem 
          onClick={() => handleClick("Settings")} 
          color={selected === "Settings" ? "primary" : "inherit"}
        >
          Settings
        </MenuItem>
        <MenuItem 
          onClick={() => handleClick("Logout")} 
          color={selected === "Logout" ? "primary" : "inherit"}
        >
          Logout
        </MenuItem>
      </Stack>
    );
  },
};

export const KitchenSink: Story = {
  render: () => (
    <Stack direction="column" spacing={1} style={{ minWidth: 300 }}>
      <div style={{ padding: "8px 16px" }}>
        <Typography variant="h6">Menu Options</Typography>
      </div>
      <MenuItem startIcon={<RiUserLine size={20} />} size="medium">
        <Typography variant="body1">View Profile</Typography>
      </MenuItem>
      <MenuItem startIcon={<RiEditLine size={20} />} size="medium">
        <Typography variant="body1">Edit Profile</Typography>
      </MenuItem>
      <MenuItem divider />
      <MenuItem startIcon={<RiSettingsLine size={20} />} size="medium">
        <Typography variant="body1">Settings</Typography>
      </MenuItem>
      <MenuItem startIcon={<RiNotificationLine size={20} />} size="medium">
        <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between" style={{ width: "100%" }}>
          <Typography variant="body1">Notifications</Typography>
          <Typography 
            variant="caption" 
            color="primary" 
            style={{ 
              backgroundColor: "#e3f2fd", 
              padding: "2px 8px", 
              borderRadius: "12px" 
            }}
          >
            3
          </Typography>
        </Stack>
      </MenuItem>
      <MenuItem startIcon={<RiQuestionLine size={20} />} size="medium">
        <Typography variant="body1">Help & Support</Typography>
      </MenuItem>
      <MenuItem divider />
      <MenuItem 
        startIcon={<RiLogoutCircleLine size={20} />} 
        size="medium" 
        color="error"
      >
        <Typography variant="body1">Sign Out</Typography>
      </MenuItem>
    </Stack>
  ),
};
