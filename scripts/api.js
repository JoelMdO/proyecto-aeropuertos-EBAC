const axios = window.axios;

class APIServer {
  constructor(
    baseURL,
    token = null,
    template = document.getElementById("airport-card-template"),
    node = template ? template.content.cloneNode(true) : null,
    fragment = document.createDocumentFragment()
  ) {
    if (!template) {
      console.error("Template element not found. Check the DOM structure.");
    }
    if (!node) {
      console.error(
        "Failed to clone the template. Ensure the template structure is correct."
      );
    }

    this.baseURL = baseURL;
    this.token = token;
    this.template = template;
    this.node = node;
    this.fragment = fragment;
  }
  async fetchData(path = "") {
    try {
      //
      const url = this.baseURL + path;
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });
      console.log("response", response);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  updateTemplate(airport) {
    const node = this.template ? this.template.content.cloneNode(true) : null;

    if (!node) {
      console.error(
        "Failed to clone the template. Ensure the template exists."
      );
      return null;
    }

    try {
      const countryElement = node.querySelector(".template-airport_country");
      const timezoneElement = node.querySelector(".template-airport_timezone");
      const icaoElement = node.querySelector(".airport-card_table-icao");
      const iataElement = node.querySelector(".airport-card_table-iata");
      const nameElement = node.querySelector(".airport-card_table-name");
      const cityElement = node.querySelector(".airport-card_table-city");

      if (
        !countryElement ||
        !timezoneElement ||
        !icaoElement ||
        !iataElement ||
        !nameElement ||
        !cityElement
      ) {
        console.error("One or more elements are missing in the template.", {
          countryElement,
          timezoneElement,
          icaoElement,
          iataElement,
          nameElement,
          cityElement,
        });
        return null;
      }

      countryElement.textContent = airport.attributes.country;
      timezoneElement.textContent = `Timezone: ${airport.attributes.timezone}`;
      icaoElement.textContent = airport.attributes.icao;
      iataElement.textContent = airport.attributes.iata;
      nameElement.textContent = airport.attributes.name;
      cityElement.textContent = airport.attributes.city;

      return node;
    } catch (error) {
      console.error("Error updating template: ", error);
      return null;
    }
  }

  loadingAirportsInit(airport, data) {
    console.log("data at loading", data);
    console.log("data at loading1", data.data);

    data.data.forEach((dat) => {
      const newNode = this.updateTemplate(dat);
      this.fragment.appendChild(newNode);
    });
    airport.appendChild(this.fragment);
  }

  loadSearchedAirport(airport, data) {
    airport.innerHTML = "";

    const newNode = this.updateTemplate(data.data);

    if (newNode) {
      airport.appendChild(newNode);
    } else {
      console.error(
        "Failed to load searched airport. Template update returned null."
      );
    }
  }
}

export default APIServer;
