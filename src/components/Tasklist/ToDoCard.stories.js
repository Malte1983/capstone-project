import ToDoCard from './ToDoCard'

export default {
  title: 'Component/ToDoCard',
  component: ToDoCard,
}

const Template = args => <ToDoCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  todo: 'Clean house',
}
