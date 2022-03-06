import { getCountryList } from "../services/CountryListService";
import { CountryListReducerTypes } from "./CountryList.types";

export const fetchCountryStart = () => ({
  type: CountryListReducerTypes.FETCH_COUNTRY_LIST_START,
});

export const fetchCountrySuccess = (countryListMap: any) => ({
  type: CountryListReducerTypes.FETCH_COUNTRY_LIST_SUCCESS,
  payload: countryListMap,
});

export const setCountry = (selectedCountry: any) => ({
  type: CountryListReducerTypes.SET_SELECTED_COUNTRY,
  payload: selectedCountry,
});

export const fetchCountryFailure = (errorMessage: string) => ({
  type: CountryListReducerTypes.FETCH_COUNTRY_LIST_FAILURE,
  payload: errorMessage,
});

export const fetchCountryStartAsync = () => {
  return (dispatch: any) => {
    const countryList = getCountryList();
    dispatch(fetchCountryStart());
    countryList
      .then((countryListMap) => {
        dispatch(fetchCountrySuccess(countryListMap));
      })
      .catch((error) => dispatch(fetchCountryFailure(error.message)));
  };
};
