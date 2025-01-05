import logo from './logo.svg';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'


function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>

        <Route path='/About' element={<About/>}></Route>

        <Route path='/Projects' element={<Projects/>}></Route>
      </Routes>
    
    </BrowserRouter>
    
    
      
    </>
  );
}

export default App;
