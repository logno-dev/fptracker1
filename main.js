import "./style.css";
import { createGrid } from "./components/create_grid.js";

document.querySelector("#app").innerHTML = `
<div id="grid"></div>
`;

const grid = document.getElementById("grid");
createGrid(grid);
