$(document).ready(function() {

    const POLL_INTERVAL = 5000;
  
    const poll = ({ fn, validate, interval, maxAttempts }) => {
        //console.log('Start poll...');
  
        const executePoll = async (resolve, reject) => {
          //console.log('- poll');
          const result = await fn();
            setTimeout(executePoll, interval, resolve, reject);
  
        };
  
        return new Promise(executePoll);
      };
  
      const getData = async () => {
        fetch('https://api.teztools.io/v1/prices')
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          appendData(data);
        })
        .catch(function (err) {
          console.log(err);
        });
  
        return 0;
      };
  
      const validateData = async (data) => {
        return 0;
      };
  
      const pollForData = poll({
        fn: getData,
        validate: validateData,
        interval: POLL_INTERVAL,
      })
        .then(user => console.log(user))
        .catch(err => console.error(err));
  
    function compareStrings(a, b) {
        // Assuming you want case-insensitive comparison
        a = a.toLowerCase();
        b = b.toLowerCase();
  
        return (a < b) ? -1 : (a > b) ? 1 : 0;
    }
  
    function numberWithCommas(x) {
      var parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
  }
  
    function appendData(data) {
      var htmlContent = '<div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">';
      var contracts = data.contracts.sort(function(a, b) { return compareStrings(a.symbol, b.symbol)});

      var singleTokens = document.getElementsByClassName('tt-token');
  
      for (var i = 0; i < contracts.length; i++) {
          var contract = data.contracts[i];
          var ratio = numberWithCommas(Math.round(((1 / contract.currentPrice) + Number.EPSILON) * 10000) / 10000);
          var price = numberWithCommas(Math.round((contract.currentPrice + Number.EPSILON) * 10000000) / 10000000);
  
          var tokenAddress = `${contract.tokenAddress}_${contract.tokenId}`;
          var tezpool = numberWithCommas(Math.round(contract.tezPool + Number.EPSILON));
          var tokenpool = numberWithCommas(Math.round(contract.tokenPool + Number.EPSILON));

          var content = 
          `<div class="col">
            <div class="card"> 
                <div class="card-header pt-5 pb-5 text-center">
                    <h5>${contract.symbol}</h5>
                    <h5>${price} ꜩ</h5>
                    <div class="mt-2">
                        <medium>1 ꜩ gets <strong>${ratio}</strong> ${contract.symbol}</medium>
                    </div>
                    <div class="mt-2">
                        <small>LP ${tezpool} ꜩ / ${tokenpool} ${contract.symbol}</small>
                    </div>
                </div>
                <div class="card-body text-center">
                    <div class="row">
                        <div class="col-6 text-end">
                            <a class="btn btn-sm btn-outline-success" href="https://quipuswap.com/?from=tez&amp;to=${tokenAddress}" target="_blank">BUY</a>
                        </div>
                        <div class="col-6 text-start">
                            <a class="btn btn-sm btn-outline-danger" href="https://quipuswap.com/?from=${tokenAddress}&amp;to=tez" target="_blank">SELL</a>
                        </div>
                    </div>
                </div>
            </div>
          </div>`

          if (singleTokens != undefined)
          {
              for(let t of singleTokens) {
                var tokenfq = t.innerHTML.split(':');
                var add = tokenfq[0];
                var id = tokenfq[1];
  
                if (add == contract.tokenAddress && id == contract.tokenId)
                {
                    t.innerHTML = content;
                }
              }
          }
  
          htmlContent += content;
      }
  
      htmlContent += '</div></div>';
      var tokendata = document.getElementById('tokens');
      tokendata.innerHTML = '';
      tokendata.innerHTML = htmlContent;
  
      var blockData = document.getElementById('blockdata');
      blockData.innerHTML = '';
      var div = document.createElement('span');
      var lastBlock = data.block.substr(data.block.length - 10)
      var date = new Date(data.timestamp);
      div.innerHTML = `...${lastBlock} found at ${date.toLocaleTimeString()}<br/>`;
      blockData.appendChild(div);

      var contractCount = document.getElementById('contractcount');
      contractCount.innerHTML = '';
      var s = document.createElement('span');
      s.innerHTML = `Found ${data.contracts.length} contracts`
      contractCount.appendChild(s);
    }
  
    window.setTimeout(function () {
      window.location.reload();
    }, 1800000);
  });
  
