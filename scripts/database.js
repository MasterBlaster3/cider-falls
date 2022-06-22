const database = {
    areas: [{
        id: 1,
        name: "Chamfort River",
        location: "northeast"
    }, {
        id: 2,
        name: "Lost Wolf Hiking Trail",
        location: "northern"
    }, {
        id: 3,
        name: "Lodge",
        location: "northwest"
    }, {
        id: 4,
        name: "Gander River",
        location: "southwest"
    }, {
        id: 5,
        name: "Campgrounds",
        location: "southern"
    }, {
        id: 6,
        name: "Pine Bluffs Trail",
        location: "southeast"
    }],
    services: [{
        id: 1,
        name: "rafting"
    }, {
        id: 2,
        name: "canoeing"
    }, {
        id: 3,
        name: "fishing"
    }, {
        id: 4,
        name: "hiking"
    }, {
        id: 5,
        name: "picnicking"
    }, {
        id: 6,
        name: "rock climbing"
    }, {
        id: 7,
        name: "lodging"
    }, {
        id: 8,
        name: "parking"
    }, {
        id: 9,
        name: "information"
    }, {
        id: 10,
        name: "ziplines"
    }],
    areaServices: [{
        id: 1,
        areaId: 1,
        serviceId: 1
    }, {
        id: 2,
        areaId: 1,
        serviceId: 2
    }, {
        id: 3,
        areaId: 1,
        serviceId: 3
    }, {
        id: 4,
        areaId: 2,
        serviceId: 4
    }, {
        id: 5,
        areaId: 2,
        serviceId: 5
    }, {
        id: 6,
        areaId: 2,
        serviceId: 6
    }, {
        id: 7,
        areaId: 3,
        serviceId: 7
    }, {
        id: 8,
        areaId: 3,
        serviceId: 8
    }, {
        id: 9,
        areaId: 3,
        serviceId: 9
    }, {
        id: 10,
        areaId: 3,
        serviceId: 5
    }, {
        id: 11,
        areaId: 4,
        serviceId: 3
    }, {
        id: 12,
        areaId: 4,
        serviceId: 4
    }, {
        id: 13,
        areaId: 5,
        serviceId: 9
    }, {
        id: 14,
        areaId: 5,
        serviceId: 7
    }, {
        id: 15,
        areaId: 5,
        serviceId: 8
    }, {
        id: 16,
        areaId: 6,
        serviceId: 4
    }, {
        id: 17,
        areaId: 6,
        serviceId: 5
    }, {
        id: 18,
        areaId: 6,
        serviceId: 10
    }],
    guests: [{
        id: 1,
        name: "Alphonse Meron",
        email: "ameron0@mashable.com",
        areaId: 1
    }, {
        id: 2,
        name: "Damara Pentecust",
        email: "dpentecust1@apache.org",
        areaId: 1
    }, {
        id: 3,
        name: "Anna Bowton",
        email: "abowton2@wisc.edu",
        areaId: 3
    }, {
        id: 4,
        name: "Hunfredo Drynan",
        email: "hdrynan3@bizjournals.com",
        areaId: 4
    }, {
        id: 5,
        name: "Elmira Bick",
        email: "ebick4@biblegateway.com",
        areaId: 6
    }, {
        id: 6,
        name: "Bernie Dreger",
        email: "bdreger5@zimbio.com",
        areaId: 5
    }, {
        id: 7,
        name: "Rolando Gault",
        email: "rgault6@google.com",
        areaId: 6
    }, {
        id: 8,
        name: "Tiffanie Tubby",
        email: "ttubby7@intel.com",
        areaId: 2
    }, {
        id: 9,
        name: "Tomlin Cutill",
        email: "tcutill8@marketwatch.com",
        areaId: 6
    }, {
        id: 10,
        name: "Arv Biddle",
        email: "abiddle9@cafepress.com",
        areaId: 4
    }]
}

export const getAreas = () => {
    return database.areas.map(area => ({...area}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}

export const getAreaServices = () => {
    return database.areaServices.map(areaService => ({...areaService}))
}

export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}