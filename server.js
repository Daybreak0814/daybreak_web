const express = require("express");


const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");

app.use(express.static(__dirname + "/public"));

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/image", (req, res) => {
  const url = req.query["go"];
  // res.render('image', url);
  // const url = "testurl";
  res.render('image', { url });
  // res.send(req.params);
  // res.send(url);
});

// app.post('/image', (req, res) => {
//   const { imageurl } = req.body;
//   // res.send(`OK ${imageurl}`);
//   res.render('image', { imageurl });

// });

app.listen(3000, () => {
  console.log("listening on 3000");
});

app.get("/forward", function (req, res) {
  res.redirect(req.query["go"]);
});

/*
    // E2 stats

    async function getdata() {
      const res = await fetch('https://port-0-cors-anywhere-fao2flbzxeqo1.gksl2.cloudtype.app/https://r.earth2.io/landing/metrics');

      return await res.json();

    }

        getdata().then(r => {

      const $esncsum = document.querySelector("#esncsum");
      const $essenceburn = document.querySelector("#essenceburn");
      const $etherclaim = document.querySelector("#etherclaim");
      $esncsum.textContent = r.esnc_sum;
      $essenceburn.textContent = r.esnc_burned_24hrs;
      $etherclaim.textContent = r.ethr_claimed_24hrs;
    });


        //E2 game activity

    async function getactivity() {
      const res = await fetch('https://cors-anywhere.herokuapp.com/https://r.earth2.io/activities');

      return await res.json();

    };

    getactivity().then(r => {
      console.log(r);
    });
    */

