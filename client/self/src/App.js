import './App.css';
import {useSelector , useDispatch} from "react-redux"
import {up} from "./reducer/numberslice"
import {initthunk} from "./reducer/numberslice"
import {BrowserRouter , Route , Routes} from "react-router-dom"

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
      <p onClick={(e)=>{clickevn(e)}}>Helloed{selecotr}</p>
      <p onClick={(e)=>{click2evn(e)}}>Second Click</p>
    </div>
  );
}

export default App;
