const cityName = document.getElementById('cityName')
const city_name = document.getElementById('city_name')
const temp_status = document.getElementById('temp_status')
const temp_real_val = document.getElementById('temp_real_val')
const submitBtn = document.getElementById("submitBtn")
const datahide = document.querySelector('.middle_layer')
const api_key = "d6cd89392bebe2ef1dd47b8d74d2b1fc" || "e50948c3de3094fc55d41687236b606a" || "49c3c3168d04badda621c789c1683ab5"
const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText = "Please Enter some value to search..."
        datahide.classList.add('data_hide')
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=${api_key}`
            const response = await fetch(url)
            const data = await response.json();
            const arrData = [data]
            console.log(arrData)
            console.log(data)

            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`
            temp_real_val.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;
            // conditions
            if(tempMood == "Clear")
            {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68'></i>"
            }
            else if(tempMood == "Clouds")
            {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6'></i>"
            }
            else if(tempMood == "Rain")
            {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be'></i>"
            }
            else
            {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68'></i>"
            }
            datahide.classList.remove('data_hide')
        }
        catch{
            city_name.innerText = "Please Enter proper city name to search !!"
            datahide.classList.add('data_hide')
        }
    }

}

submitBtn.addEventListener('click', getInfo)

// wtf is this guyzz 