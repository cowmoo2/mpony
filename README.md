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
* If the result is undefined, return 0 with an appropriate label. 

## Installation
Using npm:
```
npm i mpony
```

## Usage
```Typescript
import { max, maxp, maxn, min, minn, minp } from "mpony";

max([2, -7, 3.5]);          // returns { result: 3.5, label: "OK" }

maxn([-7, -5, 0.2]);         // returns { result: -5, label: "OK" }

maxp([-13, 0, 2]);          // returns { result: 2, label: "OK" }

min([-5, "abc", 3, 0]);     // returns { result: -5, label: "OK" }

minn([-3, -4, 0]);          // returns { result: -4, label: "OK" }

minp([-3, -3, 2, 0]);       // returns { result: 2, label: "OK" }
```