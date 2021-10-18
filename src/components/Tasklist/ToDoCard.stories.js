import SortableList from 'react-easy-sort'
import ToDoCard from './ToDoCard'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Component/ToDoCard',
  component: ToDoCard,
}

const Template = args => (
  <SortableList>
    <ToDoCard {...args} />
  </SortableList>
)

export const Primary = Template.bind({})
Primary.args = {
  todo: 'Clean house',
  onHandleIsChecked: action(checkbox => console.log(checkbox)),
  onHandleUpdateTask: action(update => console.log(update)),
  onHandleDeleteTask: action(deleteItem => console.log(deleteItem)),
}
