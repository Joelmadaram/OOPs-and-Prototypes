// function Car (make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     console.log(this);
// }

// const car1 = new Car('Toyota', 'Camry', 2015);

class Color {
   constructor(r,g,b){
    console.log('INSIDE CONSTRUCTOR');
    console.log(r,g,b);
   }
}

const c1 = new Color(90,100,110)