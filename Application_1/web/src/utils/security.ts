let token: string | null = null;

export const getToken = () => {
    if (!token) {
        token = sessionStorage.getItem('.jwt');
    }

    return token;
};

export const setToken = (value: string) => {
    sessionStorage.setItem('.jwt', value);
};

export default {
    getToken,
    setToken
};