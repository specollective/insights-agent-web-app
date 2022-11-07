import { createServer } from 'miragejs';
import { API_URL } from 'constants/urls';

export default function () {
  createServer({
    routes() {
      this.isAuthenticated = false;
      this.urlPrefix = API_URL;

      this.post('/send_magic_link', (schema, request) => {
        console.log('send_magic_link');

        return {
          id: 1,
        };
      });

      this.post('/confirm_magic_link', (schema, request) => ({
        id: 1,
      }));

      this.post('/surveys', (schema, request) => {
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
