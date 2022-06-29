import './App.css';
import {useSelector , useDispatch} from "react-redux"
import {up} from "./reducer/numberslice"
import {initthunk} from "./reducer/numberslice"
import {BrowserRouter , Route , Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import Form from './components/Form';
import Home from './components/Home';

function App() {
  const selecotr = useSelector(state=>state.counter.number);
  const selecotr2 = useSelector(state=>state);
  console.log(selecotr2);
  const dispatch = useDispatch();



  const clickevn = (e) => {
    dispatch(up("data"));
  }

  const click2evn = async (e)=>{
    try{
     const result = dispatch(initthunk("dd"));
     return console.log(result);
    }catch(err){
      console.log(err);
    }
   
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/join' element={<Form/>}/>
          <Route/>
          <Route/>
        </Routes>
      </BrowserRouter>
      

      

      
    </div>
  );
}

export default App;
