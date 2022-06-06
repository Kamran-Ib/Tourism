
import './App.css';
import Header from './components/Header/Header'
import Page1 from './components/Page1/Page1'
import Page2 from './components/Page2/Page2'
import Page3 from './components/Page3/Page3'
import Home from './components/Home/Home'
import {BrowserRouter ,Switch,Route,Link,} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Header/>

      <Switch>
        <Route path="/page1" component={Page1}/>
        <Route path="/page2" component={Page2}/>
        <Route path="/page3" component={Page3}/>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
