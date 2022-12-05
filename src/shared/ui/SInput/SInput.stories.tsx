import type { Meta, StoryFn } from '@storybook/vue3'
import { SInput } from '.'

const meta: Meta = {
  title: 'UI/SInput',
  component: SInput,
  args: {
    text: 'Введіть номер телефону',
  },
}

export default meta

export const Default: StoryFn = (props) => <SInput {...props}>Введіть номер телефону</SInput>
