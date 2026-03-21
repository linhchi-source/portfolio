const project_card = document.querySelector(".project-card");
// const img = document.querySelector("img")
const header = document.querySelector(".header");
const str = "Linh Chi";
const monstalab = document.querySelector(".monstalab");
const fis = document.querySelector(".fis");
const role = document.querySelector(".role");
const time1 = document.querySelector(".time1");
const work = document.querySelector(".work");
let index = 0;
let companies = [
  {
    role: "Tester",
    time: "Aug 2022 - May 2023",
    work: `<ul >
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </li>
              <li>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </li>
            </ul>`,
  },
  {
    role: "Engineer",
    time: "Aug 2024 - May 2025",
    work: `<ul><li>work here</li><li>is fun</li></ul>`,
  },
];
let companyname = ["fis", "monstalab", "apple", "google"];

for (let i = 0; i < companyname.length; i++) {
  console.log(companyname[i]);
  console.log(document.querySelector(`.${companyname[i]}`));
  document.querySelector(`.${companyname[i]}`).addEventListener("click", () => {
    console.log(companyname[i]);
    role.textContent = companies[i].role;
    time1.textContent = companies[i].time;
    work.innerHTML = companies[i].work;
  });
}

function typeEffect() {
  if (index < str.length) {
    header.textContent += str[index];
    index++;
    setTimeout(typeEffect, 150);
  } else {
    // khi gõ xong → thêm class để dừng blink
    header.classList.add("done");
  }
}

window.addEventListener("load", typeEffect);
