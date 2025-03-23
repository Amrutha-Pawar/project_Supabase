const shops = [
    { name: "Shop A", product: "Laptop", price: "$500" },
    { name: "Shop B", product: "Mobile", price: "$300" }
];

function searchShops() {
    const query = document.getElementById("productSearch").value.toLowerCase();
    const results = shops.filter(shop => shop.product.toLowerCase().includes(query));

    const shopListDiv = document.getElementById("shopList");
    shopListDiv.innerHTML = "";

    if (results.length > 0) {
        results.forEach(shop => {
            shopListDiv.innerHTML += <p>${shop.name} - ${shop.product} - ${shop.price}</p>;
        });
    } else {
        shopListDiv.innerHTML = "<p>No shops found.</p>";
    }
}