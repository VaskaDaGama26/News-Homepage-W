document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-button");
  const closeBtn = document.getElementById("close-button");
  const shadow = document.getElementById("bg-shadow");
  const menu = document.getElementById("menu");

  // Открытие меню
  menuBtn.addEventListener("click", () => {
    // Показать тень
    shadow.classList.remove("hidden");
    shadow.classList.add("fade-in");

    // Показать меню (без анимации)
    menu.classList.remove("hidden");

    // Немного подождать перед запуском выезда (чтобы hidden точно убрался)
    requestAnimationFrame(() => {
      menu.classList.remove("translate-x-full");
      menu.classList.add("translate-x-0");
    });
  });

  // Закрытие меню
  function closeMenu() {
    // Анимация тени
    shadow.classList.remove("fade-in");
    shadow.classList.add("fade-out");

    // Убрать меню вправо
    menu.classList.remove("translate-x-0");
    menu.classList.add("translate-x-full");

    // После завершения анимации (300ms)
    setTimeout(() => {
      menu.classList.add("hidden");
      shadow.classList.add("hidden");
      shadow.classList.remove("fade-out");
    }, 300);
  }

  closeBtn.addEventListener("click", closeMenu);
  shadow.addEventListener("click", closeMenu);
});
