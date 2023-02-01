import './App.css';

import Mydiv1 from './03/Mydiv1';
import Mydiv2 from './03/Mydiv2';
import './03/Mydiv.css';
const App = () => {
  const rname = 'React';
   
  return (
    <>
      <div className="content">
        <div className="header">
          <h1> 컴포넌트 예제{rname}</h1>
        </div>
        <div className="main">
          <Mydiv1 user ={rname}/>
          <Mydiv2 user ={rname}/>
        </div>
      </div>
    </>
  );
}

export default App;
