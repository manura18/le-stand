import { TemplateName, type TemplateNameProps } from '.'

type Story = StoryFn<TemplateNameProps>

const meta: Meta<TemplateNameProps> = {
  title: 'Pages/TemplateName',
  component: TemplateName,
  args: {},
}

export default meta

export const Default: Story = (props) => <TemplateName {...props} />
