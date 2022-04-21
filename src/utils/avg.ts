/**
 * avg - get average of numbers in an array after cleansing
 * @param {Array<any>} items - [1, 2, "abc", 3]
 * @returns {number} - returns 2
 */
 export const avg = (items: any[]): number => {
    items = items.filter(item => !isNaN(item)); // remove non-numeric items

    if (!items.length) {
        return NaN; // return undefined
    }

    const sum = items.reduce((a, b) => a + b, 0);
    
    return sum / items.length;
}

/**
 * avgn - get average of negative numbers in array after cleansing
 * @param {Array<any>} items - [-2, -2, 3]
 * @returns {number} - returns -2
 */
 export const avgn = (items: any[]): number => {
    items = items
        .filter(item => !isNaN(item))   // remove non-numeric items
        .filter(num => num < 0);        // remove positive or zero values

    if (!items.length) {
        return NaN; // return undefined
    }

    const sum = items.reduce((a, b) => a + b, 0);

    return sum / items.length;
}

/**
 * avgp - get average of positive numbers in array after cleansing
 * @param {Array<any>} items - [-2, 2, 4]
 * @returns {number} - returns 3
 */
 export const avgp = (items: any[]): number => {
    items = items
        .filter(item => !isNaN(item))   // remove non-numeric items
        .filter(num => num > 0);        // remove positive or zero values

    if (!items.length) {
        return NaN; // return undefined
    }

    const sum = items.reduce((a, b) => a + b, 0);

    return sum / items.length;
}