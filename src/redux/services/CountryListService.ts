import axios from "axios";

export const getCountryList = async (): Promise<any> => {
  const { data } = await axios.request({
    method: "get",
    url: "https://restcountries.com/v3.1/all",
  });
  return data;
};
