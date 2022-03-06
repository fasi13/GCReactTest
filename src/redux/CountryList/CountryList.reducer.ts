import {
  CountryListState,
  CountryListReducerTypes,
  CountryListActionType,
} from "./CountryList.types";

const initState: CountryListState = {
  isFetching: false,
  selectedCountry: "",
  errorMessage: "",
  countriesList: [],
};

const getCountryListReducer = (
  state = initState,
  action: any
): CountryListState => {
  switch (action.type) {
    case CountryListReducerTypes.FETCH_COUNTRY_LIST_START:
      return {
        ...state,
        isFetching: true,
      };
    case CountryListReducerTypes.FETCH_COUNTRY_LIST_SUCCESS:
      const payload = (action as CountryListActionType).payload;
      return {
        ...state,
        isFetching: false,
        countriesList: payload,
      };
    case CountryListReducerTypes.SET_SELECTED_COUNTRY:
      return {
        ...state,
        selectedCountry: action.payload,
      };

    case CountryListReducerTypes.FETCH_COUNTRY_LIST_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: "Error Message",
      };

    default:
      return state;
  }
};

export default getCountryListReducer;
