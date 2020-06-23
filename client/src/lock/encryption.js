import CryptoJS from "crypto-js"
const encryption = {
  encrypt : (message,salt) => CryptoJS.AES.encrypt(JSON.stringify({message}),salt).toString(),
  decrypt : (message,salt) => JSON.parse(CryptoJS.AES.decrypt(message,salt).toString(CryptoJS.enc.Utf8)).message ,
};

export default encryption