import axios from "axios";
export const getWeather = async (country: string): Promise<any> => {
  const apiKey: string = "f2be3efd5a4125349a44ac13f887856a";

  const { data } = await axios.request({
    method: "get",
    url: `https://api.openweathermap.org/data/2.5/weather/?q=${country}&units=metric&appid=${apiKey}`,
  });
  return data;
};
