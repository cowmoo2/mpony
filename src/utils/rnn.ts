/**
 * rnn - remove nonnumerical items
 * @param {Array<any>} items - [-5, "abc", 3, 0]
 * @returns {number} - returns [-5, 3, 0]
 */
export const rnn = (items: any[]): number[] => {
    items = items.filter(item => !isNaN(item)); // remove non-numeric items

    if (!items.length) {
        return []; // return empty
    }

    return items;
};