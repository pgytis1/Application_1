import apiClient from './apiClient';

export const login = (email: string, password: string): Promise<{ jwt: string }> | undefined => apiClient
    .post('api/account/login', { email, password });

export const getMe = (): Promise<{ userName: string, password: string }> => apiClient
    .get('api/account/getMe');