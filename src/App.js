import './App.css';
import Datas from './components/datas/Datas';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Routess from './components/routes/Routess';
import Sponsor from './components/sponsor/Sponsor';
import Use from './components/use/Use';
import FetchDataComponent from './tryIt/FetchDataComponent';

function App() {
  return (
    <>
    <Header/>
    <Home/>
    <Sponsor/>
    <FetchDataComponent />
    <Use/>
    <Routess/>
    <Datas/>
    </>
  );
}

export default App;
