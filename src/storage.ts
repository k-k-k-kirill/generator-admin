import axios, { AxiosInstance } from 'axios';

class Storage {
    private instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({
            baseURL: "http://localhost:8000",
        });
    }

    async post(url: string, data: any) {
        try {
            const response = await this.instance.post(url, data);
            return response.data;
        } catch(error) {
            console.log(error);
            return error;
        }
    }
}

export default new Storage();