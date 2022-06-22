import { getAreaServices, getAreas, getServices } from "./database.js";

const areas = getAreas()
const areaServices = getAreaServices()
const services = getServices()

export const servicesHTML = () =>{
    let htmlString = `<div class="serviceList">Park Services:`
    for (const service of services) {
        htmlString += `<btn id="service--${service.id}">${service.name}</btn>`
    }
    htmlString += `</div>`
    return htmlString
}

// function that receives a parameter of an area object and 
// returns an array with the id of each service offered

export const servicesByArea = (area) =>{
    let filteredIds = []
    for (const areaService of areaServices) {
        if(area.id === areaService.areaId){
            filteredIds.push(areaService.serviceId)
        }
    }
    return filteredIds
}

// function that receives a parameter of a filtered services array from the 
// servicesByArea function and returns an html string of those services

export const serviceNames = (filteredIds) =>{
    let offeredServices = `<ul>`;
    for (const id of filteredIds) {
        for (const service of services) {
            if(id === service.id){
                offeredServices += `<li class="service--${service.id}">${service.name}</li>`
            }
        }
    }
    offeredServices += `</ul>`
    return offeredServices
}

// Function that takes a parameter of a service and returns an array of associated area ids

export const areasByService = (service) =>{
    let filteredIds = []
    for (const areaService of areaServices) {
        if(service.id === areaService.serviceId){
            filteredIds.push(areaService.areaId)
        }
    }
    return filteredIds
}

// Function that returns a list of area names associated 
// with a service using the return of the areasByService function

export const areaNames = (filteredIds) =>{
    let areaNames = ``
    for (const id of filteredIds) {
        for (const area of areas) {
            if(area.id === id){
                areaNames += `-${area.name}`
            }
        }
    }
    return areaNames
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("service")) {
            const [,serviceId] = itemClicked.id.split("--")

            for (const service of services) {
                if (service.id === parseInt(serviceId)) {
                    const areaIds = areasByService(service)
                    const areas = areaNames(areaIds)
            
                    window.alert(`${service.name} is available in the following sections of the park: ${areas}`)
                }
            }
        }
    }
)


