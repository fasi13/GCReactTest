import { Select } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CountryListState } from "../redux/CountryList/CountryList.types";
import {
  fetchCountryStartAsync,
  setCountry,
} from "../redux/CountryList/CountryList.action";
import { fetchWeatherStartAsync } from "../redux/Weather/Weather.action";

const { Option } = Select;

const CountryList = () => {
  const dispatch = useDispatch();

  const { isFetching, countriesList, selectedCountry }: CountryListState =
    useSelector((state: any) => state.getCountryList);

  useEffect(() => {
    dispatch(fetchCountryStartAsync());
  }, [dispatch]);

  const onSelectHandler = (value: string) => {
    dispatch(setCountry(value));
  };

  useEffect(() => {
    if (selectedCountry) dispatch(fetchWeatherStartAsync(selectedCountry));
  }, [dispatch, selectedCountry]);

  return (
    <Select
      placeholder="Select Country"
      className="w-1/2"
      loading={isFetching}
      onChange={onSelectHandler}
      size="large"
      data-testid={"select-country"}
      virtual={false}
    >
      {countriesList.map((list: any) => (
        <Option
          key={list.name.official}
          data-testid={`id-${list.name.official}`}
          value={list.name.official}
        >
          <div className="flex gap-3">
            <div>{list.name.official}</div>
            <div>{list.flag}</div>
          </div>
        </Option>
      ))}
    </Select>
  );
};

export default CountryList;
