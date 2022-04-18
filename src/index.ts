// interface Res {
//     result: number;
//     label: string;
// }

// const keys = { ok: "OK", udef: "Undefined" };

// max - get maximum number
export const max = (items: any[]): number => {
    items = items.filter(item => !isNaN(item)); // remove non-numeric items

    if (!items.length) {
        return NaN; // return undefined
    }

    return Math.max(...items);
}


// maxn - get maximum negative number
export const maxn = (items: any[]): number => {
    items = items
        .filter(item => !isNaN(item))   // remove non-numeric items
        .filter(num => num < 0);        // remove positive or zero values

    if (!items.length) {
        return NaN; // return undefined
    }

    return Math.max(...items);
}


// maxp - get maximum positive number
export const maxp = (items: any[]): number => {
    items = items
        .filter(item => !isNaN(item))   // remove non-numeric items
        .filter(num => num > 0);        // remove negative or zero values

    if (!items.length) {
        return NaN; // return undefined
    }

    return Math.max(...items);
}




// min - get minimum number
export const min = (items: any[]): number => {
    items = items.filter(item => !isNaN(item)); // remove non-numeric items

    if (!items.length) {
        return NaN; // return undefined
    }

    return Math.min(...items);
}


// minn - get minimum negative number
export const minn = (items: any[]): number => {
    items = items
        .filter(item => !isNaN(item))   // remove non-numeric items
        .filter(num => num < 0);        // remove positive or zero values

    if (!items.length) {
        return NaN; // return undefined
    }

    return Math.min(...items);
}


// minp - get minimum positive number
export const minp = (items: any[]): number => {
    items = items
        .filter(item => !isNaN(item))   // remove non-numeric items
        .filter(num => num > 0);        // remove negative or zero values

    if (!items.length) {
        return NaN; // return undefined
    }

    return Math.min(...items);
}

