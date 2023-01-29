const $bg = document.querySelector(".background");
const mouseScale = 0.25;
$bg.addEventListener("mousemove", e => {
    const x = e.offsetX / $bg.clientWidth * 100 - 50;
    const y = e.offsetY / $bg.clientHeight * 100 - 50;
    $bg.style.setProperty("--mouseX", `${(x * mouseScale).toFixed(3)}%`);
    $bg.style.setProperty("--mouseY", `${(y * mouseScale).toFixed(3)}%`);
});