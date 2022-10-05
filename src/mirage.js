import { createServer } from 'miragejs';
import { API_URL } from 'constants/urls';

export default function () {
  createServer({
    routes() {
      this.post(`${API_URL}/send_magic_link`, (schema, request) => ({
        id: 1,
      }));

      this.post(`${API_URL}/confirm_magic_link`, (schema, request) => ({
        id: 1,
      }));

      this.post(`${API_URL}/surveys`, (schema, request) => {
        const attrs = JSON.parse(request.requestBody)
        
        return {
          id: 1,
          ...attrs,
        }
      });

      this.get(`${API_URL}/current_user`, (schema, request) => ({
        id: 1,
      }));
    },
  });
}