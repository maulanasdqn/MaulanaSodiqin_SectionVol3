export const menu = document.getElementById("menu");

export const hamburgerMenu = (val) => {
  menu.style.rotate = val ? "90deg" : "0deg";
};
