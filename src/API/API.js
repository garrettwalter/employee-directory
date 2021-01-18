import axios from "axios";
const URL = "https://randomuser.me/api/";

export default {
  search: function(query) {
    return axios.get(URL);
  }
};
