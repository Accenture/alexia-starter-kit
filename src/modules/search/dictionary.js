/*global setTimeout */
const items = {
    'car' : 'a road vehicle, typically with four wheels',
    'bike': 'a bicycle or motorcycle',
    'house': 'a building for human habitation',
    'pool': 'a small area of still water, typically one formed naturally'
};

module.exports = {
    items,
    search: item => new Promise(resolve => {
        setTimeout(() => {
            resolve(items[item]);
        }, 500);
    })
};
