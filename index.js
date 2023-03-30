import express from 'express'
import  fetch from  "node-fetch"
import cors from 'cors'
import crypto from 'crypto'
import request from 'request'

const  app=express()


app.use(express.json())
app.use(cors())

app.post("/stealthEX/Dave", async (req, res)=>{
    const {url}=req.body
    let response = await fetch(`${url}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    res.json(await response.json())
})

app.post("/changehero/Dave", async (req, res)=>{

    console.log(req.body)
    // const {from,to,amount}=req.body

    let response = await fetch(`https://api.changehero.io/v2/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': '46799cd819854116907d2a6f54926157',
        },
        body: JSON.stringify(req.body)
    });

    res.json(await response.json())

})

app.post("/simpleswap/Dave", async (req, res)=>{

    console.log(req.body)
    const {from,to,amount}=req.body

    let response = await fetch(`http://api.simpleswap.io/get_estimated?api_key=ae57f22d-7a23-4dbe-9881-624b2e147759&fixed=true&currency_from=${from}&currency_to=${to}&amount=${amount}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    console.log(response)
    res.json(await response.json())

})


app.post("/changelly/Dave", async (req, res)=>{

    const {from, to, amount}=req.body
    console.log(req.body)

    const privateKeyString = "308204be020100300d06092a864886f70d0101010500048204a8308204a40201000282010100b6f7638ac5b811561dc071820c7c764da95ddfb63dafb1f9b96f4d1577ae63f6c7010dd041b5bc314002f0a8536ea29c619de7487b3a98944607674b3905274c40f1f36cb58e9925c2c90846f40cf3f7d10983e01ab0354ded5de57bcac6dc31b47b0bac5f79c7e7947db9bc4a7e18e46a94f291c8055576e00825510731d5b89c5936c8d48106ff837fca0881b721f7c09a272bc316c74c8e56e0dfa69b0cdf3153b671a732506b043363443ff0677f615be06f4519ee07a130d5936e71c87761838296e667122ead027d72431ba8e0b75afe6249c5e4cf1152309e9eb392a8d4d02a6b84443801745731db6b548b7a392d4783c4e168a3a9f0235c84ebf7b902030100010282010029ecabf17b76befa359d08255d89136e9e35757283d603790e65938b2cbe58078ef80ddb3f834e1916ead58c2c79f866cef368b0b213ee2c639384b6b6dd18711f9c9143c2a2673340dbe1baa867636bd089569f7e5e0c08cc302cca5ddf8d4b1268f376cef5cfb99fcbe34862e55bfcd2f34855e1385fa9fa91c3433adbcf75b7821d6299f198edc7472da9fd401ab3f29887ca8e1105389351691ef2925a14b7a960c85d887f233feac28c5248cf8c20360bdcf86423fd0f18a9c7678ff3fac8b155f1a4d4e356260f336a8a94449a8a7fad36314f8005c23fd196a8f9d2aa57bf0bed3ae93ac4b095a2abc311eee8e6f44fefb6def929ca7e371af2685b1502818100e45e992dab2a73ca02855ee71ab2c8b6cbe5c356892ca2f6fba6e642fb7e75221b8f48574ea7419e33850e1938d6fbd16306a4e32d75b4f7d109523751694cd620214a0073a682c1ce9ed005c4d4fef212ac8f7b351c4772b32461e9555b22f7e1e67398d6666b7c34dff08426c8d144470ae60509cae038d558ce8a5236be9702818100cd1a7efa1353a0c5b42c0fb3e4477fba8cac7076aac21c1fd4a07558c629253f592304ab611a72daf24c562c27dcaf0d46751366840274438886b0ca3309008d73b4953d887a7e27dab38086864eff3071bd7daf5812b058de591c484f6c51d249561b5453b6529dc5e54a9ffaa6982726abaa3c51508701a31a43055932162f02818100b521e72316e9440fcd3215d4fe13222a02cd89c300685c15c4025c0e72c59988650d9f964837574f7093af5c07fe549b7e8ccd89b70bee6ec4e93cc1cd9bd4aaddaf29aff40af5195d960f6f13f0d10a160fb27a49e4d532bfae32ceccb9cda18916ad47637eb6f03c4c06cbfaab3b788954b69ef66668b40b5c35edf6499f9f02818100a82ca69b14c7c896f372017a269efdbb8fe740dbfc8de713ae7bd75c703782a41bc99be58e5c6a7ade9bfb387f82f34236587f0cdb074c1fa7cd911e6a9462109a24230eee5e4a1d11b58798467e75be5a34dedeac9fbe5b500dcf23f783c0df6564a64a11cdf8960793480a3f32e4a58d8ecaaa649e5be4dac108dd54d2bddf02818069e9b896d061a7449202370c9fe028c5a4a83890510861184c7d712e4749ff8d8185d0702d7894d2609b50cfd7d3fab44f84be6d2935904f136018123979e6cca03648d855cf53b658aead3144bd4debc48fb395fae656743851da0bd25c1a016284a0343149529f6aa5deeee5ea57f923064ecba9dfa093aaded8803070f32d";
    
    const privateKey = crypto.createPrivateKey({
      key: privateKeyString,
      format: 'der',
      type: 'pkcs8',
      encoding: 'hex'
    });
    
    const publicKey = crypto.createPublicKey(privateKey).export({
        type: 'pkcs1',
        format: 'der'
    });
    
    const message = {
        "jsonrpc": "2.0",
        "id": "test",
        "method": "getExchangeAmount",
        "params": {
           "from": from,
           "to": to,
           "amountFrom": amount
        }
     }
    
    const signature = crypto.sign('sha256', Buffer.from(JSON.stringify(message)), {
      key: privateKey,
      type: 'pkcs8',
      format: 'der'
    });
    
    const options = {
        'method': 'POST',
        'url': 'https://api.changelly.com/v2',
        'headers': {
          'Content-Type': 'application/json', 
          'X-Api-Key': crypto.createHash('sha256').update(publicKey).digest('base64'), 
          'X-Api-Signature': signature.toString('base64')
        },
        body: JSON.stringify(message)
      };
    
    request(options, async function (error, response) {
      if (error) throw new Error(error);
    //   console.log(response.body);
      const data=await JSON.parse(response.body)
      res.send(data.result[0])
    });

})

app.listen(3000,()=>{
    console.log("Server listening")
})

    // "start": "node index.js",
    // "dev": "nodemon index.js",

    