import type { Meta, StoryFn } from '@storybook/vue3'
import { SPages } from '.'

const meta: Meta = {
  title: 'UI/SPages',
  component: SPages,
  args: {
    title: 'Увійти',
    text: '  Введіть номер телефону',
    further: 'Далі',
  },
}

export default meta

export const Default: StoryFn = (props) => <SPages {...props} />
