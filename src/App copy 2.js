import MyDiv1 from './01/MyDiv1';
import MyDiv2 from './01/MyDiv2';
import './App.css';
import MyClock from './01/MyClock';
const App = () => {
   console.log('App,js');
   
  return (
    <div className="App-header">
       <MyDiv1/>
       <MyDiv2/>
       <MyClock/>
    </div>
   
  );
}

export default App;
