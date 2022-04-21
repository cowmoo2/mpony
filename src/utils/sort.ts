/**
 * sort - sort numbers of an array in ascending order after cleansing
 * @param {Array<any>} items - [3, 2, "abc", 1]
 * @returns {number} - returns [1, 2, 3]
 */
export const sorta = (items: any[]): number | number[] => {
    items = items.filter(item => !isNaN(item)); // remove non-numeric items

    if (!items.length) {
        return NaN; // return undefined
    }

    return items.sort((a, b) => { return a - b; });
}

/**
 * sortd - sort numbers of an array in ascending order after cleansing
 * @param {Array<any>} items - [3, 2, "abc", 1]
 * @returns {number} - returns [1, 2, 3]
 */
export const sortd = (items: any[]): number | number[] => {
    items = items.filter(item => !isNaN(item)); // remove non-numeric items

    if (!items.length) {
        return NaN; // return undefined
    }

    return items.sort((a, b) => { return b - a; });
}

