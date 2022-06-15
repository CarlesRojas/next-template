const APP_NAME = "next-template";

export const getFromLocalStorage = (key: string) => {
    const prefixedKey = `${APP_NAME}_${key}`;

    try {
        const result = localStorage.getItem(prefixedKey);
        return result ? JSON.parse(result) : null;
    } catch {
        return localStorage.getItem(prefixedKey);
    }
};

export const setToLocalStorage = (key: string, value: any) => {
    const prefixedKey = `${APP_NAME}_${key}`;

    if (typeof value === "object") {
        localStorage.setItem(prefixedKey, JSON.stringify(value));
    } else {
        localStorage.setItem(prefixedKey, value);
    }
};

export const deleteFromLocalStorage = (key: string) => {
    const prefixedKey = `${APP_NAME}_${key}`;

    localStorage.removeItem(prefixedKey);
};

export const clearLocalStorage = () => {
    const keys = Object.keys(localStorage);

    for (const key of keys) {
        if (key.includes(APP_NAME)) deleteFromLocalStorage(key);
    }
};
