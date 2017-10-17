# this is h1
## this is h2
### this is h3
#### this is h4
##### this is h5
###### this is h6
[a link]()
_italic_
**bold texts**
- 	item 1

		hahaha
- 	item 2

		hehehe

1. numerate 1
1. numerate 2
1. numerate 3

> asda sdasd
> asda sdasd dd

| 音频设备 | 功能及原理 | 环节 |
| -- | -- | -- |
| [麦克风架]() | 支撑固定[麦克风架]()的架子 | [拾音]() |
|DI盒 |匹配阻抗，将声音的电信号接入调音台 |[拾音]() |
|乐器音箱 |为电声乐器（电吉他、电贝司）专门设计，为了获得合适的音色 |[拾音]() |
|无功放调台  |平衡进入调音台的声音信号，添加效果最后混合输出  |[调音]() |
|有功放[调台]() |带有功放的[调台]()，可以直接输出信号给[主扩]()  |[调音]()、[主扩]() |
|[均衡器]()  |接在调音台之后功放之前，用来调整整体的声音的[均衡]()  |[调音]()、[主扩]() |
|[压缩器]()  |接在调音台之后功放之前，用来控制整体声音的[动态]()  |[调音]()、[主扩]() |
|[功放]()  |放大来自调音台的混合好的声音信号，并将其放大到能够推动主扩喇叭的功率  |[主扩]() |
|[分频器]()  |用于把信号分成高低频段，分别输送给两组功放，再输送给分频主扩系统  |[主扩]() |
|无源[主扩]()音箱  |不带电源的喇叭，接收来自功放的大功率声音信号，振动产生给观众听的声音  |[主扩]() |
|无源[返听]()音箱  |与无源主扩类似，唯一的区别是它是给舞台上的演员听的  |[主扩]() |
|有源音箱  |有电源自带功放的主扩和返听箱  |[主扩]() |


``` javascript
	// block js codes
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
 here we got `const a = b + 1;` as inline codes