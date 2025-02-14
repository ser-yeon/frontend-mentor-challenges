const hamburgerButton = document.querySelector(".hamburger-btn");
const buttons = document.querySelectorAll(".dropdown-btn");

hamburgerButton.addEventListener("click", () => {
  const expanded = hamburgerButton.getAttribute("aria-expanded") === "true";
  hamburgerButton.setAttribute("aria-expanded", !expanded);

  const img = hamburgerButton.querySelector("img");
  if (!expanded) {
    img.src = "./images/icon-close.svg";
    img.classList.add("click");
  } else {
    img.src = "./images/icon-hamburger.svg";
  }

  //关闭子菜单
  buttons.forEach((btn) => {
    btn.classList.remove("rotated");
    const menu = btn.nextElementSibling;

    if (menu) {
      menu.hidden = true;
    }
  });

  const menu = hamburgerButton.nextElementSibling;

  if (menu) {
    menu.hidden = expanded;
  }
});

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((otherBtn) => {
      if (otherBtn !== btn) {
        otherBtn.setAttribute("aria-expanded", "false");
        otherBtn.classList.remove("rotated");
        const otherMenu = otherBtn.nextElementSibling;
        if (otherMenu) {
          otherMenu.hidden = true;
        }
      }
    });

    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", !expanded);
    btn.classList.toggle("rotated");

    const menu = btn.nextElementSibling;

    if (menu) {
      menu.hidden = expanded;
    }
  });
});
