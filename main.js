//backend using js to use tfl api to get bus timing data from tfl servers
//want to display bus number and dynamic arrival timings based on bus stop code that user needs to manually input 
//interface is telegram bot father
//need to find a way to stop the calls being made to tfl server within telegram interface

//optional parts
//integrate telegram maps (apple maps) into interface to allow user to view location of the bus they want. 

const api_key = "a8d76d0c49604b189cd56f2bd7992040";
const url = `qwer${api_key}`

async function busTimings() {
    const response = await fetch(url)
}