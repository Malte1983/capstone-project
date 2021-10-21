import Footer from './Footer'
import { Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
  title: 'Component/Footer',
  component: Footer,
}

const Template = args => (
  <Router>
    <Route>
      <Footer {...args} />
    </Route>
  </Router>
)

export const Primary = Template.bind({})
Primary.args = {}
