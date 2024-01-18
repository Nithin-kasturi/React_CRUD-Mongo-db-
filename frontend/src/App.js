import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from './components/Create';
import Read from './components/Read';
import Edit from './components/Edit';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/create' Component={Create}></Route>
        <Route path='/read/:id' Component={Read}></Route>
        <Route path='/edit/:id' Component={Edit}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
