module.exports = {
  Query: {
    greekGods: async (root,_,{ models }) => {
      try {
        const greekGods = await models.GreekGod.find()
        return greekGods;
      } catch (err) {
        throw err;
      }
    }
  },
};
