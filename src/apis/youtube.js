import axios from "axios";
const KEY = "AIzaSyBVNbF9dL4O8mvfKLbBSYN96h8xyJXSd6s";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
      part: 'snippet',
      maxResults: 5,
      key: KEY,
  },
});
