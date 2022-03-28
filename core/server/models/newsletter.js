const ghostBookshelf = require('./base');

const Newsletter = ghostBookshelf.Model.extend({
    tableName: 'newsletters'
});

const Newsletters = ghostBookshelf.Collection.extend({
    model: Newsletter
});

module.exports = {
    Newsletter: ghostBookshelf.model('Newsletter', Newsletter),
    Newsletters: ghostBookshelf.collection('Newsletters', Newsletters)
};
