// JS BASIC → JUNIOR REAL MASALALAR
// Quyida real loyihalarda eng ko‘p uchraydigan, junior darajadagi 15 ta JavaScript masalasi berilgan.
// ------------------------------------------------------------
// 1) cleanName(name)
// – Bo‘sh joylarni olib tashlaydi
// – Birinchi harfni katta qiladi
// Misol:
// cleanName(" aSAdBEk ") → "Asadbek"

/* function cleanName(str) {
  let withOutTrim = "";
  for (char of str.trim()) {
    if (char !== " ") withOutTrim += char;
  }
  return (
    withOutTrim.charAt(0).toUpperCase() + withOutTrim.slice(1).toLowerCase()
  );
}
console.log(cleanName("    a SAd BEk  ")); */

// ------------------------------------------------------------
// 2) formatPrice(price)
// – Narxni "25 000 so'm" formatiga keltiradi
// Misol:
// formatPrice(25000) → "25 000 so'm"

console.log("2 false");

// ------------------------------------------------------------
// 3) slugify(title)
// – Kichik harflarga o‘tkazadi
// – Bo‘sh joylarni "-" ga almashtiradi
// Misol:
// slugify("JavaScript Basic Kurs") → "javascript-basic-kurs"

/* function slugify(title) {
  return title.trim().toLowerCase().split(" ").join("-");
}

console.log(slugify("JavaScript Basic Kurs")); */

// ------------------------------------------------------------
// 4) isValidPassword(password)
// – Uzunligi ≥ 8
// – Kamida bitta raqam bo‘lishi kerak

/* function isValidPassword(pass) {
  if (pass.length < 8) return false;

  let hasNumber = false;

  for (let char of pass) {
    if (char >= "0" && char <= "9") {
      hasNumber = true;
    }
  }

  return hasNumber;
}

console.log(isValidPassword("hello123")); */

// -------------------------------------------------------------

const products = [
  { id: 10, name: "Watch", category: "Accessories", price: 300, stock: 0 },
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, stock: 15 },
  { id: 2, name: "Smartphone", category: "Electronics", price: 800, stock: 30 },
  { id: 3, name: "Headphones", category: "Electronics", price: 150, stock: 50 },
  { id: 4, name: "Desk Chair", category: "Furniture", price: 200, stock: 0 },
  { id: 6, name: "Notebook", category: "Stationery", price: 5, stock: 100 },
  { id: 5, name: "Coffee Table", category: "Furniture", price: 250, stock: 0 },
  { id: 7, name: "Pen", category: "Stationery", price: 2, stock: 200 },
  { id: 8, name: "Backpack", category: "Accessories", price: 60, stock: 40 },
  { id: 9, name: "Sneakers", category: "Footwear", price: 120, stock: 25 },
];

// ------------------------------------------------------------
// 5) getProductById(products, id)
// – ID bo‘yicha productni topadi
// – Topilmasa null qaytaradi

/* const getProductById = (inputID, arr = products) => {
  return products.find((curVel) => {
    return curVel.id === inputID || null;
  });
};
console.log(getProductById(5)); */

// ------------------------------------------------------------
// 6) filterByCategory(products, category)
// – Kategoriya bo‘yicha productlarni qaytaradi

/* const filterByCategory = (category, arr = products) => {
  return arr.filter((curVel) => curVel.category === category);
};

console.log(filterByCategory("Accessories")); */

// ------------------------------------------------------------
// 7) getInStockProducts(products)
// – inStock:true bo‘lgan productlar

/* const getInStockProducts = (arr = products) => {
  return arr.filter((curVel) => curVel.stock);
};

console.log(getInStockProducts()); */

// ------------------------------------------------------------
// 8) getCartTotal(cart)
// – price * quantity bo‘yicha umumiy summani hisoblaydi

/* const getCartTotal = (arr = products) => {
  return arr.reduce((acc, curVel) => { acc+ curVel.price*curVel.stock}, 0);
};

console.log(getCartTotal()); */

// ------------------------------------------------------------
// 9) addProduct(products, newProduct)
// – Auto ID qo‘shadi
// – Asl arrayni o‘zgartirmasdan yangi array qaytaradi

/* const addProduct = (newProduct, arr = products) => {
  let getNewID = Math.max(...arr.map((curVel) => curVel.id));

  let pushIDtoProduct = { ...newProduct, id: getNewID + 1 };

  return [...arr, pushIDtoProduct];
};

let newProduct = {
  name: "Asus",
  category: "LapTop",
  price: 300,
  stock: 0,
};

console.log(addProduct(newProduct)); */

// ------------------------------------------------------------
// 10) removeProductById(products, id)
// – ID bo‘yicha ma'lumotni o‘chiradi

/* const removeProductById = function (id, arr = products) {
  let findByID = arr.filter((curVel) => curVel.id !== id);

  return findByID;
};

console.log(removeProductById(10)); */

// ------------------------------------------------------------
// 11) updateProductPrice(products, id, newPrice)
// – Product narxini yangilaydi

/* const updateProductPrice = function (id, newPrice, arr = products) {
  return arr.map((curVel) =>
    curVel.id === id ? { ...curVel, price: newPrice } : curVel
  );
};

console.log(updateProductPrice(1, 55)); */

// ------------------------------------------------------------
// 12) paginate(array, page, limit)
// – Sahifalash
// – page = 1 → birinchi limit ta element

console.log("12 false");

// ------------------------------------------------------------

const users = [
  { id: 1, name: "Asadbek", age: 17, isActive: false },
  { id: 2, name: "Mehribon", age: 20, isActive: true },
  { id: 3, name: "Jasur", age: 25, isActive: true },
  { id: 4, name: "Dilshod", age: 15, isActive: false },
  { id: 5, name: "Madina", age: 18, isActive: true },
  { id: 6, name: "Bobur", age: 30, isActive: false },
  { id: 7, name: "Sarvar", age: 22, isActive: true },
  { id: 8, name: "Nodira", age: 27, isActive: true },
  { id: 9, name: "Aziza", age: 16, isActive: false },
  { id: 10, name: "Kamron", age: 35, isActive: true },
];

// 13) getAdults(users)
// – Yoshi 18 va undan katta userlar

/* const getAdults = function (users = users) {
  return users.filter((curVel) => curVel.age >= 18);
};

console.log(getAdults(users)); */

// ------------------------------------------------------------
// 14) countActiveUsers(users)
// – isActive:true bo‘lgan userlar soni

/* function countActiveUsers(users) {
  return users.filter((u) => u.isActive).length;
}

console.log(countActiveUsers(users)); */

// ------------------------------------------------------------
// 15) getOldestUser(users)
// – Eng katta yoshdagi userni qaytaradi

/* function getOldestUser(users) {
  return users.reduce((oldest, user) =>
    user.age > oldest.age ? user : oldest
  );
}
console.log(getOldestUser(users)); */

// ------------------------------------------------------------
// Tayyor!
