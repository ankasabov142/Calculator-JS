function numbers(num){
const field=document.getElementById('textResult');
let result=field.innerText
if(result!=0){
    //if the result field is already not a zero, concatenate it with the clicked number;
    result+=num;
    field.innerText=`${result}`;
}else{
    //if the result field is zero,replace it with the clicked number;
    field.innerText=`${num}`;
}

}

function operators (op){
console.log(op)
}


