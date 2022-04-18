interface Res {
    result: number;
    label: string;
}

const keys = { ok: "OK", udef: "Undefined" };

export const min = (items: any[]): Res => {
    items = items.filter(item => !isNaN(item)); // remove non-numeric items

    if (!items.length) {
        return { result: 0, label: keys.udef }; // default to 0 for undefined cases
    }

    return { result: Math.min(...items), label: keys.ok };
}

export const minp = (items: any[]): Res => {
    items = items
        .filter(item => !isNaN(item))   // remove non-numeric items
        .filter(num => num > 0);        // remove negative or zero values

    if (!items.length) {
        return { result: 0, label: keys.udef };  // default to 0 for undefined cases
    }

    return { result: Math.min(...items), label: keys.ok };
}

