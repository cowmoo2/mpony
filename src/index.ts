interface Res {
    result: number;
    label: string;
}

const keys = { ok: "OK", udef: "Undefined" };

// max - get maximum number
export const max = (items: any[]): Res => {
    items = items.filter(item => !isNaN(item)); // remove non-numeric items

    if (!items.length) {
        return { result: 0, label: keys.udef }; // default to 0 for undefined cases
    }

    return { result: Math.max(...items), label: keys.ok };
}


// maxn - get maximum negative number
export const maxn = (items: any[]): Res => {
    items = items
        .filter(item => !isNaN(item))   // remove non-numeric items
        .filter(num => num < 0);        // remove positive or zero values

    if (!items.length) {
        return { result: 0, label: keys.udef };  // default to 0 for undefined cases
    }

    return { result: Math.max(...items), label: keys.ok };
}


// maxp - get minimum positive number
export const maxp = (items: any[]): Res => {
    items = items
        .filter(item => !isNaN(item))   // remove non-numeric items
        .filter(num => num > 0);        // remove negative or zero values

    if (!items.length) {
        return { result: 0, label: keys.udef };  // default to 0 for undefined cases
    }

    return { result: Math.max(...items), label: keys.ok };
}




// min - get minimum number
export const min = (items: any[]): Res => {
    items = items.filter(item => !isNaN(item)); // remove non-numeric items

    if (!items.length) {
        return { result: 0, label: keys.udef }; // default to 0 for undefined cases
    }

    return { result: Math.min(...items), label: keys.ok };
}


// minn - get minimum negative number
export const minn = (items: any[]): Res => {
    items = items
        .filter(item => !isNaN(item))   // remove non-numeric items
        .filter(num => num < 0);        // remove positive or zero values

    if (!items.length) {
        return { result: 0, label: keys.udef };  // default to 0 for undefined cases
    }

    return { result: Math.min(...items), label: keys.ok };
}


// minp - get minimum positive number
export const minp = (items: any[]): Res => {
    items = items
        .filter(item => !isNaN(item))   // remove non-numeric items
        .filter(num => num > 0);        // remove negative or zero values

    if (!items.length) {
        return { result: 0, label: keys.udef };  // default to 0 for undefined cases
    }

    return { result: Math.min(...items), label: keys.ok };
}

