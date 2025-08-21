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
  argTypes: {
    name: {
      control: 'select',
      options: ['award', 'medal', 'chat', 'question'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'xlarge'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'inherit'],
    },
    label: {
      control: 'text',
    },
    labelPosition: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    spacing: {
      control: { type: 'range', min: 0, max: 5, step: 0.5 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// All icons with labels and colors
export const AllIconsWithLabels: Story = {
  render: () => (
    <Stack direction="row" spacing={6} alignItems="center" wrap="wrap">
      <Stack direction="column" spacing={2} alignItems="center">
        <Icon name="award" label="Award" color="primary" size="large" />
      </Stack>
      <Stack direction="column" spacing={2} alignItems="center">
        <Icon name="medal" label="Medal" color="success" size="large" />
      </Stack>
      <Stack direction="column" spacing={2} alignItems="center">
        <Icon name="chat" label="Chat" color="info" size="large" />
      </Stack>
      <Stack direction="column" spacing={2} alignItems="center">
        <Icon name="question" label="Question" color="warning" size="large" />
      </Stack>
    </Stack>
  ),
};

// Color variants with labels
export const ColorVariants: Story = {
  render: () => (
    <Stack direction="row" spacing={3} alignItems="center" wrap="wrap">
      <Stack direction="column" spacing={1} alignItems="center">
        <Icon name="award" label="Primary" color="primary" />
      </Stack>
      <Stack direction="column" spacing={1} alignItems="center">
        <Icon name="award" label="Secondary" color="secondary" />
      </Stack>
      <Stack direction="column" spacing={1} alignItems="center">
        <Icon name="award" label="Error" color="error" />
      </Stack>
      <Stack direction="column" spacing={1} alignItems="center">
        <Icon name="award" label="Warning" color="warning" />
      </Stack>
      <Stack direction="column" spacing={1} alignItems="center">
        <Icon name="award" label="Info" color="info" />
      </Stack>
      <Stack direction="column" spacing={1} alignItems="center">
        <Icon name="award" label="Success" color="success" />
      </Stack>
    </Stack>
  ),
};

// Size variants with labels
export const SizeVariants: Story = {
  render: () => (
    <Stack direction="row" spacing={4} alignItems="center">
      <Stack direction="column" spacing={1} alignItems="center">
        <Icon name="medal" label="Small" size="small" />
      </Stack>
      <Stack direction="column" spacing={1} alignItems="center">
        <Icon name="medal" label="Medium" size="medium" />
      </Stack>
      <Stack direction="column" spacing={1} alignItems="center">
        <Icon name="medal" label="Large" size="large" />
      </Stack>
      <Stack direction="column" spacing={1} alignItems="center">
        <Icon name="medal" label="XLarge" size="xlarge" />
      </Stack>
    </Stack>
  ),
};

// Label positions
export const LabelPositions: Story = {
  render: () => (
    <Stack direction="row" spacing={6} alignItems="center" wrap="wrap">
      <Stack direction="column" spacing={2} alignItems="center">
        <Icon name="chat" label="Top" labelPosition="top" />
      </Stack>
      <Stack direction="column" spacing={2} alignItems="center">
        <Icon name="chat" label="Bottom" labelPosition="bottom" />
      </Stack>
      <Stack direction="column" spacing={2} alignItems="center">
        <Icon name="chat" label="Left" labelPosition="left" />
      </Stack>
      <Stack direction="column" spacing={2} alignItems="center">
        <Icon name="chat" label="Right" labelPosition="right" />
      </Stack>
    </Stack>
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
