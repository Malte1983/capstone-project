import Dashboard from './Dashboard'

export default {
  title: 'Component/Dashboard',
  component: Dashboard,
}

const Template = args => <Dashboard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  tasks: [1],
  diaries: [1],
}
