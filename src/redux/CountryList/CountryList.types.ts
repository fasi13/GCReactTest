export enum CountryListReducerTypes {
  FETCH_COUNTRY_LIST_START = "FETCH_COUNTRY_LIST_START",
  FETCH_COUNTRY_LIST_SUCCESS = "FETCH_COUNTRY_LIST_SUCCESS",
  FETCH_COUNTRY_LIST_FAILURE = "FETCH_COUNTRY_LIST_FAILURE",
  SET_SELECTED_COUNTRY = "SET_SELECTED_COUNTRY"
}
export interface CountryListState {
  isFetching: boolean;
  selectedCountry?: string;
  countriesList?: any;
  errorMessage?: string;
}

export interface CountryListActionType {
  type: string;
  payload: {
    country: string;
  };
}
