if (process.env["NODE_ENV"] !== "production") {
  require("dotenv").config();
}

function env(key) {
  return process.env[key];
}

module.exports = {
  env,
};
