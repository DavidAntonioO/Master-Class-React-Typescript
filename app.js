/*
function calculaSquareArea(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            const squareArea = 5*5;
            reject(squareArea);
        }, 500);
    })
    
}

const myPromises = [
    new Promise((resolve, reject) => setTimeout(() => reject (100), 100)),
    new Promise((resolve, reject) => setTimeout(() => resolve (200), 200)),
    new Promise((resolve, reject) => setTimeout(() => resolve (300), 300))
];

function onFulFilled(data){
    console.log('onFuilFilled:', data);
}

//Promise.reject('testresolve')
//Promise.allSettled(myPromises)
Promise.any(myPromises)
.then(onFulFilled)
.catch((reason) => {
    console.log('catch:', reason);
});

*/



/*
function onRejected(reason){
    console.log('onRejected:', reason);
}
*/

//calculaSquareArea()


let myNumber = 5;

function changeNumber(){
     /* 
     return new Promise((resolve) => {
        setTimeout(() => {
            myNumber = 10;
            resolve(myNumber);
        }, 500);
    })
    */
   myNumber = 10;
}

/*
function startChange(){
     changeNumber();
   console.log(myNumber);
}

*/

async function startChange(){
     await changeNumber();
    console.log(myNumber);
}

startChange();
