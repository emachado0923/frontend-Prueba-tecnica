import axios from 'axios';

const API = 'http://localhost:3000';
export const getProducts = async () => {
    return await axios.get(`${API}/products`);

}

export const newProduct = async (product: any) => {
    return await axios.post(`${API}/products`, product);
}

export const deleteProduct = async (id: string) => {
    return await axios.delete(`${API}/products/${id}`);
}

export const updateProduct = async (id: string, product: any) => {
    return await axios.put(`${API}/products/${id}`, product);
}