/**
 * sum - get sum of numbers in an array
 * @param {Array<number>} items - [1, 2, 3]
 * @returns {number} - returns 6
 */
 export const sum = (items: any[]): number => {
    items = items.filter(item => !isNaN(item)); // remove non-numeric items

    if (!items.length) {
        return NaN; // return undefined
    }

    const sum = items.reduce((a, b) => a + b, 0);
    
    return sum;
}

/**
 * sumn - get sum of all negative numbers in array
 * @param {Array<number>} items - [-2, -2, 3]
 * @returns {number} - returns -4
 */
 export const sumn = (items: number[]): number => {
    items = items
        .filter(num => num < 0);        // remove positive or zero values

    if (!items.length) {
        return NaN; // return undefined
    }

    const sum = items.reduce((a, b) => a + b, 0);

    return sum;
}

/**
 * sump - get sum of all positive numbers in array
 * @param {Array<number>} items - [-2, 2, 4]
 * @returns {number} - returns 6
 */
 export const sump = (items: number[]): number => {
    items = items
        .filter(num => num > 0);        // remove positive or zero values

    if (!items.length) {
        return NaN; // return undefined
    }

    const sum = items.reduce((a, b) => a + b, 0);

    return sum;
}