import axios from "axios";
import { useState, useEffect } from "react";
import { prodDataType, blogType } from "./dummydata";

const url = "https://cdn.jsdelivr.net/gh/repo-by-anish/data_for_DFI@a8e6d072596e5645a232f7e52a17176ca891571e/db.json";

export const fetchData = async (url: string) => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export function useData() {
  const [products, setProducts] = useState<prodDataType[]>([]);
  const [blogs, setBlogs] = useState<blogType[]>([]); // Fix type here
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        setIsLoading(true);
        const data = await fetchData(url);
        setProducts(data.products);
        setBlogs(data.blogs);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataFromApi();
  }, []);
  return { products, blogs, isLoading };
}

export const screenWidth = window.innerWidth;
