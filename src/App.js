import logo from './logo.svg';
import './App.css';
import Navigation from './Component/Nav';
import Properties from './Component/Properties';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Favorite_page from './Component/favorite';


function App() {
  const navigation = useNavigate();
  return (
    <div classNameName="App">
      <Navigation></Navigation>
      <br />

      <Routes>
        
        <Route path='/favorite' element={<Favorite_page/>}/>
        <Route path='/' exact element={<Properties nav={navigation}></Properties>}/>
      </Routes>
    </div>
  );
}

export default App;
