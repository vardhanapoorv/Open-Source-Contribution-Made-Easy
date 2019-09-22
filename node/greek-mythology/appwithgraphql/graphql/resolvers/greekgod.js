const GreekGod = require('../../models/greekgod');

module.exports = {
    greekGods: async () => {
        try {
            const greekGods = await GreekGod.find()
            return greekGods;
        } catch (err) {
            throw err;
        }
    }
};