let getData = async () => {
    const request = await fetch("https://ipinfo.io/json?token=b786821c93aeb1")
    const jsonResponse = await request.json()

    let region = jsonResponse.region
    let country = jsonResponse.country
    let zipCode = jsonResponse.postal
    let timezone = jsonResponse.timezone
    let wifiProvider = jsonResponse.org

    let container = document.createElement("div")
    container.className = "container"

    container.innerHTML = "<h1>Hey, I know a little about you 😜</h1>"

    let card = document.createElement("div")
    card.className = "card"

    card.innerHTML = `<p>IP Address: ${jsonResponse.ip}</p>
                      <p>City: ${jsonResponse.city}</p>
                      <p>State: ${jsonResponse.region}</p>
                      <p>Country: ${jsonResponse.country}</p>
                      <p>Timezone: ${jsonResponse.timezone}</p>
                      <p>Wi-Fi Provider: ${jsonResponse.org}</p>`

    document.body.append(container)
    container.append(card)
}

getData()