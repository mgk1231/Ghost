const models = require('../../models');
// const tpl = require('@tryghost/tpl');
// const errors = require('@tryghost/errors');
// const allowedIncludes = [];

// const messages = {};

module.exports = {
    docName: 'newsletters',

    browse: {
        options: [
            'filter',
            'fields',
            'limit',
            'order',
            'page'
        ],
        permissions: () => true, //FIXME: move to database permissions
        query(frame) {
            return models.Newsletter.findPage(frame.options);
        }
    },

    add: {
        statusCode: 201,
        permissions: () => true, //FIXME: move to database permissions
        async query(frame) {
            return models.Newsletter.add(frame.data.newsletters[0], frame.options);
        }
    },

    edit: {
        headers: {},
        options: [
            'id',
        ],
        validation: {
            options: {
                id: {
                    required: true
                },
            }
        },
        permissions: () => true, //FIXME: move to database permissions
        async query(frame) {
            return models.Newsletter.edit(frame.data.newsletters[0], frame.options);
        }
    },
};
