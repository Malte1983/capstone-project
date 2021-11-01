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
  onChecked: action(checkbox => console.log(checkbox)),
  onUpdateTask: action(update => console.log(update)),
  onDeleteTask: action(deleteItem => console.log(deleteItem)),
}
