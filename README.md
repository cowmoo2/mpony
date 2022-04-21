# mpony
* A small library with several numeric array functions - average, maximum, minimum, sum sort:
    * Average
        * avg: average
        * avgn: average negative
        * avgp: average positive
    * Minimum
        * min: minimum
        * minn: minimum negative
        * minp: minimum positive
    * Maximum
        * max: maximum
        * maxn: maximum negative
        * maxp: maximum positive
    * Sort
        * sorta: sort ascending
        * sortd: sort descending
    * Sum
        * sum: sum
        * sump: sum positive
        * sumn: sum negative
* If the result is undefined, mpony returns NaN.

## Installation
Using npm:
```
npm i mpony
```

## Usage
```Typescript
import {    avg, avgn, avgp, 
            max, maxn, maxp, 
            min, minn, minp, 
            sort, sortd,
            sum, sumn, sump } from "mpony";


// average
avg([4, 3, -1]);            // returns 2

avgn([3, -2, -2]);          // returns -2

avgp([2, 4, -2]);           // returns 3


// max
max([2, -7, 3.5]);          // returns 3.5

maxn([-7, -5, 0.2]);        // returns -5

maxp([0, 2, 5]);            // returns 5

maxp([0, -3, -7]);          // returns NaN


//min
min([-5, "abc", 3, 0]);     // returns -5

minn([-3, -4, 0]);          // returns -4

minp([3, 2, 0]);            // returns 2

minp([-3, -2, -1]);         // returns NaN


// sort
sort([2, 1, 5]);            // returns [1, 2, 5]

sortd([2, 1, 5]);           // returns [5, 2, 1]


// sum
sum([-2, -3, 7]);           // returns 2

sumn([-2, -3, 7]);          // returns -5

sump([-2, 4, 5]);           // returns 9
```