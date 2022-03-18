let inputbox = document.getElementById('input-box');
let showresult = document.getElementById('show-data')

const getData = () => {
    let inputValue = inputbox.value
    // console.log(inputValue)
    if (inputValue.length === 6) {
        // showresult.innerHTML = "<li>Valid pin code</li>"

        let api = (`https://api.zippopotam.us/in/${inputValue}`)

        fetch(api)
            .then(res => res.json())
            .then((data) => {

                console.log(data)

                showresult.innerHTML = `

                <h2>You Searched for "${data.places[0][`place name`]}" </h2>
                 <li > City :${data.places[0][`place name`]}, </li >
                <li > State :${data.places[0].state}, </li >
                <li > PIN CODE :${data[`post code`]}, </li >
                <li > Country :${data.country} </li >
                <li > Longitude :${data.places[0].longitude} </li >
                <li > Latitude :${data.places[0].latitude}</li >
                <br>
                <a href="${data.places[0][`place name`]}" target="_blank"> Search ${data.places[0][`place name`]} on google Map  </a>

                `

            })


    }
    else {
        showresult.innerHTML = "<li>Invalid pin code</li>"

    }

}