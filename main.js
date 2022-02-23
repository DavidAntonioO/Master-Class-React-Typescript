<<<<<<< Updated upstream
for(let i =0; i<3; i++){
    (function test(o){
        alert(o);
    })(i)
}
=======
/*
function sum(...thisArgs){

   return arguments.length
    return thisArgs.reduce(function(previous, current){
        return previous + current;
    })

    
}



const newFruits = [...fruits, 'kiwi', 'uva']

console.log('fruits:' , fruits);
console.log('newfruits' , newFruits);


const userDetails = {
    //name: 'David',
    address: 'CDMX',
    sample: {
        test: 'test'
    }
}

*/

const fruits = [undefined, 'banana', 'sandia'];

const [firstFruit = 'strawberry' ,...otherFruits] = fruits;

console.log(firstFruit);
console.log(otherFruits);

//console.log(sum(5, 5, 5));

/*
const{newName = 'Mahesh', address} = userDetails;
console.log(newName);
console.log(address);


const newUserDetails = {...userDetails, mobileNumber: 123}
//const newUserDetails = {...userDetails, name: 'David'}

newUserDetails.sample.test = 'hola mundo';


console.log('userDetails:' , userDetails);
console.log('newUserDetails:' , newUserDetails);

*/
>>>>>>> Stashed changes
