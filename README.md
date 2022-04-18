# mpony
* Find the minimum or maximum number in an array:
    * Maximum
        * max: maximum
        * maxn: maximum negative
        * maxp: maximum positive
    * Minimum
        * min: minimum
        * minn: minimum negative
        * minp: minimum positive
* If the result is undefined, mpony returns NaN

## Installation
Using npm:
```
npm i mpony
```

## Usage
```Typescript
import { max, maxp, maxn, min, minn, minp } from "mpony";

max([2, -7, 3.5]);          // returns 3.5

maxn([-7, -5, 0.2]);        // returns -5

maxp([0, 2, 5]);            // returns 5

min([-5, "abc", 3, 0]);     // returns -5

minn([-3, -4, 0]);          // returns -4

minp([3, 2, 0]);            // returns 2

minp([-3, -2, -1]);         // returns NaN
```