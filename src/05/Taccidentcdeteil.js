const Taccidentdeteil =({selData})=>{
    let keys=["사고유형_대분류","사고유형_중분류","사고건수","사망자수","중상자수","경상자수","부상신고자수"];
    let dtag = keys.map((k)=>
        <li key={k}>
            <span className="sp1">{k}</span>
            <span className="sp2">
                {selData[k]}</span>
        </li> 
    );
    dtag.push(
        <li key='치명률'>
            <span className="sp3">치명률</span>
            <span className="sp2">{Math.round(parseInt(selData["사망자수"])/parseInt(selData["사고건수"])*100, 2)}</span>
        </li>
    );
    
    return(
        <>
        <div className="tdel">
        <div className="tch"><h3>사고차량</h3></div>
            <div className="tc1_3">
                <ul>
                {selData && dtag}
                </ul>
             </div>
        </div>
        </>
    );
}
export default Taccidentdeteil