import {Shape} from './shape';
import {Rectangle} from './rectangle';
import {Circle} from './circle';



let rectangle = new Rectangle(5, 10);
let circle = new Circle(5);

let shapes: Shape[] = [rectangle, circle];

shapes.forEach(shape =>{
   console.log(shape.displayArea());
});