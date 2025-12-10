/* document.addEventListener("keyup", (e) => {
  document.body.innerHTML = e.key;
});
 */

const Form = document.getElementById("form");
const Submit = document.getElementById("submit");

let name = [];

Form.addEventListener("submit", (e) => {
  e.preventDefault();
});
