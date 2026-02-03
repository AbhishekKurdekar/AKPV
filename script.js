function unlock() {
  const pass = document.getElementById("password").value;
  if (pass === "myvalentine") {   // CHANGE PASSWORD HERE
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("content").style.display = "block";
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
    <h1 style="margin-top:20%; color:#ff4d6d; animation: fade 1.5s;">
      You are my today, tomorrow & always ❤️<br>
      Happy Valentine’s Day 💍
    </h1>
  `;
}
