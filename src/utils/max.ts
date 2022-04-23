/**
 * max - get largest number in array
 * @param {Array<number>} items - [1, 2, "abc", 3]
 * @returns {number} - returns 3
 */
 export const max = (items: number[]): number => {
    items = items.filter(item => !isNaN(item)); // remove non-numeric items

    if (!items.length) {
        return NaN; // return undefined
    }

    return Math.max(...items);
}

/**
 * maxn - get largest negative number in array
 * @param {Array<number>} items - [-1, -2, 0]
 * @returns {number} - returns -1
 */
 export const maxn = (items: number[]): number => {
    items = items
        .filter(num => num < 0);        // remove positive or zero values

    if (!items.length) {
        return NaN; // return undefined
    }

    return Math.max(...items);
}


/**
 * maxp - get largest positive number in array
 * @param {Array<number>} items - [0, 2, 5]
 * @returns {number} - returns 5
 */
export const maxp = (items: number[]): number => {
    items = items
        .filter(num => num > 0);        // remove negative or zero values

    if (!items.length) {
        return NaN; // return undefined
    }

    return Math.max(...items);
}