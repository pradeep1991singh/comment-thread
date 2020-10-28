import request from '../../services/request'
const requestClient = request();

class CommentsApi {
  __handleError (error) {
    console.log(error);
    throw error
  }

  async getAll () {
    try {
      const response = await requestClient.get('/comment');
      return response.data.data
    } catch (error) {
      this.__handleError(error);
    }
  }

  async get (id) {
    try {
      const response = await requestClient.get(`/comment/${id}`);
      return response.data.data
    } catch (error) {
      this.__handleError(error);
    }
  }

  async create (payload) {
    try {
      const response = await requestClient.post('/comment', payload);
      return response.data.data
    } catch (error) {
      this.__handleError(error);
    }
  }
}

export default new CommentsApi();
