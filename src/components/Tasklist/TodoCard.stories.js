import TodoCard from './ToDoCard'

export default {
  title: 'Component/TodoCard',
  component: TodoCard,
}

const Template = args => <TodoCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  todo: 'Clean house',
}
