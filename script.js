document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("quiz-container");
  container.innerHTML = `
    <p>1. Твоя главная черта?</p>
    <button onclick="answer('leader')">Лидер</button>
    <button onclick="answer('loner')">Одиночка</button>
    <button onclick="answer('thinker')">Аналитик</button>
    <button onclick="answer('chaos')">Хаос</button>
  `;
});

function answer(type) {
  const container = document.getElementById("quiz-container");
  let result = {
    leader: "Ты — Джемин. Сильный, эмоциональный и неумолимый.",
    loner: "Ты — Джисон. Молчаливый, проницательный и надломленный.",
    thinker: "Ты — Ренджун. Спокойный, наблюдательный, загадочный.",
    chaos: "Ты — Хэчан. Безумный, весёлый и опасный."
  };
  container.innerHTML = `<h2>${result[type]}</h2>`;
}
