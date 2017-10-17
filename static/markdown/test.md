# this is a test markdown file

_the following is an extend complex class_

``` javascript
  class Complex {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    show() {
      console.log(this.write());
    }
    write() {
      return `${this.x} + ${this.y}i`;
    }
  }

  class iComplex extends Complex {
    conj() {
      const tmp = new Complex(this.x, -this.y);
      return tmp;
    }
    mod() {
      return this.x * this.x + this.y * this.y;
    }
    add(complex) {
      this.x = this.x + complex.x;
      this.y = this.y + complex.y;
    }
    times(complex) {
      const x = this.x * complex.x - this.y * complex.y;
      const y = this.x * complex.y + this.y * complex.x;
      this.x = x;
      this.y = y;
    }
  }
```
