import InputTask from './InputTask'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Component/InputTask',
  component: InputTask,
}

const Template = args => <InputTask {...args} />

export const Primary = Template.bind({})
Primary.args = {
  onCreateNewTasks: action(task => console.log(task)),
}
