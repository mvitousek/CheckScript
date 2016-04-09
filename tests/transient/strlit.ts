type basic = number | string | boolean;

type Lazy<T> = T | (() => T);

type CardinalDirection =
    "North"
    | "East"
    | "South"
    | "West";

function move(distance: number, direction: CardinalDirection[], dir2:CardinalDirection) {
    direction[0];
    // ...
}

move(1,["North"],"South"); // Okay