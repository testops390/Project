// ページのフェードイン
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "1";
});

// スクロールで要素をふわっと表示
// -----------------------------
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".fade").forEach((el) => observer.observe(el));

// リンククリック時の軽いアニメ風
// -----------------------------
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    // 外部リンクや新規タブは除外
    if (link.target === "_blank") return;

    document.body.style.opacity = "0";
  });
});
