import { createServer, Response } from 'miragejs';
import { API_URL } from 'constants/urls';

export default function makeMirageServer() {
  createServer({
    routes() {
      this.isAuthenticated = false;
      this.urlPrefix = API_URL;

      this.post('/send_magic_link', (schema, request) => {
        console.log(
          'send_magic_link',
          'http://localhost:3000/confirmation/OTP/TOKEN',
        );

        return {
          id: 1,
        };
      });

      this.post('/confirm_magic_link', (schema, request) => {
        const body = JSON.parse(request.requestBody);
        this.isAuthenticated = true;

        if (body.otp === 'OTP' && body.token === 'TOKEN') {
          return {
            id: 1,
          };
        } else {
          return new Response(401, { message: 'Invalid OTP' });
        }
      });

      this.post('/surveys', (schema, request) => {
        const attrs = JSON.parse(request.requestBody)
        
        return {
          id: 1,
          ...attrs,
        }
      });

      this.get(`${API_URL}/current_user`, (schema, request) => {
        if (this.isAuthenticated) {
          return {
            id: 1,
          }
        } else {
          return new Response(401, { message: 'Not authenticated' });
        }
      });
    },
  });
}
