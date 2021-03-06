enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
enum FileAccess {
    // constant members
    None,
    Read    = 1 << 1,
    Write   = 1 << 2,
    ReadWrite  = Read | Write,
    // computed member
    G = "123".length
}


enum Enum {
    A
}
let a = Enum.A;
let nameOfA = Enum[Enum.A]; // "A"
// is compiled to:

var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
var a = Enum.A;
var nameOfA = Enum[Enum.A]; // "A"

const enum Enum {
    A = 1,
    B = A * 2
}

const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]

var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];

declare enum Enum {
    A = 1,
    B,
    C = 2
}
