import './bookmarks'

import IpfsHttpClient from 'ipfs-http-client'

;(function () {
  let client = new IpfsHttpClient('localhost', 5001);
  document.getElementById('submit').onclick = function () {
    try {
       client.dag.put({ data: "foo" });
    } catch (err) {
      console.log(err.toString());
    }
  };

  console.log('hest:%o', client);
})()
