import axios, { CreateAxiosDefaults } from "axios";
const apiClient = (data: CreateAxiosDefaults) => axios.create(data);
export default apiClient;
