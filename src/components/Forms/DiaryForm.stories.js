import { action } from '@storybook/addon-actions'
import DiaryForm from './DiaryForm'

export default {
  title: 'Component/DiaryForm',
  component: DiaryForm,
}

const Template = args => <DiaryForm {...args} />

export const Primary = Template.bind({})
Primary.args = {
  onHandleCreateDiarys: action(diary => console.log(diary)),
}
