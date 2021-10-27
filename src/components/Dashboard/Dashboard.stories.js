import Dashboard from './Dashboard'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Component/Dashboard',
  component: Dashboard,
}

const Template = args => <Dashboard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  tasks: [5],
  diarys: [8],
  id: 2,
}
