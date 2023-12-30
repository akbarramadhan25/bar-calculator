const displayHistory = document.querySelector('.history')
const display = document.querySelector('.current')
const tempResult = document.querySelector('.temp-result')
const numbers = document.querySelectorAll('.numbers')
const operations = document.querySelectorAll('.operations')
const clearEntity = document.querySelector('.clear-entity')
const clearAll = document.querySelector('.clear-all')
const equal = document.querySelector('.equal')

let d1 = '';
let d2 = '';
let result = null;
let haveDot = false;
let lastOperation = '';


numbers.forEach(number => {
    number.addEventListener('click', function(e) {
        if(e.target.innerText === '.' && !haveDot) {
            haveDot = true
        }else if( e.target.innerText === '.' && haveDot ) {
            return;
        }
        d2 += e.target.innerText;
        display.innerText = d2
    })
})

operations.forEach(operation => {
    operation.addEventListener('click', function(e) {
        if ( !d2 ) return;
        haveDot = false;
        const operationName = e.target.innerText
        if( d1 && d2 && lastOperation ) {
            mathOperation()
        }else {
            result = parseFloat(d2)
        }
        clearVal(operationName)
        lastOperation = operationName
    })
})

equal.addEventListener('click', function(e) {
    if( !d1 || !d2 ) return;
    haveDot = false;
    mathOperation()
    clearVal()
    d2 = result
    display.innerText = d2;
    tempResult.innerText = '';
})

clearAll.addEventListener('click', function(e) {
    haveDot = false;
    d1 = ''
    d2 = ''
    result = ''
    display.innerText = 0;
    displayHistory.innerText = 0;
    tempResult.innerText = 0
    lastOperation = ''
})

clearEntity.addEventListener('click', function(e) {
    haveDot = false;
    d2 = ''
    display.innerText = '';
})




function clearVal(name = '') {
    d1 += d2 + '' + name + '';
    displayHistory.innerText = d1
    display.innerText = ''
    d2 = ''
    tempResult.innerText = result;
}
    

    
function mathOperation() {
    if(lastOperation === 'x' || lastOperation === '=') {
        result = parseFloat(result) * parseFloat(d2)
    }else if(lastOperation === '+') {
        result = parseFloat(result) + parseFloat(d2)
    }else if(lastOperation === '/') {
        result = parseFloat(result) / parseFloat(d2)
    }else if(lastOperation === '-') {
        result = parseFloat(result) - parseFloat(d2)
    }else if( lastOperation === '%' ) {
        result = parseFloat(result) % parseFloat(d2)
    }
}

// operations.forEach(operation => {
//     operation.addEventListener('click', function(e) {
//         if(!d2) return;
//         haveDot = false
//         const operationName = e.target.innerText;
//         if( d1 && d2 && lastOperation ) {
//             mathOperation()
//         }else {
//             result = parseFloat(d2)
//         }
//         clearVal(operationName)
//         lastOperation = operationName
//     }) 
// })


// function mathOperation() {
//     if( lastOperation === 'x' || lastOperation === '=' ) {
//         result = parseFloat(result) * parseFloat(d2)
//     }else if( lastOperation === '/' ) {
//         result = parseFloat(result) / parseFloat(d2)
//     }else if( lastOperation === '+' ) {
//         result = parseFloat(result) + parseFloat(d2)
//     }else if(lastOperation === '-') {
//         result = parseFloat(result) - parseFloat(d2)
//     }else if( lastOperation === '%' ) {
//         result = parseFloat(result) % parseFloat(d2)
//     }
// }



// function clearVal(name = "") {
//     d1 += d2 + '' + name + '';
//     displayHistory.innerText = d1;
//     display.innerText = '';
//     d2 = ''
//     tempResult.innerText = result;
// }


















// numbers.forEach(number => {
//     number.addEventListener('click', function(e) {
//         if( e.target.innerText === '.' && !haveDot ) {
//             haveDot = true;
//         }else if( e.target.innerText === '.' && haveDot ) {
//             return;
//         }
//         d2 += e.target.innerText;
//         display.innerText = d2
//     })
// })

// operations.forEach(operation => {
//     operation.addEventListener('click', function(e) {
//         if ( !d2 ) return;
//         haveDot = false;
//         const operationName = e.target.innerText;
//         if( d1 && d2 && lastOperation ) {
//             mathOperation()
//         }else {
//             result = parseFloat(d2)
//         }
//         clearVal(operationName)
//         lastOperation = operationName
//     })
// })


// equal.addEventListener('click', function(e) {
//     if( !d1 || !d2 ) return;
//     haveDot = false;
//     mathOperation()
//     clearVal()
//     display.innerText = result;
//     tempResult.innerText = ''
// })

// clearAll.addEventListener('click', function(e) {
//     d1 = '';
//     d2 = '';
//     result = ''
//     display.innerText = 0;
//     displayHistory.innerText = 0;
//     tempResult.innerText = 0;
// })

// clearEntity.addEventListener('click', function(e) {
//     display.innerText = ''
//     d2 = ''
//     haveDot = false;
// })



// function clearVal(name = "") {
//     d1 += d2 + '' + name + '';
//     displayHistory.innerText = d1
//     display.innerText = ''
//     d2 = ''
//     tempResult.innerText = result;
// }




// function mathOperation() {
//     if(lastOperation === 'x' || lastOperation === '=') {
//         result = parseFloat(result) * parseFloat(d2)
//     }else if(lastOperation === '+') {
//         result = parseFloat(result) + parseFloat(d2)
//     }else if(lastOperation === '/') {
//         result = parseFloat(result) / parseFloat(d2)
//     }else if(lastOperation === '-') {
//         result = parseFloat(result) - parseFloat(d2)
//     }else if( lastOperation === '%' ) {
//         result = parseFloat(result) % parseFloat(d2)
//     }
// }