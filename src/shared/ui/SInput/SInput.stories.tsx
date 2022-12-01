import type { Meta, StoryFn } from '@storybook/vue3'
import { SInput } from '.'

const meta: Meta = {
  title: 'UI/SInput',
  component: SInput,
}

export default meta

export const Input: StoryFn = (props) => <SInput {...props} />
