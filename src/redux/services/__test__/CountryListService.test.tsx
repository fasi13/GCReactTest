import React from "react";
import axios from "axios";
import { getCountryList } from "../CountryListService";
import { waitFor } from "@testing-library/dom";

const dummyCountryList = {
  data: [
    {
      name: {
        common: "Montenegro",
        official: "Montenegro",
        nativeName: {
          cnr: {
            official: "Црна Гора",
            common: "Црна Гора",
          },
        },
      },
      tld: [".me"],

      region: "Europe",
      subregion: "Southeast Europe",
      languages: {
        cnr: "Montenegrin",
      },

      landlocked: false,

      flag: "🇲🇪",
      maps: {
        googleMaps: "https://goo.gl/maps/4THX1fM7WqANuPbB8",
        openStreetMaps: "https://www.openstreetmap.org/relation/53296",
      },
      fifa: "MNE",
      car: {
        signs: ["SCG"],
        side: "right",
      },
      timezones: ["UTC+01:00"],
      continents: ["Europe"],

      startOfWeek: "monday",
      capitalInfo: {
        latlng: [42.43, 19.27],
      },
    },
  ],
};
describe("CountryServices", () => {
  beforeEach(() => {
    jest.spyOn(axios, "request").mockResolvedValue(dummyCountryList);
  });
  it('should return country list from the api request "', async () => {

    const resp = await getCountryList();

    waitFor(() => {
      expect(resp).toBeCalledWith(dummyCountryList);
    });
  });
});
