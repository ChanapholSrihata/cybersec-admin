const cypto = require("crypto-js");
const env = require("dotenv");

env.config();


const my_password = "demo";
//const my_key = "LovemeLovemycat";
const my_key = process.env.SECRET_KEY;


const password = crypto.AES.encrypto(my_password, my_key);
console.log('password ', password.toString());

const data = crypto.AES.decrypto(password, my_key);
console.log('data ', data.toString(crypto.enc.Utf8));