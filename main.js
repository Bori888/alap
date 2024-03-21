import { kepek } from "./adatok.js";
import { htmlOsszeAllit } from "./fuggvenyek.js";

const GALERIA = document.querySelector(".tartalom")
console.log(GALERIA)

GALERIA.innerHTML += htmlOsszeAllit(kepek)
