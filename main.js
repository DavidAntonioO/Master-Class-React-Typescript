<<<<<<< Updated upstream
for(let i =0; i<3; i++){
    (function test(o){
        alert(o);
    })(i)
}
=======
const orig = ['avocado', 'apple', {name: 'strawberry'}];


/*const orig ={
    test: 'test',
    userDetails:{
        address:{
            province: 'Province',
            country: 'country'
        },
        name: 'myObject'
    },
    myFn: () => {},
    undef:undefined,
}
*/

//const copy = orig;
//const copy = orig.slice();
//const copy = Object.assign({}, orig);
const copy = JSON.parse(JSON.stringify(orig));

//copy.test = "newTest";
//copy.userDetails.name = 'David';

//copy.push('guava');

copy[2].name = 'coconut';

console.log('orig:', orig);

console.log('copy:', copy)
>>>>>>> Stashed changes
