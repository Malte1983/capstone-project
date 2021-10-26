import Mood from './Motivation'

export default {
  title: 'Component/Motivation',
  component: Mood,
}

const Template = args => <Mood {...args} />

export const Primary = Template.bind({})
Primary.args = {}
