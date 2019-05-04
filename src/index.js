import './bookmarks'

;(function () {
  // let client = new IpfsHttpClient();
  document.getElementById('submit').onclick = async function () {
    try {
    let res = await client.dag.put({
      data: 'foo'
    });
      console.warn(res);
    } catch (err) {
      alert('No fun: ' + err);
    }
  };
})()
