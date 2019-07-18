import React from 'react';
import '../App.css';

function Pxvw() {
  let pixel = React.createRef()
  let viewPixel = React.createRef()
  let outLabel = React.createRef()
  let outPut = React.createRef()
  function show(){
    console.log(outPut);
  		var pxValue = pixel.current.value
  		var vpwidth = viewPixel.current.value;
  		var vwValue = String(parseFloat(pxValue / vpwidth) * 100).split(".");
      vwValue[1] = vwValue[1].substring(0,2)
  		vwValue = vwValue.join(".")
      outLabel.current.innerText = vwValue + "vw";
      outPut.current.style = {"display":"block"}
  }

  function copyToClipboard(element) {
    // document.querySelector("button").hide()
    // var $temp = document.querySelector("<input>");
    // document.querySelector("body").append($temp);
    // $temp.val(document.querySelector(element).text()).select();
    // document.execCommand("copy");
    // $temp.remove();
    // document.getElementById("copied").show()
    // document.getElementById("#copied").fadeOut(1500)
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
          <input style={input} ref={viewPixel} onChange={show} name="vpwidth"  type="number" min="0" className="m-vpwidth" value="1920"/>
        </div>
        <div className="output" ref={outPut} style={output} onClick={copyToClipboard('#labelText')}>
          <label id="labelText" style={outputlabel} ref={outLabel}></label>
          <button style={button} onClick={copyToClipboard('#labelText')}>Click to copy to clipboard<span style={after}></span></button>
          <h3 id="copied" style={{"display":"none", "position":"absolute","left":"47%","color":"#FFF"}}>Copied</h3>
        </div>
      </div>
    </div>
  );
}

const cont = {maxWidth:"1000px",margin:"15vw auto",padding:"0 15px"}
const field = {fontSize:0,marginBottom:"3vw",marginTop:"5vw"}
const label = {width:"50%",display:"inline-block",verticalAlign:"middle",textAlign:"left",fontSize:"3vw",paddingBottom:0,color:"#FFF"}
const input = {border:"0 solid #3f424c",width:"50%",marginBottom:0,height:"7vw",float:"none",clear:"both",boxSizing:"border-box",display:"inline-block",verticalAlign:"middle",letterSpacing:".6vw",lineHeight:"normal",borderRadius:0,background:"#FFF",color:"#ff69b4",fontSize:"2vw",fontFamily:"news-gothic-std ,sans-serif",textIndent:0,textTransform:"lowercase",padding:"0 2.6vw",outline:"none"}
const outputlabel = {background:"none #42476a",width:"100%",display:"block",margin:"20px 0",textAlign:"center",fontSize:"3vw",fontSize:"3vw",padding:"20px 0",cursor:"pointer",color:"#FFF"}
const button = {width:"500px",height:"50px",borderRadius:"1px",borderColor:"#42476a",fontSize:"20px",fontWeight:500,color:"#FFF",backgroundColor:"#42476a",animation:"bounce infinite 4s",marginTop:"10px",cursor:"pointer"}
const output = {display:"none",textAlign:"center"}
const after = {position:"absolute",left:"75%",top:"-10px",borderWidth:"17px 15px 0",borderStyle:"solid",borderColor:"#42476a transparent",display:"block",  width:0,transform:"rotateZ(180deg)"}

// div.button{text-align:center}
// div.button a{background:#9a297b;color:#fff;text-transform:uppercase;letter-spacing:2px;padding:13px 31px;display:inline-block;text-decoration:none;font-size:14px}

// @media only screen and (min-width: 768px) {
// body{max-width:60%}
// .field label{font-size:1.7vw}
// input,select{font-size:1.25vw;height:3.54vw;padding-left:.9vw;padding-right:.9vw;letter-spacing:.2vw}
// }

export default Pxvw;
