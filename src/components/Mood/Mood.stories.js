import Mood from './Mood'

export default {
  title: 'Component/Mood',
  component: Mood,
}

const Template = args => <Mood {...args} />

export const Primary = Template.bind({})
Primary.args = {}
