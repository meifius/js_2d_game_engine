// Building the constructor
var Vec2 = function (x,y) {
    this.x = x;
    this.y = y;
};
// Adding all the functions to support basic vector operations.

// Pre : Nothing to receive.
// Post : Returns a number that represent the pitagory distances.
Vec2.prototype.length = function () {
    return Math.sqrt ( (this.x * this.x) + (this.y * this.y) );
};

// Pre : Receive a valid 2d vector position.
// Post : Returns a vector that is the sum of the input vector and the actual position.
Vec2.prototype.add = function (vec) {
    return new Vec2 ( (vec.x + this.x), (vec.y + this.y));
};

// Pre : Receive a valid 2d vector position.
// Post : Returns a vector that is the subtruct of the actual position and the input vector.
Vec2.prototype.subtract = function (vec) {
    return new Vec2 ( (this.x - vec.x) , (this.y - vec.y) );
};

// Pre : Receive a valid 2d vector position.
// Post : Returns a vector that is and n scale of the input vector. 
Vec2.prototype.scale = function (n) {
    return new Vec2 ( (this.x * n) , (this.y * n) );
};

// Pre : Receive a valid 2d vector position.
// Post : Returns a number that represent the dot opertation between the actual vector and the input vector.
Vec2.prototype.dot = function (vec) {
    return ( (this.x * vec.x) , (this.y * vec.y) );
};

// Pre : Receive a valid 2d vector position.
// Post : Returns a number that represent the cross operation between the input vector and the actual vector.
Vec2.prototype.cross = function (vec) {
    return ( (this.x * vec.y) - (this.y * vec.x) );
};

// Pre : 
// Post : 
Vec2.prototype.rotate = function (center, angle) {
    // rotate in counterclockwise
    var r = [];
    var x = this.x - center.x;
    var y = this.y - center.y;
    r[0] = ( x * Math.cos(angle) ) - ( y * Math.sin(angle) );
    r[1] = ( x * Math.sin(angle) ) + ( y * Math.cos(angle) );
    r[0] += center.x;
    r[1] += center.y;

    return new Vec2 ( r[0] , r[1] );
};

// Pre : 
// Post : Returns a normalize actual vector. 
Vec2.prototype.normalize = function () {
    var len = this.length();

    if (len > 0) {
        len = 1 / len;
    }

    return new Vec2 ( (this.x * len) , (this.y * len) );
};

// Pre : Receive a valid 2d vector position.
// Post : Returns a number that represente the distance between the actual vector a some vector vec.
Vec2.prototype.distance = function (vec) {
    var x = this.x - vec.x;
    var y = this.y - vec.y;

    return Math.sqrt( (x * x) + (y * y));
};