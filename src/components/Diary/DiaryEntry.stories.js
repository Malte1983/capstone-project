import DiaryEntry from './DiaryEntry'

export default {
  title: 'Component/DiaryEntry',
  component: DiaryEntry,
}

const Template = args => <DiaryEntry {...args} />

export const Primary = Template.bind({})
Primary.args = {
  id: 'id13434hdjehf',
  date: '19.10.2021',
  headline: 'Mein Tagebucheintrag',
  text: 'das ist mein erster Tagebucheintrag',
}
Primary.argTypes = {
  handleDeleteDiary: {
    action: 'Delete clicked',
  },
}
