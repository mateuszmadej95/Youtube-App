import axios from "axios";

const KEY = "AIzaSyBcb-djwbOZOERlQwOM6snD12lXdBc0GVQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { maxResults: 5, part: "snippet", type: "video", key: KEY },
});
