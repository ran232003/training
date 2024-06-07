const fetch = require("node-fetch");
const test = async () => {
  const res = await fetch("https://swapi.dev/api/people/?page=1");
  console.log(res);
};
test();
