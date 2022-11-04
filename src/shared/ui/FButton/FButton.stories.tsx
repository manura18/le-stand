import { CameraIcon } from '@heroicons/vue/20/solid'

import { FButton, type FButtonProps } from '.'
import { ButtonVariant } from './types'

type Story = StoryFn<FButtonProps>

const meta: Meta<FButtonProps> = {
  title: 'Shared/UI/FButton',
  component: FButton,
  argTypes: {
    variant: {
      control: { type: 'select', options: ButtonVariant },
      defaultValue: 'primary',
    },
    outline: { control: { type: 'boolean' }, defaultValue: false },
    disabled: { control: { type: 'boolean' }, defaultValue: false },
  },
}

export default meta

export const Default: Story = (props) => <FButton {...props}>Default</FButton>

export const Disabled = Default.bind({})
Disabled.args = { disabled: true }

export const WithIcon: Story = (props) => (
  <FButton {...props}>
    <CameraIcon class="h-6 w-6" />
  </FButton>
)
