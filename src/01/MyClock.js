const MyClock = ()=> {
    const d =new Date().toLocaleTimeString()
    return(
        <p> 현재시간: {d}</p>
    ) ;
}
export default MyClock;