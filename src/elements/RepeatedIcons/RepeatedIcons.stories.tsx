import type { Meta, StoryObj } from '@storybook/react';
import Stack from '../Stack';
import Typography from '../Typography';
import Icon from './index';

const meta: Meta<typeof Icon> = {
  title: 'Elements/RepeatedIcons',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// All icons with labels and colors
export const AllIconsWithLabels: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
      <Stack direction="column" spacing={2} alignItems="center">
        <Icon name="award" color="primary" size="large" />
        <Typography variant="body2" className="text-gray-700 font-medium">
          Award
        </Typography>
      </Stack>
      <Stack direction="column" spacing={2} alignItems="center">
        <Icon name="medal" color="success" size="large" />
        <Typography variant="body2" className="text-gray-700 font-medium">
          Medal
        </Typography>
      </Stack>
      <Stack direction="column" spacing={2} alignItems="center">
        <Icon name="chat" color="info" size="large" />
        <Typography variant="body2" className="text-gray-700 font-medium">
          Chat
        </Typography>
      </Stack>
      <Stack direction="column" spacing={2} alignItems="center">
        <Icon name="question" color="warning" size="large" />
        <Typography variant="body2" className="text-gray-700 font-medium">
          Question
        </Typography>
      </Stack>
    </div>
  ),
};

// Color variants with labels
export const ColorVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      <Stack direction="column" spacing={2} alignItems="center">
        <Icon name="award" color="primary" size="medium" />
        <Typography variant="body2" className="text-gray-700 font-medium">
          Primary
        </Typography>
      </Stack>
      <Stack direction="column" spacing={2} alignItems="center">
        <Icon name="award" color="secondary" size="medium" />
        <Typography variant="body2" className="text-gray-700 font-medium">
          Secondary
        </Typography>
      </Stack>
      <Stack direction="column" spacing={2} alignItems="center">
        <Icon name="award" color="error" size="medium" />
        <Typography variant="body2" className="text-gray-700 font-medium">
          Error
        </Typography>
      </Stack>
      <Stack direction="column" spacing={2} alignItems="center">
        <Icon name="award" color="warning" size="medium" />
        <Typography variant="body2" className="text-gray-700 font-medium">
          Warning
        </Typography>
      </Stack>
      <Stack direction="column" spacing={2} alignItems="center">
        <Icon name="award" color="info" size="medium" />
        <Typography variant="body2" className="text-gray-700 font-medium">
          Info
        </Typography>
      </Stack>
      <Stack direction="column" spacing={2} alignItems="center">
        <Icon name="award" color="success" size="medium" />
        <Typography variant="body2" className="text-gray-700 font-medium">
          Success
        </Typography>
      </Stack>
    </div>
  ),
};

// Size variants with labels
export const SizeVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      <Stack direction="column" spacing={2} alignItems="center">
        <Icon name="medal" color="primary" size="small" />
        <Typography variant="body2" className="text-gray-700 font-medium">
          Small
        </Typography>
      </Stack>
      <Stack direction="column" spacing={2} alignItems="center">
        <Icon name="medal" color="primary" size="medium" />
        <Typography variant="body2" className="text-gray-700 font-medium">
          Medium
        </Typography>
      </Stack>
      <Stack direction="column" spacing={2} alignItems="center">
        <Icon name="medal" color="primary" size="large" />
        <Typography variant="body2" className="text-gray-700 font-medium">
          Large
        </Typography>
      </Stack>
      <Stack direction="column" spacing={2} alignItems="center">
        <Icon name="medal" color="primary" size="xlarge" />
        <Typography variant="body2" className="text-gray-700 font-medium">
          XLarge
        </Typography>
      </Stack>
    </div>
  ),
};

// Label positions
export const LabelPositions: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
      <Stack direction="column" spacing={2} alignItems="center">
        <Icon 
          name="chat" 
          color="primary" 
          size="medium" 
          label="Chat Icon" 
          labelPosition="top" 
        />
        <Typography variant="body2" className="text-gray-700 font-medium">
          Top Position
        </Typography>
      </Stack>
      <Stack direction="column" spacing={2} alignItems="center">
        <Icon 
          name="chat" 
          color="primary" 
          size="medium" 
          label="Chat Icon" 
          labelPosition="bottom" 
        />
        <Typography variant="body2" className="text-gray-700 font-medium">
          Bottom Position
        </Typography>
      </Stack>
      <Stack direction="column" spacing={2} alignItems="center">
        <Icon 
          name="chat" 
          color="primary" 
          size="medium" 
          label="Chat Icon" 
          labelPosition="left" 
        />
        <Typography variant="body2" className="text-gray-700 font-medium">
          Left Position
        </Typography>
      </Stack>
      <Stack direction="column" spacing={2} alignItems="center">
        <Icon 
          name="chat" 
          color="primary" 
          size="medium" 
          label="Chat Icon" 
          labelPosition="right" 
        />
        <Typography variant="body2" className="text-gray-700 font-medium">
          Right Position
        </Typography>
      </Stack>
    </div>
  ),
};

// Interactive playground
export const Playground: Story = {
  args: {
    name: 'question',
    size: 'large',
    color: 'primary',
    label: 'Help',
    labelPosition: 'bottom',
    spacing: 1,
  },
};
