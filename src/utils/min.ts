/**
 * MINIMUM START
 */

/**
 * min - get smallest number in array
 * @param {Array<any>} items - [-5, "abc", 3, 0]
 * @returns {number} - returns -5
 */
 export const min = (items: any[]): number => {
    items = items.filter(item => !isNaN(item)); // remove non-numeric items

    if (!items.length) {
        return NaN; // return undefined
    }

    return Math.min(...items);
}


/**
 * minn - get smallest negative number in array
 * @param {Array<any>} items - [-3, -4, 0]
 * @returns {number} - returns -4
 */
export const minn = (items: any[]): number => {
    items = items
        .filter(item => !isNaN(item))   // remove non-numeric items
        .filter(num => num < 0);        // remove positive or zero values

    if (!items.length) {
        return NaN; // return undefined
    }

    return Math.min(...items);
}


/**
 * minp - get smallest positive number in array
 * @param {Array<any>} items - [3, 2, 0]
 * @returns {number} - returns 2
 */
export const minp = (items: any[]): number => {
    items = items
        .filter(item => !isNaN(item))   // remove non-numeric items
        .filter(num => num > 0);        // remove negative or zero values

    if (!items.length) {
        return NaN; // return undefined
    }

    return Math.min(...items);
}
