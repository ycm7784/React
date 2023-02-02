import Mydiv11 from "./Mydiv11";
import { useState } from "react";
import { useEffect } from "react";
const Mydiv1 = ({user, n,setN})=>{
   // const Mydiv1 = (probs)=>{
    //console.log(probs);
    
    let [cnt,setCnt] = useState(0);
    

    const addCnt =() =>{
        cnt =cnt +1;
        setCnt(cnt);
        console.log(cnt);

    // useEffect(() =>{
    //     console.log("변경되었습니다")
    // });
    // //재렌더링할때마다 실행
    // useEffect(() =>{
    //     console.log("처음입니다")
    // })[];
    // //처음만 실행
    // useEffect(() =>{
    //     console.log("cnt 변경")
    //     cnt =cnt +1;
    // }),[cnt];
    }
    return(
        <div className="mydiv1">
        <h2 className="divh2">Mydiv1{user} n={n}</h2>
        <Mydiv11 user ={user} divname = {'사용자정의'+cnt}/>
        
            <div className="divbt"> 
            <button onClick={addCnt}>🚗</button>
            <span> {cnt}</span>
            </div>
        </div>

    );
}
export default Mydiv1;
