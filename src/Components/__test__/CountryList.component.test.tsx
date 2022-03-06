import React from "react";
import { render, screen } from "@testing-library/react";
import CountryList from "../CountryList.component";
import { Provider } from "react-redux";
import store from "../../redux/store";

describe("<CountryList/>", () => {
  beforeAll(() => {
    render(
      <Provider store={store}>
        <CountryList />
      </Provider>
    );
  });

  it('should render countryList component "', () => {
    expect(screen.getByText("Select Country")).toBeInTheDocument();
  });
});
