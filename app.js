const images = Array.from({ length: 10 }, (_, i) => `/ruou.linh/images/${i + 1}.jpg`);
const grid = document.getElementById("grid");

const CELL = 400; // phải khớp grid-auto-rows trong CSS

images.forEach(src => {
  const img = new Image();
  img.src = src;

  img.onload = () => {
    const w = img.naturalWidth;
    const h = img.naturalHeight;

    const colSpan = Math.ceil(w / CELL);
    const rowSpan = Math.ceil(h / CELL);

    const item = document.createElement("div");
    item.className = "item";
    item.style.gridColumn = `span ${colSpan}`;
    item.style.gridRow = `span ${rowSpan}`;

    item.appendChild(img);
    grid.appendChild(item);
  };
});
