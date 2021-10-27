import Dashboard from './Dashboard'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Component/Dashboard',
  component: Dashboard,
}

const Template = args => <Dashboard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  task: 'tasks',
  diary: 'diarys',
}
