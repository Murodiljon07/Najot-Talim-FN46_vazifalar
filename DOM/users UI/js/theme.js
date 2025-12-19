const ThmeBtn = document.getElementById("theme");
const ThemeText = document.querySelector(".theme-label");
const thmeIcon = document.querySelector(".bx-moon");

const GetTheme = localStorage.getItem("mode");

const changeTheme = () => {
  let saveTheme = document.documentElement.classList.toggle("dark-theme");
  thmeIcon.classList.toggle("bx-sun");

  saveTheme
    ? (ThemeText.textContent = "Light")
    : (ThemeText.textContent = "Dark");

  return saveTheme;
};

if (GetTheme) {
  changeTheme();
}

ThmeBtn.addEventListener("click", () => {
  if (changeTheme()) {
    localStorage.setItem("mode", "Dark");
  } else {
    localStorage.setItem("mode", "");
  }
});
