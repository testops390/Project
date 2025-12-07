// ======================================
// ページフェードイン
// ======================================
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "1";
});

// ======================================
// スクロールで要素をフェードイン
// ======================================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".fade").forEach((el) => observer.observe(el));

// ======================================
// ページ遷移時フェードアウト
// ======================================
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {

    // ① 新しいタブ(target="_blank") → フェードアウトしない
    if (link.target === "_blank") return;

    const href = link.getAttribute("href");
    if (!href) return;

    // ② 同じページ内の #anchor → フェードアウトしない
    if (href.startsWith("#")) return;

    // ③ 同じページの id 付きリンク（index.html#company など）も除外
    const currentPage = location.pathname.split("/").pop() || "index.html";
    const cleanedHref = href.split("#")[0];

    if (cleanedHref === "" || cleanedHref === currentPage) {
      return; // ← フェードアウトしない
    }

    // ④ ここまで来たら「別ページへの移動」と判断 → フェードアウト実行
    document.body.style.opacity = "0";
  });
});
