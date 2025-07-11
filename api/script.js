const fetchBtn = document.querySelector("#fetch");
const output = document.querySelector("#output");

fetchBtn.addEventListener("click", async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    output.innerHTML = ""; // clear previous cards

    data.forEach(product => {
      const card = `
        <div class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <img src="${product.image}" alt="${product.title}" class="h-48 w-full object-contain p-4" />
          <div class="px-4 pb-4">
            <h2 class="text-lg font-semibold text-gray-800 mb-1">${product.title}</h2>
            <p class="text-gray-600 text-sm mb-2">${product.description.slice(0, 100)}...</p>
            <p class="text-blue-600 font-bold mb-1">₹ ${product.price}</p>
            <p class="text-sm text-gray-500 mb-1">Category: ${product.category}</p>
            <p class="text-yellow-600 text-sm">${product.rating.rate} (${product.rating.count} reviews)</p>
          </div>
        </div>
      `;
      output.innerHTML += card;
    });

  } catch (err) {
    output.innerHTML = `<p class="text-red-500 font-semibold">Error: ${err.message}</p>`;
  }
});
