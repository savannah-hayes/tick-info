import { API_URL } from "../utils/urls";

export const displayCities = (setRiskAreas) => {
  fetch(API_URL("cities"))
    .then((response) => response.json())
    .then((citiesData) => setRiskAreas(citiesData.response))
    .catch((error) => console.log(error))
};