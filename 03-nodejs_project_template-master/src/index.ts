import devServer from "./server/dev";
import prodServer from "./server/prod";
import express from "express";    // node.js 後端框架

import { name } from "@/utils";

const port = 3000;
// 啟動後端框架拿到內容
const app = express();

// 執行npm run dev本地開發 or 執行npm run start部署後啟動線上伺服器
if (process.env.NODE_ENV === "development") {
  devServer(app);
} else {
  prodServer(app);
}

console.log("server side", name);
// 啟動伺服器渲染在這個 port 上
app.listen(port, () => {
  console.log(`The application is running on port ${port}.`);
});
