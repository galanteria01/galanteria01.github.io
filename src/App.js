

import React,{ Component } from 'react';
import Home from './components/Pages/Home'
import PageWrapper from './components/PageWrapper';

class App extends Component{
  render(){
    return <div>
      <PageWrapper>
        <Home/>
      </PageWrapper>
    </div>
  }
}

export default App;
