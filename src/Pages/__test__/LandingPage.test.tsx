import React from "react";
import { render, screen } from "@testing-library/react";
import LandingPage from "../LandingPage";
import { Provider } from "react-redux";
import store from "../../redux/store";

describe("<LandingPage/>", () => {
  beforeAll(() => {
    render(
      <Provider store={store}>
        <LandingPage />
      </Provider>
    );
  });

  it('should render Landing page "', () => {
    expect(screen.getByTestId("app-header")).toBeInTheDocument();
  });
});
