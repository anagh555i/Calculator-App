const input=document.querySelector("input");
const prev=document.querySelector(".prev");
const clear=document.querySelector("#clear");
const result=document.querySelector("#result");
document.querySelector("#value0").onclick=()=>{input.value+="0"};
document.querySelector("#value1").onclick=()=>{input.value+="1"};
document.querySelector("#value2").onclick=()=>{input.value+="2"};
document.querySelector("#value3").onclick=()=>{input.value+="3"};
document.querySelector("#value4").onclick=()=>{input.value+="4"};
document.querySelector("#value5").onclick=()=>{input.value+="5"};
document.querySelector("#value6").onclick=()=>{input.value+="6"};
document.querySelector("#value7").onclick=()=>{input.value+="7"};
document.querySelector("#value8").onclick=()=>{input.value+="8"};
document.querySelector("#value9").onclick=()=>{input.value+="9"};
document.querySelector("#valueadd").onclick=()=>{input.value+="+"};
document.querySelector("#valuesub").onclick=()=>{input.value+="-"};
document.querySelector("#valuemul").onclick=()=>{input.value+="*"};
document.querySelector("#valuediv").onclick=()=>{input.value+="/"};
document.querySelector("#valuemod").onclick=()=>{input.value+="%"};
document.querySelector("#valuedot").onclick=()=>{input.value+="."};
document.querySelector("#valueclose").onclick=()=>{input.value+=")"};
document.querySelector("#valueopen").onclick=()=>{input.value+="("};

let prevValue=0;
let curr=0;


function evaluate(s){
    return eval(s);
}

clear.onclick=()=>{
    input.value="";
}
result.onclick=()=>{
    let temp=input.value;
    curr=eval(input.value);
    console.log(curr);
    if(curr==undefined) prev.textContent="Enter valid expression";
    else{
        input.value=curr;
        prevValue=curr;
        prev.innerHTML="<div class='prevexp'>"+temp+" :</div>"+curr;
    }
}