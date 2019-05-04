import './bookmarks'

import IpfsHttpClient from 'ipfs-http-client'

;(function () {
  // ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["*"]
  let client = new IpfsHttpClient('localhost', 5001);
  document.getElementById('submit').onclick = function () {
    try {
       //TODO: looks like dht needs a ipns adresss?
       client.dht.put("foo", "bar", function (err) {
         console.log("err :", err);

         client.dht.get("foo", function (err2, value2) {
           console.log("err2 :", err2)
           console.log("value2:" , value2); 
          });
       });
     } catch (err) {
      console.log("OO NOEZ:", err.toString());
    }
  };

  console.log('hest:%o', client);
})()
