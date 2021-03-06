const BaseModel = require('./baseModel');

class Account extends BaseModel {
    static get tableName() {
        return 'accounts';
    }

    auto_generated_id() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'Object',
            properties: {
                id: { type: 'string' },
                name: { type: 'string' },
                createdAt: {type: 'date' },
                updatedAt: {type: 'date' }
            }
        };
    }
}

module.exports = Account;
