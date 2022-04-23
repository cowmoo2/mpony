/**
 * sort - sort numbers of an array in ascending order 
 * @param {Array<number>} items - [3, 2, 1]
 * @returns {Array<number>} - returns [1, 2, 3]
 */
export const sorta = (items: number[]): number[] => {

    if (!items.length) {
        return []; // return undefined
    }

    return items.sort((a, b) => { return a - b; });
}

/**
 * sortd - sort numbers of an array in ascending order 
 * @param {Array<number>} items - [2, 3, 1]
 * @returns {Array<number>} - returns [3, 2, 1]
 */
export const sortd = (items: number[]): number | number[] => {

    if (!items.length) {
        return []; // return undefined
    }

    return items.sort((a, b) => { return b - a; });
}

