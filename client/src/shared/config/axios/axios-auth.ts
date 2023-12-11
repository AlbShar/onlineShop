import axios from "axios";

const $host = axios.create({
    baseURL: process.env.URL
})

const $authHost = axios.create({
  baseURL: process.env.URL,
});

const authInterceprtor = (config: any) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config
}

$authHost.interceptors.request.use(authInterceprtor);

export {$host, $authHost}