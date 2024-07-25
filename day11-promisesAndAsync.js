const messagePromiseResolve = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is the resolve message");
  }, 2000);
});

messagePromiseResolve
  .then((message) => {
    console.log("Resolved", message);
  })
  .catch((error) => {
    console.error("rejected", error);
  });

const messagePromiseReject = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("This message is rejected");
  }, 2000);
})
  .then((message) => {
    console.log("Resolved", message);
  })
  .catch((error) => {
    console.error("rejected", error);
  });

const fetchData1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetched data 1");
      resolve("Data from server 1");
    }, 1000);
  });

const fetchData2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetched data 2");
      resolve("Data from server 2");
    }, 2000);
  });

const fetchData3 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetched data 3");
      resolve("Data from server 3");
    }, 3000);
  });

// Chaining the promises
fetchData1()
  .then(() => {
    console.log(data1);
    return fetchData2();
  })
  .then(() => {
    console.log(data2);
    return fetchData3();
  })
  .then(() => {
    console.log(data3);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

async function getWeatherDetails() {
  const url =
    "https://meteostat.p.rapidapi.com/point/monthly?lat=52.5244&lon=13.4105&alt=43&start=2020-01-01&end=2020-12-31";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "d494ad86ffmsh4b7d5eb6e4836a5p1c1059jsnaa3b0b09e243",
      "x-rapidapi-host": "meteostat.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}


getWeatherDetails()