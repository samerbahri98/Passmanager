import CryptoJS from "crypto-js";

const salt = "salt";

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

const Hash = {
  encrypt: (text) => {
    let result = text;

    result = CryptoJS.AES.encrypt(result, "salt");
    result = JSON.stringify(result, getCircularReplacer());
    // for (let i = 0; i < 2; i++) {
    // }
    return result;
  },
  decrypt: (text) => {
    let result, bytes;
    console.log(typeof text)
    if (typeof text === "String") {
      result = text.json();
      bytes = text.json();
      // for (let i = 0; i < 2; i++) {

      // }
      bytes = CryptoJS.AES.decrypt(result, "salt");
      result = bytes.toString(CryptoJS.enc.Utf8);
    }
    return result;
  },
};

export default Hash;
