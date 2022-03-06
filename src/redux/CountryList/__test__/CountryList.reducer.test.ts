import getCountryListReducer from "../CountryList.reducer";

describe("countryList Reducer", () => {
  it("should return the initial state when passed empty action ", () => {
    const initialState = undefined;
    const action = { type: "" };
    const result = getCountryListReducer(initialState, action);
    expect(result).toEqual({
      selectedCountry: "",
      countriesList: [],
      errorMessage: "",
      isFetching: false,
    });
  });
  it("should return the selectedCountry with value state when passed with payload and action ", () => {
    const initialState = undefined;
    const action = {
      payload: "Bolivarian Republic of Venezuela",
      type: "SET_SELECTED_COUNTRY",
    };
    const result = getCountryListReducer(initialState, action);
    expect(result).toEqual({
      selectedCountry: "Bolivarian Republic of Venezuela",
      countriesList: [],
      errorMessage: "",
      isFetching: false,
    });
  });
});
