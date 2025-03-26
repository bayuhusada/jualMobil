import axios from "axios";

export const fetchProducts = async () => {
   const setResponse = await axios.get ("http://127.0.0.2:3005/products")
  return setResponse
}
export const editProducts = async (id, data) => {
   const setResponse = await axios.put(`http://127.0.0.2:3005/products/${id}`, data)
  return setResponse
}
export const createProducts = async (product) => {
   const setResponse = await axios.post ("http://127.0.0.2:3005/products", product)
  return setResponse
}
export const deleteProducts = async (id) => {
   const setResponse = await axios.delete (`http://127.0.0.2:3005/products/${id}`)
  return setResponse
}