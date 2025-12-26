import APIServer from "./api.js";
window.addEventListener("DOMContentLoaded", () => {
  const airport = document.querySelector(".airport");
  const api = new APIServer("https://airportgap.com/api/airports");

  if (!api.template) {
    console.error("Template not found. Ensure the DOM is fully loaded.");
    return;
  }

  ///--------------------------------------------------------
  // Fetch Data from API Airports.
  ///--------------------------------------------------------
  const loadButton = document.querySelector(".loadButton");
  api
    .fetchData()
    .then((data) => {
      api.loadingAirportsInit(airport, data);
    })
    .catch((error) => {
      airport.innerHTML = `<p>Error ${error} loading airport data.</p>`;
    });

  loadButton.addEventListener("click", (event) => {
    event.preventDefault();
    const searchInput = document.getElementById("searchInput").value.trim();
    api
      .fetchData(`/${searchInput}`)
      .then((data) => {
        api.loadSearchedAirport(airport, data);
      })
      .catch((error) => {
        airport.innerHTML = `<p>Error ${error} loading airport data.</p>`;
      });
  });
});
