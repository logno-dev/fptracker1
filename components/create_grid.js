import { client } from "./client.js";
import { items } from "./constants.js";

export function createGrid(el) {
  el.innerHTML = `
<div>Date:</div>
<div>Time:</div>
`;
  items.forEach((item) => {
    el.innerHTML += `<div>${item}</div>`;
  });
  el.innerHTML += `<div id="data" class="flex"></div>`;

  const dataEl = document.getElementById("data");

  const dates = ["1/22", "1/23", "1/24"];
  dates.forEach((date) => {
    dataEl.innerHTML += `<div>${date}</div>`;
  });
  // const request = client.execute("select * from ")
}
