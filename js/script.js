let tempresult=0;
let operator=["+","-","x","/"];
let workOperation="";

function clearAll(){
    document.getElementById("display").innerHTML=0;
    document.getElementById("secondDisplay").innerHTML=0;
}
function clearDisp(){
    document.getElementById("display").innerHTML=0;
}
function dispout(input){
    let disp=document.getElementById("display");
    let secDisp=document.getElementById("secondDisplay")
    if(disp.innerHTML ==="0" && operator.indexOf(input)===-1){
        if(input==="decimal"){
            disp.innerHTML="0.";
        }else if(input==="negative"){
            if(disp.innerHTML.indexOf("-1") === -1){
                disp.innerHTML="-"+disp.innerHTML;
        }else if(disp.innerHTML.indexOf("-1" > -1)){
                disp.innerHTML=disp.innerHTML.slice(1,disp.innerHTML.length);
        }
    }else{
            disp.innerHTML=input;
        }
    }else if (operator.indexOf(input) >=0){
        if(tempresult===disp.innerHTML){
            workOperation=input;
        }else if(workOperation===""){
            workOperation=input;
            tempresult=disp.innerHTML;
            secDisp.innerHTML=tempresult
            disp.innerHTML=0;
        }else{
            tempresult=calc(tempresult,disp.innerHTML,workOperation);
            secDisp.innerHTML=tempresult;
            disp.innerHTML=0;
            workOperation=input;
        }
        
    }else if(input==="="){
        disp.innerHTML=calc(tempresult,disp.innerHTML,workOperation);
        tempresult=0;
        workOperation="";
        secDisp.innerHTML=tempresult;
    }else if(input==="decimal"){
        if(disp.innerHTML.indexOf(".")===-1){
            disp.innerHTML+=".";
        }
    }else if(input==="negative"){
        if(disp.innerHTML.indexOf("-1") === -1){
            disp.innerHTML="-"+disp.innerHTML;
        }else if(disp.innerHTML.indexOf("-1" > -1)){
            disp.innerHTML=disp.innerHTML.slice(1,disp.innerHTML.length);   
        }
    }else{
        disp.innerHTML+= input;
    }
}



function calc(firstNumber,secondNumber,operator){
    let result;
    firstNumber=parseFloat(firstNumber);
    secondNumber=parseFloat(secondNumber);
    switch(operator){
        case "+":
            result=firstNumber+secondNumber;
            break;
        case "-":
            result=firstNumber-secondNumber;
            break;
        case "x":
            result=firstNumber*secondNumber;
            break;
        case "/":
            result=firstNumber/secondNumber;
            break;
        default:
            console.log("Something went wrong");
    }
    return result.toString();
}
