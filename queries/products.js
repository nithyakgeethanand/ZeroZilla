import { BaseURL } from "../utils/constants";

// Get all products
export const getAllProducts = async () => {
    const response = await fetch(`${BaseURL}`);
    if (!response.ok) {
        throw new Error('Error while fetching all products');
    }

    console.log("hola");
    console.log(response.json);
    return response.json();
};