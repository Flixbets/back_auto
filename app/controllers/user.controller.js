const db = require("../models");
var request = require('request-promise');

exports.createUser = async (req, res) => {
  const list_data = {    
      agentUsername: "fm",
      key: "m37kwLb5Fy7nIGHoIbb9x",
      username: "fmninemb01",
      name:"tester",
      password: "aa123456",
      web: "fookbet"
  }
  let options = {
    method: 'POST',
    uri: 'https://api.ambexapi.com/api/v1/ext/createUser/64097419F8902BFF8FFCA4DD/fm',
    body: list_data,
    json: true
  };
  await request(options).then(function (data) {
    console.log(data);
    res.send(data);

  })
  .catch(function (err) {
    console.log(err);
    res.send(err);
  });

};