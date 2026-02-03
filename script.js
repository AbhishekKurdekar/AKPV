function unlock() {
  const pass = document.getElementById("password").value;
  if (pass === "04Aug2025") {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("content").style.display = "block";
    document.getElementById("bgMusic").play();
  } else {
    document.getElementById("error").innerText = "Wrong password 💔";
  }
}

function moveNo() {
  const no = document.getElementById("no");
  const x = Math.random() * 250 - 125;
  const y = Math.random() * 120;
  no.style.transform = `translate(${x}px, ${y}px)`;
}

function yesClick() {
  document.body.innerHTML = `
    <h1 style="margin-top:20%; color:#ff4d6d;">
      You are my today, tomorrow & always ❤️<br>
      Happy Valentine’s Day 💍
    </h1>
  `;
}

/* Hearts */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 20 + 15) + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 700);

/* Protection */
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("dragstart", e => {
  if (e.target.tagName === "IMG") e.preventDefault();
});
