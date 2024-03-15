import { BaseURL } from "../utils/constants";

// Get all categories
export const getAllCategories = async () => {
    const url = `${BaseURL}` + `products/categories`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Error while fetching all categories');
    }

    return response.json();
};

// Get all products by category id
export const getAllProductsByCategory = async (id) => {
    const url = `${BaseURL}` + `products/category/${id}`;
    console.log(url);
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Error while fetching all products by categories');
    }
    
    return response.json();
};

// Get all products
export const getAllProducts = async () => {
    const url = `${BaseURL}` + `products`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Error while fetching all products');
    }

    return response.json();
};

// Get product details by product id
export const getProductDetailsById = async (id) => {
    const url = `${BaseURL}` + `products/${id}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Error while fetching product details');
    }

    return response.json();
};