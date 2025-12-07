//------------------------------------------------------
// ① ページフェードイン
//------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});


//------------------------------------------------------
// ② スクロールで要素フェードイン
//------------------------------------------------------
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".fade").forEach(el => observer.observe(el));


//------------------------------------------------------
// ③ ページ遷移フェードアウト（戻る・内部リンクは除外）
//------------------------------------------------------
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (!href) return;

    // ● 戻る／進むボタンは除外（これは JS で制御不可）
    //    → フェードアウトしないようにする必要がある

    // ● 同一ページ内リンク（#）は除外
    if (href.startsWith("#") || href.includes("#")) return;

    // ● 外部リンクや新規タブは除外
    if (link.target === "_blank") return;

    // ● 同じページを開く場合も除外
    const current = location.pathname.replace(/\/$/, "");
    const target = href.replace(/\/$/, "");
    if (target === "" || target === current) return;

    // ● ここだけフェードアウト（戻るに影響しない）
    document.body.classList.add("fade-out");
  });
});


//------------------------------------------------------
// ④ 戻るボタンで白くならないようにヒストリー復元時にフェード解除
//------------------------------------------------------
window.addEventListener("pageshow", (event) => {
  // pageshow は 戻る/進む でも呼ばれる
  // persisted = true（BFCacheから復元）の時に白くなるバグを回避する
  if (event.persisted) {
    document.body.classList.remove("fade-out");
    document.body.classList.add("fade-in");
  }
});
