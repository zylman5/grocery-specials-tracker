const fs = require('fs');

const specials = [
  {
    name: "Weet-Bix 1.2kg",
    store: "Coles",
    price: "$3.50",
    discount: "50% off"
  },
  {
    name: "Milk 2L",
    store: "Woolworths",
    price: "$2.00",
    discount: "Save $1.00"
  }
];

fs.writeFileSync('public/specials.json', JSON.stringify(specials, null, 2));
console.log("✅ specials.json updated");
