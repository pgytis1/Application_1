import apiClient from './apiClient';

export const login = (email: string, password: string) => (): Promise<{ jwt: string }> | undefined => apiClient
    .post('api/account/login', { email, password });

export const getBooks = () => () => apiClient
    .get('api/book');