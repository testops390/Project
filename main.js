// ===============================
// スクロールに応じたフェードイン
// ===============================
document.addEventListener("DOMContentLoaded", () => {
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
});

// ※ ページ全体のフェードアウト／フェードインはあえて入れていません。
//    戻るボタンで真っ白になる原因になりやすいため、
//    「セクションごとのフェードイン」のみに絞っています。
