import React, { useState } from 'react';
import copy from 'clipboard-copy'
import '../App.css';

function Pxvw() {
  const [display, setDisplay] = useState(false)
  const [vwVal , setVwVal] = useState("")
  const [copyVal, setCopyVal] = useState("")
  const [isCopied, setIsCopied] = useState(false)
  const [viewPort, setViewPort] = useState("1920")
  let pixel = React.createRef()
  let viewPixel = React.createRef()
  let outLabel = React.createRef()
  let outPut = React.createRef()

  function show(){
    var pxValue = pixel.current.value
    var vpwidth = viewPixel.current.value;
    if(Number.isInteger(parseFloat(pxValue / vpwidth) * 100)){
      var vwValue = String(parseFloat(pxValue / vpwidth) * 100)
    } else {
      var vwValue = String(parseFloat(pxValue / vpwidth) * 100).split(".");
      vwValue[1] = vwValue[1].substring(0,2)
      vwValue = vwValue.join(".")
    }
      outLabel.current.innerText = vwValue + "vw";
      setVwVal(vwValue + "vw")
      setDisplay(true)
  }

  function updateViewSize(){
    var vpwidth = viewPixel.current.value
    setViewPort(vpwidth)
    if(vpwidth > 0){show()}
  }

  function copyToClipboard() {
    setCopyVal(vwVal)
    copy(vwVal)
    setIsCopied(true)
    setTimeout(() => {setIsCopied(false)},1000)
  }
  return (
    <div>
      <div style={cont}>
        <div style={field}>
          <label style={label}>Enter Your Pixel Unit</label>
          <input style={input} ref={pixel} name="pixel" autoFocus onChange={show} type="number" min="0" className="m-pixel" placeholder="enter your pixel unit"/>
        </div>
        <div style={field}>
          <label style={label}>Enter Your viewport width</label>
          <input style={input} ref={viewPixel} onChange={updateViewSize} name="vpwidth"  type="number" min="0" className="m-vpwidth" value={viewPort}/>
        </div>
        <div className="output" ref={outPut} style={display ? output : displayNone} onClick={copyToClipboard}>
          <label id="labelText" style={outputlabel} ref={outLabel}></label>
          <button style={button} onClick={copyToClipboard}>Click to copy to clipboard<span style={after}></span></button>
          <h3 id="copied" style={isCopied ? copiedText : displayNone}>Copied</h3>
        </div>
      </div>
    </div>
  );
}

const displayNone = {display:"none"}
const copiedText = {display:"block",color:"#FFF"}
const cont = {maxWidth:"1200px",margin:"14% auto",padding:"0 15px"}
const field = {fontSize:0,marginBottom:"3vw",marginTop:"5vw"}
const label = {fontSize:"2vw",width:"50%",display:"inline-block",verticalAlign:"middle",textAlign:"left",paddingBottom:0,color:"#FFF"}
const input = {fontSize:"1vw",border:"0 solid #3f424c",width:"50%",marginBottom:0,height:"7vw",float:"none",clear:"both",boxSizing:"border-box",display:"inline-block",verticalAlign:"middle",letterSpacing:".6vw",lineHeight:"normal",borderRadius:0,background:"#FFF",color:"#ff69b4",fontFamily:"news-gothic-std ,sans-serif",textIndent:0,textTransform:"lowercase",padding:"0 2.6vw",outline:"none"}
const outputlabel = {background:"none #42476a",width:"100%",display:"block",margin:"20px 0",textAlign:"center",fontSize:"3vw",fontSize:"3vw",padding:"20px 0",cursor:"pointer",color:"#FFF"}
const button = {width:"500px",height:"50px",borderRadius:"1px",borderColor:"#42476a",fontSize:"20px",fontWeight:500,color:"#FFF",backgroundColor:"#42476a",animation:"bounce infinite 4s",marginTop:"10px",cursor:"pointer"}
const output = {display:"flex",flexDirection:"column",alignItems:"center"}
const after = {position:"absolute",left:"75%",top:"-10px",borderWidth:"17px 15px 0",borderStyle:"solid",borderColor:"#42476a transparent",display:"block",  width:0,transform:"rotateZ(180deg)"}


export default Pxvw;
