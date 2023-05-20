import './App.css';
import { Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Movies from './components/Movies';
import TvShows from './components/Tv_Shows';


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element = {<Home /> }></Route>
        <Route path='/movies' element = { <Movies />}></Route>
        <Route path='/tv shows' element = { <TvShows /> }></Route>
      </Routes>
    </div>
  );
}

export default App;
