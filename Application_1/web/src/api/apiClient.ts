import * as superagent from 'superagent';
import * as security from '../utils/security';

const domain = 'http://localhost:50000/';

type method = 'GET' | 'POST' | 'PUT' | 'DELETE';

const request = async (method: method, url: string, data?: {}) => {
    const jwt = security.getToken();
    switch (method) {
        case 'GET':
            return superagent.get(domain + url).set('Authorization', `Bearer ${jwt}`).then(res => res.body);
        case 'POST':
            return superagent.post(domain + url).send(data).set('Authorization', `Bearer ${jwt}`).then(res => res.body);
        case 'PUT':
            return superagent.put(domain + url).send(data).set('Authorization', `Bearer ${jwt}`).then(res => res.body);
        case 'DELETE':
            return superagent.delete(domain + url).send(data).set('Authorization', `Bearer ${jwt}`).then(res => res.body);
        default:
            return;
    }
};

export default {
    get: (url: string) => request('GET', url),
    post: (url: string, data?: {}) => request('POST', url, data),
    put: (url: string, data?: {}) => request('PUT', url, data),
    delete: (url: string) => request('DELETE', url)
};