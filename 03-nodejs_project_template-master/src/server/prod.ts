// 佈署到正式環境的部分
import express, { Express } from "express";
import compression from "compression";
import path from "path";

export default function (app: Express) {
  app.use(compression());
  // 指定 dist 資料夾 ( npm run build 後的產物 )
  app.use(express.static(path.resolve(__dirname, "../../dist")));
  // 取得 dist/main.html
  app.get("/main", function (req, res, next) {
    res.sendFile("/main/main.html");
  });
  // 取得 distchatroom.html
  app.get("/chatroom", function (req, res, next) {
    res.sendFile("/chatroom/chatroom.html");
  });
}
