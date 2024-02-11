import React, {useState} from 'react'

const ChangeColor = () => {
    const [ChangeColor, setChangeColor] = useState("#ECB159")
    const ChangeColorFunc =(ChangeColorVar)=>{
        console.log(ChangeColorVar);
        setChangeColor(ChangeColorVar)
    }
  return (
    <>
    <div className="main-container" style={{backgroundColor:ChangeColor}}>
        <h1>Change Color of Background</h1>
        <main>
            <button style={{backgroundColor:"#D24545"}} onClick={()=>{ChangeColorFunc("#D24545")}}>Red</button>
            <button style={{backgroundColor:"#74E291"}} onClick={()=>{ChangeColorFunc("#74E291")}}>Green</button>
            <button style={{backgroundColor:"#40A2E3"}} onClick={()=>{ChangeColorFunc("#40A2E3")}}>Blue</button>
            <button style={{backgroundColor:"#9F70FD"}} onClick={()=>{ChangeColorFunc("#9F70FD")}}>Purple</button>
            <button style={{backgroundColor:"#000000"}} onClick={()=>{ChangeColorFunc("#000000")}}>Black</button>
            <button style={{backgroundColor:"#F8E559"}} onClick={()=>{ChangeColorFunc("#F8E559")}}>Yellow</button>
        </main>
    </div>
    </>
  )
}

export default ChangeColor
