/* console.log(1);
setTimeout(() => {
  console.log(1.5);
}, 2000);

console.log(2);
 */

/* let merried = true;

let Merried = new Promise((resolve, reject) => {
  if (merried) {
    resolve(true);
  } else {
    reject(false);
  }
});

Merried.then((date) => console.log(date));
 */

/* let loging = "murodiljon@2007";
let password = 123457;

function Loging(loging, password) {
  return new Promise((resolve, reject) => {
    if (loging === "murodiljon@2007" && password === 123456) {
      resolve("enter");
    } else {
      reject("fale! Loging or Password error");
    }
  });
}

let res = Loging(loging, password);

res.then((data) => console.log(data)).catch((err) => console.log(err));
 */

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
