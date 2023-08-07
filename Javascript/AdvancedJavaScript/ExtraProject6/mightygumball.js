//onload handler that gets invoked when html is fully loaded
window.onload = function () {
  let url = "http://gumball.wickedlysmart.com"; //tell browser where to get data
  let request = new XMLHttpRequest(); //USE THIS TO INTERACT WITH SERVERS
  request.open("GET", url); //tell the request which url to use and GEt request is the standard of retrieving http data
  request.onload = function () {
    //when broswer gets an answer from the remote web service, it calls this function
    if (request.status == 200) {
      //handler check if return code=200, then it will do something with the data
      alert("Data received!");
    }
  };
  request.send(null); //sends the request to the server and we pass null if we are not sending any data to the remote service
};

// function updateSales(responseText) {
    function updateSales(sales){
  let salesDiv = document.getElementById("sales");
  // salesDiv.innerHTML = responseText;
//   let sales = JSON.parse(responseText); //convert it to a JS object
  for (let i = 0; i < sales.length; i++) {
    //iterate through each item in an array
    let sale = sales[i];
    let div = document.createElement("div"); //for each item, create a div and give it
    div.setAttribute("class", "salesItem"); //saleItem class used by css
    div.innerHTML = sale.name + " sold " + sale.sales + " gumballs";
    salesDiv.appendChild(div);
  }
}
