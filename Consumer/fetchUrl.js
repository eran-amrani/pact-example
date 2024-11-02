const axios = require("axios");

const fetchUrl = async ({ config, payload }) => {
  try {
    const host = `http://127.0.0.1:${config.port}`;
    const url = config.url[0] !== "/" ? `${host}/${config.url}` : `${host}${config.url}`;

    const res = await axios({
      url,
      method: config.method,
      data: payload,
      params: config.query,
      headers: config.headers
    });
    return res;
  } catch (err) {
    console.error(err);
    throw new Error(`Error from response: ${err?.body}`);
  }
};

module.exports = {
  fetchUrl
};
