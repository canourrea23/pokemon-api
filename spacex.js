fetch('https://api.spacexdata.com/v3/capsules')
.then(response => {
    return response.json();
})
.then(spacexData => {
    console.log(spacexData);
})
.catch(error => {
    console.log(error);
})



fetch('https://api.spacexdata.com/v3/missions')
.then(response => {
    return response.json();
})
.then(spacexData => {
    console.log(spacexData);
})

fetch('https://api.spacexdata.com/v3/capsules/C112')
.then(response => {
    return response.json();
})
.then(spacexData => {
    console.log(spacexData);
})
fetch('https://api.spacexdata.com/v3/rockets/falcon9')
.then(response => {
    return response.json();
})
.then(spacexData => {
    console.log(spacexData);
})