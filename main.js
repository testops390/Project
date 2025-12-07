// ======================================
// ページフェードイン
// ======================================
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "1";
});

// ======================================
// スクロールで要素フェードイン
// ======================================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".fade").forEach((el) => observer.observe(el));

// ======================================
// ページ遷移フェードアウト（内部リンクは除外）
// ======================================
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (!href) return;

    // 別タブはフェードアウトしない
    if (link.target === "_blank") return;

    // #company などの内部リンクはフェードアウトしない
    if (href.startsWith("#") || href.includes("#")) return;

    // カレントページと同じならフェードアウトしない
    const current = location.pathname.replace(/\/$/, "");
    const target = href.replace(/\/$/, "");
    if (target === "" || target === current) return;

    // ここだけフェードアウト
    document.body.style.opacity = "0";
  });
});
