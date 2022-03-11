const inputs=document.getElementsByTagName("input")
const newInputs=Array.from(inputs)
console.log('inputs', inputs)
console.log('newinputs', newInputs)
//map con inputs

newInputs.map((newInputs)=>{
    console.log('newInputs', newInputs)
})

const form=document.getElementsByTagName("form")
console.log('form', form)

const button=document.getElementsByTagName("button")
console.log('button', button)

const divContent=document.getElementsByTagName("div")
console.log('divContent', divContent)

const newDivContent=Array.from(divContent)
console.log(newDivContent)

newDivContent.forEach((element)=>{
    console.log("element", element)
})

const inputEmail=document.getElementById('input_email')

console.log(inputEmail.value)
inputEmail.style.backgroundColor='red'
console.log(inputEmail)

const inputpassword=document.getElementById('input_password')
inputpassword.style.backgroundColor='black'
inputpassword.style.color='white'

console.log('password', inputpassword.value)

//vamos obtener elemertos por su class

const inputsName= document.getElementsByClassName('input_name')

console.log(inputsName)

const newInputsname=Array.from(inputsName)

newInputsname.forEach((input)=>{
    console.log(input.value)
})

const buttons=document.getElementsByClassName('btn_regoister')
console.log(button)