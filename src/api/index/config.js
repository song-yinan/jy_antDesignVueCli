import { GET, POST, JSONP } from "../axiosConfig";
import { config } from "@root/project_config";


//查询案件
export const listAllByPage = data =>
  GET(Claim + "/dynamicLabel/listAllByPage", data);