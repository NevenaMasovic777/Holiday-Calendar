const API = "https://calendarific.com/api/"
const V = "v2"
const HOLIDAYS = "/holidays"
// const COUNTRIES  = "/countries"
const ApiKey = "?api_key=5353dc24c8e05fa5ab955198af36aedeaa9fa454"


function getAllHolidays(){
    return fetch(`${API}${V}${HOLIDAYS}${ApiKey}&country=RS&year=2019`).then(res => res.json())
}

function getRussianHolidays(){
    return fetch(`${API}${V}${HOLIDAYS}${ApiKey}&country=RU&year=2019`).then(res => res.json())
}

function getItalianHolidays(){
    return fetch(`${API}${V}${HOLIDAYS}${ApiKey}&country=IT&year=2019`).then(res => res.json())
}

function getGermanHolidays(){
    return fetch(`${API}${V}${HOLIDAYS}${ApiKey}&country=DE&year=2019`).then(res => res.json())
}

function getEnglishHolidays(){
    return fetch(`${API}${V}${HOLIDAYS}${ApiKey}&country=GB&year=2019`).then(res => res.json())
}


export{
    getAllHolidays,
    getRussianHolidays,
    getItalianHolidays,
    getGermanHolidays,
    getEnglishHolidays
}