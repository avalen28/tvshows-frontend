import axios from "axios";

class ShowService {
  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_BACKEND_URL}/shows`,
    });
  }

  // Iteration 2: use this method
  getShows() {
    return this.api
      .get("/")
      .then(({ data }) => data)
      .catch((err) => console.error(err));
  }

  // Iteration 3: create method
  getShow(showId) {
    return this.api
      .get(`/${showId}`)
      .then(({ data }) => data)
      .catch((err) => console.error(err));
  }

  getDeleteShow(showId) {
    return this.api.delete(`/${showId}`).catch((error) => console.error(error));
  }

  // Iteration 4: create method

  createNewShow(newShow) {
    return this.api
      .post("/", newShow)
      .then(({ data }) => data)
      .catch((error) => console.error(error));
  }

  // Iteration 5: create method
  updateShow(showUpdatedId, body) {
    return this.api
      .put(`/${showUpdatedId}`, body)
      .catch((error) => console.error(error));
  }
}

const showService = new ShowService();

export default showService;
