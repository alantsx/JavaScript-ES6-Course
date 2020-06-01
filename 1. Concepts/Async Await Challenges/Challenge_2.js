import axios from 'axios';

class Api {
    static async getUserFromGithub(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch {
            console.log('Usuário não existe');
        }
    }
}

Api.getUserFromGithub('sor-alan');
Api.getUserFromGithub('sor-alan1234');
