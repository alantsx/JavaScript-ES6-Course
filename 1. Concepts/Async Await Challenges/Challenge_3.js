import axios from 'axios';

class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response);
        } catch {
            console.log('Repositório não existe');
        }
    }
}

Github.getRepositories('sor-alan/JavaScript-ES6-Course');
Github.getRepositories('sor-alan/asasasa');
