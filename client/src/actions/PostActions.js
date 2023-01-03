import * as api from '../api/index.js'


export async function createNewPost(post) {
    try {
      const { data } = await api.createPost(post);
      console.log(data)
      return data
    } catch (error) {
      console.log(error);
      return error
    }
};