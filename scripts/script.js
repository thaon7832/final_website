const content = document.getElementById("tab-content");
const buttons = document.querySelectorAll(".tab-button");

function switchTab(tab) {
  buttons.forEach((btn) => btn.classList.remove("active"));
  const currentBtn = Array.from(buttons).find((btn) =>
    btn.innerText.toLowerCase().includes(tab)
  );
  if (currentBtn) currentBtn.classList.add("active");

  switch (tab) {
    case "profile":
      content.innerHTML = `Passionate about creating interactive. Coffee lover ☕ and tech enthusiast 💻.<br>
      Currently a student at University of Wisconsin - Green Bay.`;
      break;
    case "portfolio":
      content.innerHTML = `<ul>
        <li> Personal Website/Project </li>
        <li> School Projects </li>
        <li> Collaboration Projects </li>
      </ul>`;
      break;
    case "contact":
      content.innerHTML = `
        Email: <a href="mailto:thaon22@uwgb.edu">thaon22@uwgb.edu</a><br>
        Phone: (920) 287-4321 <br>
        Location: Green Bay, WI
      `;
      break;
  }
}
