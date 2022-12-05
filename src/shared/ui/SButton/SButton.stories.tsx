import type { Meta, StoryFn } from '@storybook/vue3'
import { SButton } from '.'

const meta: Meta = {
  title: 'UI/SButton',
  component: SButton,
  args: {
    text: 'Длі',
  },
}

export default meta

export const Default: StoryFn = (props) => <SButton {...props} >Далі</SButton>
