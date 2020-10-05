const choice = (items) => {
    return Math.floor(Math.random() * items.length);
};

const remove = (items, item) => {
    const idx = items.indexOf(item);
    if (idx === -1) {
        return undefined;
    } else {
        const removed = items.splice(idx, 1)[0];
        return removed;
    }
};

export { choice, remove };
