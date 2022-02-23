<<<<<<< Updated upstream
for(let i =0; i<3; i++){
    (function test(o){
        alert(o);
    })(i)
}
=======
class Shape{
    #privateVariable = 'privateVariable'
    publicVariable = 'publicVariable'
    static staticVariable = 'staticVariable'

    constructor(height, width){
        this.height = height;
        this.width = 'width';
    }

    getArea(){
        return 'not implemented';
    }

    getPrivateVariable(){
        return this.#privateVariable;
    }
    
}

class Square extends Shape {
    getArea(){
        return this.height * this.width;
    }

    getParentClassArea(){
        return super.getArea();
    }
}

const mySquare = new Square(1, 10);

console.log(mySquare.getPrivateVariable());

//const myShape = new Shape(5, 10);

>>>>>>> Stashed changes
