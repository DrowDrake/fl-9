/*Assign polyfill*/
let assign = function f(target) {
    for (let i = 1; i < arguments.length; i++) {
        let source = arguments[i];
        for (let key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
}
let defaults = {a: 10, b: 20};
let option = {a: 33};
let config = assign({}, defaults, option);
console.log(config);

/*Bot for inheritance*/
function Bot(arg) {
    this.name = arg.name;
    this.speed = arg.speed;
    this.x = arg.x;
    this.y = arg.y;

    this.setSpeed = function (speed) {
        this.speed = speed;
    }

    this.getSpeed = function () {
        return this.speed;
    }

    this.getDefaultSpeed = function () {
        return arg.speed;
    }

    this.setCoordinates = function (x, y) {
        this.x = x;
        this.y = y;
    };

    this.getCoordinates = function () {
        return `x: ${this.x} y: ${this.y}`;
    };

    this.move = function (direction) {
        if (direction === 'up') {
            this.y += this.getSpeed();
        }else if (direction === 'right') {
            this.x += this.getSpeed();
        }else if (direction === 'down') {
            this.y -= this.getSpeed();
        }else if (direction === 'left') {
            this.x -= this.getSpeed();
        } else {
            console.log('wrong direction input');
        }
        if(direction){
            if (this.getDefaultSpeed() === this.getSpeed()) {
                this.setSpeed(this.getDefaultSpeed());
            } else {
                this.setSpeed(this.getSpeed() - 1);
            }
        }
    };

    this.showPosition = function (){
        console.log(`I am bot ${this.name}. I am located at ${this.x}:${this.y}`);
    };
}

let Botty = new Bot({name: 'Betty', speed: 2, x: 0, y: 1});
Botty.showPosition(); // I am Bot 'Betty'. I am located at 0:1.
Botty.move('up');
Botty.showPosition(); // I am Bot 'Betty'. I am located at 0:3.
Botty.move('left');
Botty.move('down');
Botty.move('up');
Botty.move('up');
Botty.showPosition(); // I am Bot 'Betty'. I am located at -2:5.
Botty.move('up');
Botty.showPosition(); // I am Bot 'Betty'. I am located at -2:7.
Botty.move('up');
Botty.showPosition(); // I am Bot 'Betty'. I am located at -2:9.

/*Inherited Bot (class) 1.0*/
function Racebot(arg) {
    Bot.call(this, arg);

    let varUpCounter=0;
    let varRightCounter=0;
    let varDownCounter=0;
    let varLeftCounter=0;
    let counter =0;
    let variable = this.getSpeed();

    this.move = function (direction) {
        if (direction === 'up') {
            if (varRightCounter > 0 || varDownCounter > 0 || varLeftCounter > 0) {
                varUpCounter = 0;
                counter = 1;
            } else {
                if (counter === 1) {
                    varUpCounter = 0;
                    counter = 0;
                } else {
                    varUpCounter = 1;
                }
            }
            this.upCounter(varUpCounter);
        }
        if (direction === 'right') {
            if (varUpCounter > 0 || varDownCounter > 0 || varLeftCounter > 0) {
                varRightCounter = 0;
                counter = 1;
            } else {
                if (counter === 1) {
                    varRightCounter = 0;
                    counter = 0;
                } else {
                    varRightCounter = 1;
                }
            }
            this.rightCounter(varRightCounter);
        }
        if (direction === 'down') {
            if (varUpCounter > 0 || varRightCounter > 0 || varLeftCounter > 0) {
                varDownCounter = 0;
                counter = 1;
            } else {
                if (counter === 1) {
                    varDownCounter = 0;
                    counter = 0;
                } else {
                    varDownCounter = 1;
                }
            }
            this.downCounter(varDownCounter);
        }
        if (direction === 'left') {
            if (varUpCounter > 0 || varRightCounter > 0 || varDownCounter > 0) {
                varLeftCounter = 0;
                counter = 1;
            } else {
                if (counter === 1) {
                    varLeftCounter = 0;
                    counter = 0;
                } else {
                    varLeftCounter = 1;
                }
            }
            this.leftCounter(varLeftCounter);
        }
    }

    this.upCounter = function (varUpCounter) {
        if (varUpCounter !== 0) {
            this.y += variable;
            variable += 1;
            varUpCounter++;
        } else {
            this.y += arg.speed;
        }
    }
    this.rightCounter = function (varRightCounter) {
        if (varRightCounter !== 0) {
            this.x += variable;
            variable += 1;
            varRightCounter++;
        } else {
            this.x += arg.speed;
        }
    }
    this.downCounter = function (varDownCounter) {
        if (varDownCounter !== 0) {
            this.y -= variable;
            variable += 1;
            varDownCounter++;
        } else {
            this.y -= arg.speed;
        }
    }
    this.leftCounter = function (varLeftCounter) {
        if (varLeftCounter !== 0) {
            this.x -= variable;
            variable += 1;
            varLeftCounter++;
        } else {
            this.x -= arg.speed;
        }
    }
}

let Zoom = new Racebot({name: 'Lightning', speed: 2, x: 0, y: 1});
Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at 0:1.
Zoom.move('up');
Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at 0:3.
Zoom.move('left');
Zoom.move('down');
Zoom.move('up');
Zoom.move('up');
Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at -2:6.
Zoom.move('up');
Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at -2:10.
Zoom.move('up');
Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at -2:15.

/*Inherited Bot (class) 2.0*/
let Speedbot = function(name, speed, x, y) {
    Bot.call(this, name, speed, x, y);

    this.prepareEngine = function () {
        this.setSpeed(this.getSpeed() + 2);
    }
}

let Broom = new Speedbot({name: 'Thunder', speed: 2, x: 0, y: 1});
Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at 0:1.
Broom.move('up');
Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at 0:3.
Broom.prepareEngine();
Broom.move('left');
Broom.move('down');
Broom.move('up');
Broom.move('up');
Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at -4:4.
Broom.move('up');
Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at -4:6.
Broom.move('up');
Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at -4:8.
