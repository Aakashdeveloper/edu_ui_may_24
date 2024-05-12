var a = 10
var b = 20
a+b
30

var a = 19
var b = 20
a+b
39

keyword nameoffunction(parameter){
    return 
}

function add(a,b,){
    return a+b
}
add(3,7)
10
add(11,34)
45
add(11,34,1)
45
add(11)
NaN


function isEven(userInput){
    let out = ''
    if(userInput%2 == 0 ){
        out = `${userInput} is even`
    }else{
        out = `${userInput} is odd`
    }

    return out
}

isEven(11)
'11 is odd'
isEven(5)
'5 is odd'
isEven(4)
'4 is even'

//es5
function add(a,b){
    return a+b
}

add(1,2)

//es6
let add = (a,b) => {return a+b}
add(5,6)