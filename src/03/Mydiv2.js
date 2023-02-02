import Mydiv12 from "./Mydiv12";
const Mydiv2 = ({user,n,setN})=>{
    // const user =probs.user
    return(
        <div className="mydiv2">
        <h2 className="divh2">Mydiv2{user} n ={n}</h2>
        <Mydiv12 user = {user} n ={n} setN ={setN}/>
        </div>
    );
}
export default Mydiv2;
