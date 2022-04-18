# mpony
* Find the minimum and maximum in an array:
    * Maximum
        * max: maximum
        * maxn: maximum negative
        * maxp: maximum positive
    * Minimu
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

maxn([0, -5, 0.2]);         // returns { result: -5, label: "OK" }

maxp([-13, -7, -2]);        // returns { result: 0, label: "Undefined" }

min([-5 ,"abc", 3, 0]);     // returns { result: -5, label: "OK" }
```