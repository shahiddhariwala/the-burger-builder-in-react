import React,{Component} from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder  from './containers/BurgerBuilder/BurgerBuilder';
class App extends Component
{
  render()
  {
    return (
      <div>
        <Layout>Hi I am Shahid Dhariwala </Layout>
        <BurgerBuilder/>
      </div>
    );
  }
}
export default App;
