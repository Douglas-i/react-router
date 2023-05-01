import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Home from './pages/Home'
import Sobre from './pages/Sobre'

import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  /*const location = window.location.pathname;
  console.log(location);

  const Router = () => {
    if(location === '/'){
      return <Home />
    } else {
      return <Sobre />
    }
  }*/

  return (    
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/sobre' element={<Sobre />}/>
      </Routes>
    </Router>
  );

}
export default App;
