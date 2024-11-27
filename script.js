let RedirectButton = document.getElementById("redirect");

// ხსნის ახალ ტაბში
RedirectButton.addEventListener("click", () => {
  location.href = "https://www.reeducate.space";
});

// ხსნის იმავე ტაბში
RedirectButton.addEventListener("click", () => {
  window.open("https://www.reeducate.space");
});

// https://dummyjson.com/products
// როგორ მუშაობს Pegination

const limit = 10;
let currenPage = 1;
let increamentButton = document.getElementById("increase_button");
let productsContainer = document.getElementById("products_container");
let decreaseButton = document.getElementById("decrease_button");

async function FetchData() {
  let skip = (currenPage - 1) * limit;
  let data = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  );
  let response = await data.json();

  productsContainer.innerHTML = "";

  response.products.forEach((product) => {
    let p = document.createElement("p");
    p.textContent = product.title;
    productsContainer.appendChild(p);
  });

  if (currenPage === 1) {
    decreaseButton.setAttribute("disabled", true);
  } else {
    decreaseButton.removeAttribute("disabled");
  }

  if (currenPage > limit) {
    increamentButton.setAttribute("disabled", true);
  } else {
    increamentButton.removeAttribute("disabled");
  }
}

increamentButton.addEventListener("click", () => {
  currenPage++;
  FetchData();
});

decreaseButton.addEventListener("click", () => {
  currenPage--;
  FetchData();
});
