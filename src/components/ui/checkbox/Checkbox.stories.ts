import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './Checkbox'

const meta = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const CheckboxOwn: Story = {
  args: {
    disabled: false,
    label: 'Click here',
  },
}

export const DisabledCheckbox: Story = {
  args: {
    disabled: true,
    label: 'Click me',
  },
}
