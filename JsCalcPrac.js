
let dispEl = document.getElementById("output");

let prevKey="";
let firstOperend="";
let secondOperand="";
let currOperator="";

let limit=12;
let test=200;

dispEl.style.fontSize="200%";


function numberFunc(num){
    
    if(prevKey==="="){
        dispEl.value="";
        firstOperend="";
        secondOperand="";
        currOperator="";
        prevKey="";
    }
    if(prevKey==="operator"){
        dispEl.value="";
        secondOperand+=num;
        prevKey="number";
        secondOperand=Number(secondOperand);
        limit=12;
        test=200;

        dispEl.style.fontSize="200%";
    }

    if(dispEl.value.length>=24)
        return;

    if(secondOperand==="")
        firstOperend+=num;

    else if(secondOperand!="")
        secondOperand+=num;

    dispEl.value+=num;
    
    if(dispEl.value.length>=limit&&dispEl.value.length<21){      
        test=test-20;
        let eg=test+"%";
        dispEl.style.fontSize=eg;
        if(dispEl.value.length===limit&&dispEl.value.length<21){
            limit=limit+2;
        }
        
    }

    else if(dispEl.value.length===limit>=21) {
        limit=limit+4;
    }
  

}
function decimal(){
    dispEl.value+='.';
    
    prevKey=".";

}
function basicoperator(op){
    firstOperend=Number(dispEl.value);
    currOperator=op;
    prevKey="operator";

    
}

function equalFunc(){

    limit=12;
    test=200;

    dispEl.style.fontSize="200%";

    firstOperend=Number(firstOperend);
    secondOperand=Number(secondOperand);

    let solution;

    if(currOperator==='+')
        solution=firstOperend+secondOperand;
    if(currOperator==='-')
        solution=firstOperend-secondOperand;
    if(currOperator==='*')
        solution=firstOperend*secondOperand;
    if(currOperator==='/'){

        if(secondOperand===0){
            console.log("entered");
            dispEl.value="Not a Number";
            return;
        }
        else
        solution=firstOperend/secondOperand;   
    }

    
    solution=String(solution);
    console.log(solution.length);
    if(solution.length>12&&solution.length<18){
        dispEl.style.fontSize="140%";
    }
    if(solution.length>17){
        dispEl.style.fontSize="120%";
    }
    dispEl.value=Number(solution); 

    firstOperend=Number(dispEl.value);
    secondOperand="";
    prevKey='=';
}

function percent(){
    firstOperend=Number(firstOperend);
    let temp=firstOperend/100;
    dispEl.value=temp;
}

function negate(){

    if(dispEl.value===""){
        dispEl.value="-";
        return;
    }

    let temp=Number(dispEl.value);
    
    if(temp==='-0'){
        dispEl.value=0;
        return;
    }
    if(temp>0){
        dispEl.value=0-temp;
        return;
    }
    if(temp<0){
        dispEl.value=temp-(2*temp);
        return;
    }

}

function clearAll(){
    dispEl.value="";
    prevKey="";
    firstOperend="";
    secondOperand="";
    currOperator="";

     limit=12;
     test=200;

    dispEl.style.fontSize="200%";
}





