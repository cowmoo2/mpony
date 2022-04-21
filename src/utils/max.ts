/**
 * max - get largest number in array
 * @param {Array<any>} items - [1, 2, "abc", 3]
 * @returns {number} - returns 3
 */
 export const max = (items: any[]): number => {
    items = items.filter(item => !isNaN(item)); // remove non-numeric items

    if (!items.length) {
        return NaN; // return undefined
    }

    return Math.max(...items);
}

/**
 * maxn - get largest negative number in array
 * @param {Array<any>} items - [-1, -2, 0]
 * @returns {number} - returns -1
 */
 export const maxn = (items: any[]): number => {
    items = items
        .filter(item => !isNaN(item))   // remove non-numeric items
        .filter(num => num < 0);        // remove positive or zero values

    if (!items.length) {
        return NaN; // return undefined
    }

    return Math.max(...items);
}


/**
 * maxp - get largest positive number in array
 * @param {Array<any>} items - [0, 2, 5]
 * @returns {number} - returns 5
 */
export const maxp = (items: any[]): number => {
    items = items
        .filter(item => !isNaN(item))   // remove non-numeric items
        .filter(num => num > 0);        // remove negative or zero values

    if (!items.length) {
        return NaN; // return undefined
    }

    return Math.max(...items);
}