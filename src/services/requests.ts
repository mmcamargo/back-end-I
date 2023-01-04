import { instance } from '.';
import { AxiosError } from 'axios';

const doPost = async (url: string, data: object) => {
	try {
		const response = await instance.post(url, data);

		return response.data;
	} catch (error) {
		if (error instanceof AxiosError) {
			return error.response?.data;
		}
	}
};

export { doPost };