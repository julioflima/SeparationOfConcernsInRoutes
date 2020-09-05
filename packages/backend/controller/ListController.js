

module.exports = {
  async index(request, response) {
    const lists = await connection('lists').select('*');

    return response.json(lists);
  },

  async create(request, response) {
    const { name } = request.body;
    const id = generateUniqueId(4);

    await connection('lists').insert({
      id,
      name,
    });
    return response.json({ id, name });0
  },

  async delete(request, response) {
    const id = request.headers.authorization;

    const list = await connection('lists').where('id', id).select('*').first();

    if (!list) {
      return response.status(404).json({ error: 'Was not found that list.' });
    } else if (list.id !== id) {
      return response.status(401).json({ error: 'Operation not permitted.' });
    } else {
      await connection('lists').where('id', id).delete();

      return response.status(200).json({ message: 'Table deleted.', table: list });
    }
  },
};
