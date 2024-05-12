const calc = (opt) => {
    let a = document.getElementById('first').value;
    let b = document.getElementById('second').value;
    if(isNaN(a) || isNaN(b)){
        alert('Enter number Only')
    }else{
        let output = ''
        if(opt == 'Add'){
            output = `Sum of Number is ${Number(a)+Number(b)}`
        }else{
            output = `Sub of Number is ${Number(a)-Number(b)}`
        }
        document.getElementsByClassName('output')[0].innerText=output
    }
    
}


// function add(){
//     let a = document.getElementById('first').value;
//     let b = document.getElementById('second').value;
//     let out = Number(a)+Number(b)
//     document.getElementsByClassName('output')[0].innerText=out
// }

// const sub = () => {
//     let a = document.getElementById('first').value;
//     let b = document.getElementById('second').value;
//     let out = Number(a)-Number(b)
//     document.getElementsByClassName('output')[0].innerText=out
// }