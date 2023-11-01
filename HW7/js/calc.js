const add_btn = document.getElementById("plus")
const sub_btn = document.getElementById("minus")
const mult_btn = document.getElementById("times")
const div_btn = document.getElementById("div")
const greater_or_equal_btn = document.getElementById("GTOE")
const less_or_equal_btn = document.getElementById("LTOE")

const input1 = document.getElementById("num1")
const input2 = document.getElementById("num1")
const selectedOP = document.getElementById("selectedOperation")
const output = document.getElementById("answer")

add_btn.addEventListener("click",add)
sub_btn.addEventListener("click",sub)
mult_btn.addEventListener("click",mult)
div_btn.addEventListener("click",div)
greater_or_equal_btn.addEventListener("click",funcGTOE)
less_or_equal_btn.addEventListener("click",funcLTOE)

function outputValue(val){
    output.innerHTML = val
}
function add(){
 
    const input1 = parseFloat(document.getElementById("num1").value)
    const input2 = parseFloat(document.getElementById("num2").value)
    
    let result = input1 + input2
    selectedOP.innerHTML = "+"
    outputValue(result)
}

function sub(){
    const input1 = parseFloat(document.getElementById("num1").value)
    const input2 = parseFloat(document.getElementById("num2").value)
    
    let result = input1 - input2
    selectedOP.innerHTML = "-"

    outputValue(result)

}

function mult(){
    const input1 = parseFloat(document.getElementById("num1").value)
    const input2 = parseFloat(document.getElementById("num2").value)
    
    let result = input1 * input2
    selectedOP.innerHTML = "x"

    outputValue(result)
}

function div(){
    const input1 = parseFloat(document.getElementById("num1").value)
    const input2 = parseFloat(document.getElementById("num2").value)
    
    let result = input1 / input2
    selectedOP.innerHTML = "÷"

    outputValue(result)
}

function funcGTOE(){
    const input1 = parseFloat(document.getElementById("num1").value)
    const input2 = parseFloat(document.getElementById("num2").value)
    
    let result = input1 >= input2
    selectedOP.innerHTML = "≥"

    outputValue(result)
}
function funcLTOE(){
    const input1 = parseFloat(document.getElementById("num1").value)
    const input2 = parseFloat(document.getElementById("num2").value)
    
    let result = input1 <= input2
    selectedOP.innerHTML = "≤"

    outputValue(result)
}
