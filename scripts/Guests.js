import { getGuests } from "./database.js";

const guests = getGuests()

// this is a function that returns the number of guests in a particular area

export const guestsPerArea = (area) =>{
    let guestNumber = 0
    for (const guest of guests) {
        if(guest.areaId === area.id)
        guestNumber ++
    }
    return guestNumber
}

// this is a function that returns HTML string for guests

export const guestsHTML = () =>{
    let htmlString = `<aside class="guestList"><h2>Park Guests</h2><ul>`
    for (const guest of guests) {
        htmlString += `<li id="guest--${guest.id}">${guest.name}</li>`
    }
    htmlString += `</aside>`
    return htmlString
}