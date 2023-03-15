import "./index.css";

// 路徑引入
import './ch08-commonJS'

// npm 引入
import 'webpack'

// import "./ch03-basic.ts";
// import "./ch04-type_and_interface_and_emus.ts";
// import "./ch05-function";
// import "./ch06-class";
// import "./ch07-generics";



import "./ch08-commonJS";
const data = require('./ch08-commonJS') // 拿到 userName1
// require 是動態引入
if(true){
    // 這裡是可以使用的
    const data = require('./ch08-commonJS')
}


import "./ch08-esModules";
// 基本輸出
// import { userName, age } from './ch08-esModules'
// 進階輸出   ↓ 給個別名
import * as all from './ch08-esModules'
console.log(all);

// 進階輸出 預設輸出          ↓ 給個別名，如果參數有衝突
import dataES, {userName as name1, age, address} from './ch08-esModules'

console.log(dataES);
// import 是靜態引入，寫越上面越好



// const name1:string = 'Hi meow'
// console.log(name1);
