function getResult(){
    const  result = document.getElementById("result").innerHTML
    return result

    
}
function setResult(value){
    document.getElementById("result").innerHTML=value
}
function add(key){
    let result = getResult()
    if (result != "0" || isNaN(key)){// && = y,
        console.log(isNaN(key)) 
        setResult(result + key)// concatena el valor anterior
    } else {
        setResult(key)
    }
}
function calculate(){
    let result = eval(getResult())
        setResult(result)
    }
function clean(){
    setResult(0)
}