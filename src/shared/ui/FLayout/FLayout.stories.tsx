import { FLayout } from '.'

const meta: Meta = {
  title: 'Shared/UI/FLayout',
  component: FLayout,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const Default: StoryFn = () => <FLayout />
Default.storyName = 'FLayout'
