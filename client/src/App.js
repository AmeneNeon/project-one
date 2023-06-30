import './App.css';
import {BrowserRouter as Router ,Routes,Route}from "react-router-dom"
import Home from './pages/home';
import Auth from './pages/auth';
import SavedRecipe from './pages/saved-recipe';
import CreateRecipe from './pages/create-recipe';
import Navbar1 from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
   <Router>
    <Navbar1/>
    <Routes>
      <Route  path='/' element={<Home/>} />
      <Route path='/auth' element={<Auth/>}/>
      <Route path="/saved-recipe" element={<SavedRecipe/>}/>
      <Route path='/create-recipe' element={<CreateRecipe/>}/>
    </Routes>
   </Router>
    </div>
  );
}

export default App;
