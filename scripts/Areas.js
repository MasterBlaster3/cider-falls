import { getAreas } from "./database.js";
import { servicesByArea } from "./services.js";
import { serviceNames } from "./services.js";
import { guestsPerArea } from "./guests.js";

const areas = getAreas()
// Event Listener that window alerts a message containing the number of guests in a given area

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("area")) {
            const [,areaId] = itemClicked.id.split("--")

            for (const area of areas) {
                if (area.id === parseInt(areaId)) {
                    const currentGuests = guestsPerArea(area)           
                    window.alert(`There are ${currentGuests} guests in ${area.name}.`)
                }
            }
        }
    }
)


// this is a function that creates an html string for each area and calls the functions
//  which figure out the services offered in said area.

export const areasHTML = () =>{
    let htmlString = `<div class="areaList">`
    for (const area of areas) {
        htmlString += `<article class="area__card"><h2 id=area--${area.id} class="area__title">${area.name}</h2>`
        const filteredAreaServices = servicesByArea(area)
        const servicesHTML = serviceNames(filteredAreaServices)
        htmlString += servicesHTML
        htmlString += `</article>`
    }
    htmlString += `</div>`
    return htmlString
}
 