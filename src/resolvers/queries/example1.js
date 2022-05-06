module.exports = async (_, {}, { models }) => {
  return await models.Example1.find();
};
