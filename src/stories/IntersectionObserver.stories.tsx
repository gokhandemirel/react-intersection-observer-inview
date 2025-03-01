import type { Meta, StoryObj } from '@storybook/react';
import { ContentScrolled } from '../components/contentScrolled';

const meta = {
  title: 'Example/UseIntersectionObserver',
  component: ContentScrolled,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof ContentScrolled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BodyScrolled: Story = {};
