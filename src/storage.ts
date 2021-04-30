import axios, { AxiosInstance } from 'axios';

class Storage {
    private instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({
            baseURL: "http://localhost:8000",
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    post = async (url: string, data: any, headers = {}) => {
        try {
            const response = await this.instance.post(url, data, {
                headers,
            });
            return response.data;
        } catch(error) {
            console.log(error);
            return error;
        }
    }
}

export default Storage;