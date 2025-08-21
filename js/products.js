const API_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json"; 


document.addEventListener("DOMContentLoaded", () => {
  getJSONData(API_URL).then(resultObj => {
    if (resultObj.status === "ok") {
      showProducts(resultObj.data.products);
    }
  });
});

function showProducts(products) {
  let htmlContentToAppend = "";

  products.forEach(product => {
    htmlContentToAppend += `
      <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="text-danger fw-bold">USD ${product.cost}</p>
            <p class="card-text">${product.description}</p>
            <small class="text-muted">Vendidos: ${product.soldCount}</small>
          </div>
        </div>
      </div>
    `;
  });

  document.getElementById("products-container").innerHTML = htmlContentToAppend;
}


