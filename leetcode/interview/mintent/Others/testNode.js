class Screen {  
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  diagonal() {
    console.log( this.width, this.height );
    const ret =  Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2));
    // console.log( ret );
    return ret;
  }
  
  set dimensions(definition) {
    var dimensions = definition.split('x')
    this.width = parseInt(dimensions[0]);
    this.height = parseInt(dimensions[1]);
    // console.log('---', this.width, this.height );
  }
}

var screen = new Screen(0, 0);
// console.log(screen.diagonal()); // Should print 0
screen.dimensions = '500x300';
// console.log(screen.diagonal()); // Should print 0
screen.width = 400;
console.log(screen.diagonal); // Should print 500