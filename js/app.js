const cartCount = document.getElementById("cartCount");
let cart = 0;

document.querySelectorAll(".add-cart").forEach(btn => {
  btn.addEventListener("click", () => {
    cart++;
    cartCount.textContent = cart.toLocaleString("fa-IR");
    const old = btn.textContent;
    btn.textContent = "✓ اضافه شد";
    setTimeout(() => btn.textContent = old, 1000);
  });
});

document.querySelectorAll(".heart").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("liked");
    btn.textContent = btn.classList.contains("liked") ? "♥" : "♡";
  });
});

const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("nav");
toggle.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.getElementById("newsletterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("newsletterMessage").textContent = "ایمیل شما با موفقیت ثبت شد ✓";
  e.target.reset();
});
