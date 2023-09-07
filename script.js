const numbers=document.querySelectorAll('.btn-num');
const operators=document.querySelectorAll('.btn-operator');
const equal=document.querySelector('.btn-equal');
const clear=document.querySelector('.btn-clear');
const display=document.querySelector('.display-box');
const back=document.querySelector('.btn-back');
const point=document.querySelector('.btn-point');

let currentNum=0;
let afterNum=0;
let mathOperator=null;

numbers.forEach(number=>{
    number.onclick=()=>{
        if(mathOperator === null){
            display.value=display.value+number.value;
            currentNum= display.value;
            checkDecimal();
            back.onclick=()=>{
                point.disbaled=false;
                display.value=display.value.slice(0,-1);
                currentNum= display.value;
            }
        }else{
            display.value=display.value+number.value;
            afterNum= display.value;
            checkDecimal();
            back.onclick=()=>{
                point.disbaled=false;
                display.value=display.value.slice(0,-1);
                afterNum= display.value;
                
            }
        }
    }
});

operators.forEach(operator=>{
    operator.onclick=()=>{
        display.value = ``;
        mathOperator= operator.value;
    }
});

equal.onclick=()=>{
    operate(mathOperator,Number(currentNum),Number(afterNum));
}

const operate=(operator,num1,num2)=>{
    if(operator == "+"){
        display.value=addition(num1,num2);
        currentNum= Number(display.value);
    } else if(operator == "-"){
        display.value=subtract(num1,num2);
        console.log(display.value);
        currentNum= Number(display.value);
    }else if(operator == "*"){
        display.value=multiply(num1,num2);
        currentNum= Number(display.value);
    }else if(operator == "/"){
        display.value=divide(num1,num2);
        currentNum= Number(display.value);
    }else{
        alert("Invalid Operator!");
    }
}

const addition=(num1,num2)=>(num1 + num2).toFixed(2);
const subtract=(num1,num2)=>(num1 - num2).toFixed(2);
const multiply=(num1,num2)=>(num1 * num2).toFixed(2);
const divide=(num1,num2)=>(num1 / num2).toFixed(2);

 
clear.onclick=()=>{
    display.value='';
    currentNum=0;
    afterNum=0;
    mathOperator=null;
}

const checkDecimal=()=>{
    if (display.value.includes('.')){
        point.disabled=true;
    } else {
        point.disbaled=false;
    }
}
