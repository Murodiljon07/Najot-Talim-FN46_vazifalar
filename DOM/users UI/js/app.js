const Main = document.getElementById("main");
const UserBox = document.querySelectorAll(".user-box");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => CreateUserBox(json));

const CreateUserBox = (enteies) => {
  Main.innerHTML = ``;
  enteies.forEach((element) => {
    let { address, name, username, email, website, phone, company } = element;
    Main.innerHTML += `
          <div class="user-box">
          <div class="edit-desk">
            <button class="remove-user">
              <i class="bx bxs-user-x"></i>remove
            </button>
            <button class="accept-user">
              <i class="bx bx-user-plus"></i>accept
            </button>
            <button class="close-edit-btn"></button>
          </div>
          <button class="edit-btn"><i class="bx bx-menu-alt-right"></i></button>
          <a href="#" class="address"
            ><i class="bx bx-map"></i>${address.city}</a
          >
          <img src="" alt="" class="user-box-img" />
          <div class="user-box-desc">
            <h2 class="full-name">${name}</h2>
            <p class="user-name">
              <i class="bx bx-user-circle"></i>${username}
            </p>
            <a href="#" class="email"><i class="bx bx-envelope"></i>${email}</a>
            <a href="#" class="web"><i class="bx bx-sitemap"></i>${website}</a>
            <p class="phone"><i class="bx bx-phone-call"></i>${phone}</p>
            <p class="company">
              <i class="bx bxs-business"></i>${company.name}
            </p>
          </div>
        </div>
  
  `;
  });
};

const Search = document.getElementById("search-input");

const EditUser = document.querySelectorAll(".edit-btn");
const EditDesk = document.querySelectorAll(".edit-desk");

EditUser.forEach((element) => {
  element.addEventListener("click", () => {
    EditDesk.forEach((element) => {
      element.classList.toggle("active");
    });
  });
});
