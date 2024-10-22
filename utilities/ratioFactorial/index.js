const factorial= require("../factorial/index.js")
const ratio = require("../ratio/index.js") 

const ratioAndFactorial= (num1,num2,num3)=>{
    const ratio=ratio(num1,num2) 
    const factorial=factorial(num3)

    return {
        ratio,factorial
    }
}

module.exports=ratioAndFactorial;