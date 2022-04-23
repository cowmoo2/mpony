/**
 * avg - get average of numbers in an array 
 * @param {Array<number>} items - [1, 2, "abc", 3]
 * @returns {number} - returns 2
 */
 export const avg = (items: number[]): number => {
    if (!items.length) {
        return NaN; // return undefined
    }

    const sum = items.reduce((a, b) => a + b, 0);
    
    return sum / items.length;
}

/**
 * avgn - get average of negative numbers in array 
 * @param {Array<number>} items - [-2, -2, 3]
 * @returns {number} - returns -2
 */
 export const avgn = (items: number[]): number => {
    items = items.filter(num => num < 0);   // remove positive or zero values

    if (!items.length) {
        return NaN; // return undefined
    }

    const sum = items.reduce((a, b) => a + b, 0);

    return sum / items.length;
}

/**
 * avgp - get average of positive numbers in array 
 * @param {Array<number>} items - [-2, 2, 4]
 * @returns {number} - returns 3
 */
 export const avgp = (items: number[]): number => {
    items = items.filter(num => num > 0);   // remove positive or zero values

    if (!items.length) {
        return NaN; // return undefined
    }

    const sum = items.reduce((a, b) => a + b, 0);

    return sum / items.length;
}