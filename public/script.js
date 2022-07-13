var map = document.getElementById("map")
document.querySelector("button").addEventListener("click", findUrl)
document.querySelector("button").addEventListener("click", deleteMap)

window.addEventListener("load", fetchUrl)


// this function fetches the users IP adress on the initial page load
function fetchUrl(){

    fetch(" https://geo.ipify.org/api/v2/country,city?apiKey=at_mUiRc27yJV6JPTvMSfkMyyyNUdZvw"
)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        document.querySelector(".ip").innerText = data.ip
        document.querySelector(".location").innerText = data.location["region"]
        document.querySelector(".timezone").innerText = data.location["timezone"]
        document.querySelector(".isp").innerText = data.isp

        var lat = data.location["lat"]
        var lng = data.location["lng"]

         map = L.map('map').setView([lat, lng], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
        }).addTo(map);
        var marker = L.marker([lat, lng]).addTo(map);

    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

// this function removes the map after it has been initialised
function deleteMap() {
    map.remove()
}

// this function fetches the IP geolocation when a valod IP adress is inputed and button is clicked
function findUrl(){
    var choice = document.querySelector("input").value

    fetch("https://geo.ipify.org/api/v2/country,city?apiKey=at_mUiRc27yJV6JPTvMSfkMyyyNUdZvw&" + `ipAddress=${choice}`
)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        document.querySelector(".ip").innerText = data.ip
        document.querySelector(".location").innerText = data.location["region"]
        document.querySelector(".timezone").innerText = data.location["timezone"]
        document.querySelector(".isp").innerText = data.isp

        var lat = data.location["lat"]
        var lng = data.location["lng"]

         map = L.map('map').setView([lat, lng], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
        }).addTo(map);
        var marker = L.marker([lat, lng]).addTo(map)


     })
    .catch(err => {
        console.log(`error ${err}`)
    })
}
















    

            




