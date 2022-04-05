const express = require("express");

// OpenseaScraper Options
// const options = {
//   debug: false,
//   logs: false,
//   sort: true,
//   browserInstance: undefined,
// };

const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(80, () => {
  console.log("listening on 80");
});

app.get("/forward", function (req, res) {
  res.redirect(req.query["go"]);
});

// app.get("/api/klaynft", function (req, res) {
//   // 쉽팜의 땅크기별, 양레어도별 데이터를 10분 단위로 크롤링해서 객체로 저장하여 send
//   let small_pasture_url =
//     "https://opensea.io/collection/sheepfarm?search[sortAscending]=true&search[sortBy]=PRICE&search[stringTraits][0][name]=Pasture%20Capacity&search[stringTraits][0][values][0]=3";
//   let mid_pasture_url =
//     "https://opensea.io/collection/sheepfarm?search[sortAscending]=true&search[sortBy]=PRICE&search[stringTraits][0][name]=Pasture%20Capacity&search[stringTraits][0][values][0]=4";
//   let big_pasture_url =
//     "https://opensea.io/collection/sheepfarm?search[sortAscending]=true&search[sortBy]=PRICE&search[stringTraits][0][name]=Pasture%20Capacity&search[stringTraits][0][values][0]=5";
//   let normal_lamb_url =
//     "https://opensea.io/collection/sheepfarm?search[sortAscending]=true&search[sortBy]=PRICE&search[stringTraits][0][name]=Rare&search[stringTraits][0][values][0]=Normal";
//   let rare_lamb_url =
//     "https://opensea.io/collection/sheepfarm?search[sortAscending]=true&search[sortBy]=PRICE&search[stringTraits][0][name]=Rare&search[stringTraits][0][values][0]=Rare";
//   let epic_lamb_url =
//     "https://opensea.io/collection/sheepfarm?search[sortAscending]=true&search[sortBy]=PRICE&search[stringTraits][0][name]=Rare&search[stringTraits][0][values][0]=Epic";

//   //   const basicInfo = await OpenseaScraper.basicInfo(sheepfarm);
//   let small_pasture_data = new Promise(function (resolve, reject) {
//     OpenseaScraper.offersByUrl(small_pasture_url, options);
//   });
//   let mid_pasture_data = OpenseaScraper.offersByUrl(mid_pasture_url, options);
//   let big_pasture_data = OpenseaScraper.offersByUrl(big_pasture_url, options);
//   let normal_lamb_data = OpenseaScraper.offersByUrl(normal_lamb_url, options);
//   let rare_lamb_data = OpenseaScraper.offersByUrl(rare_lamb_url, options);
//   let epic_lamb_data = OpenseaScraper.offersByUrl(epic_lamb_url, options);

//   small_pasture_data.then(res.send(small_pasture_data));

//   console.log("ok");
// });
