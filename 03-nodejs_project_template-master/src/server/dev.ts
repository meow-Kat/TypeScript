import webpack from "webpack";
// nodejs 啟用會有 middleware 功能
import webpackDevMiddleware from "webpack-dev-middleware";
// ↓ 搭配 server 編譯
import { Express } from "express";

export default function (app: Express) {
  // 引入 webpack
  const config = require("../../webpack.config.js");
  // 處理 compiler 後
  const compiler = webpack(config);

  app.get("/main", function (req, res, next) {
    res.redirect("/main/main.html");
  });

  app.get("/chatRoom", function (req, res, next) {
    res.redirect("/chatRoom/chatRoom.html");
  });
  // 伺服器啟動執行 middleware
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
    })
  );
}