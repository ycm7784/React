import Taccidenthead from "./Taccidenthead";
import Taccidentc1 from "./Taccidentc1";
import Taccidentc2 from "./Taccidentc2";
import Taccidentdeteil from "./Taccidentcdeteil";
import "./Taccident.css";
import { useState,useEffect } from "react";
const Taccidentm =({c1,c2,data}) =>{
        // console.log("Taccidentmdata",data);
        //선택된 대분류
        let[selC1,setselC1] = useState();

        //선택된 대분류에 해당하는 중분류 저장
        let[selC2A,setselC2A] = useState([]);

        //선택된 중분류
        let[selC2,setselC2] = useState();

        //선택된 항목
        let[selData, setselData]= useState();


        //state 변수 변경
        //맨처음 한번만 실행
        useEffect(() =>{
            console.log('처음한번만 실행')
        },[]);
        //해당하는 state변수가 변경될때마다
        useEffect(() =>{
            console.log(selC1);
            setselC2A(c2.filter((i)=> i[0]===selC1))
        },[selC1]);

        useEffect(()=>{
            console.log("selc2a",selC2A);
        },[selC2A])
        useEffect(() =>{
            console.log("selc2",selC2);
            if(selC1&&selC2){
            setselData(data.filter((i)=> 
                i.사고유형_대분류 ===selC1 && 
                i.사고유형_중분류 ===selC2
                )[0])
            }
        },[selC2]);

        useEffect(()=>{
            console.log("seldata",selData)
        },[selData])
        //컴포넌트 랜더링이 일어날때마다 실행
        // useEffect(() =>{
        //     console.log('렌더링....')
        // });


    return(
            <>
            <div className="header">
                <Taccidenthead/>
            </div>
            <div className="main">
                <Taccidentc1 c1={c1} selC1 ={selC1} setselC1={setselC1}/>
                {selC2A && <Taccidentc2 selC2A ={selC2A}  selC2 ={selC2} setselC2={setselC2}/>}
                {selData &&<Taccidentdeteil selData={selData}/>}
            </div>
            </>
    );
}

export default Taccidentm
