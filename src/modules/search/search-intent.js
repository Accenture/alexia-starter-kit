const dictionary = require('./dictionary');

/**
 * Register SearchIntent
 * Example invocation 1:
 *      - 'Alexa, ask <my-app-name> what is <Item>'
 *
 * Example invocation 2:
 *      - 'Alexa, start <my-app-name>'
 *      - 'What is <item>?'
 */
module.exports = app => {
    app.customSlot('Item', Object.keys(dictionary.items));

    const utterances = [
        'Search for {item:Item}',
        'What is {item:Item}',
        'Describe me {item:Item}'
    ];

    app.intent('SearchIntent', utterances, (slots, attrs, data, done) => {
        if(!slots.item) {
            done('I did not understand your search item');
            return;
        }

        dictionary
        .search(slots.item)
        .then(result => {
            if(result) {
                done(`${slots.item} is ${result}`);
            } else {
                done(`No match found for ${slots.item}`);
            }
        });
    });
};
