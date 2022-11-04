import { makePageMeta } from '@/shared/lib/storybook'
import { DashboardPage } from '.'

const meta: Meta = {
  title: 'Pages/Dashboard',
  component: DashboardPage,
  ...makePageMeta(),
}

export default meta

export const Dashboard: StoryFn = () => <DashboardPage />
