import { areasHTML } from "./areas.js";
import { guestsHTML } from "./guests.js";
import { servicesHTML } from "./services.js";

const servicesContainer = document.querySelector("#parkServices")

const parkServicesHTML = `${servicesHTML()}`

servicesContainer.innerHTML = parkServicesHTML

const mainContainer = document.querySelector("#container")

const mainHTML= `${areasHTML()}${guestsHTML()}`

mainContainer.innerHTML = mainHTML