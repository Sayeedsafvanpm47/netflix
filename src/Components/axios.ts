import axios from "axios";
import { baseUrl } from "../constants/Constants";

const instance = axios.create({
          baseURL : baseUrl,
          headers:{
                    'Content-Type': "application/json"
          },
})
export default instance