

const MyDiv2 = () => {
   const myname = '양철민'
   const mygit = 'https://github.com/ycm7784'
 
  return (
    <div className="App">  
      
        <p>{myname}</p>
        <p>GiHub: <a  href= {mygit}> {mygit}</a></p>
    </div>
  );
}

export default MyDiv2;
