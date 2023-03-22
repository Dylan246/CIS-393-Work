//Dylan Gazda

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    document.getElementById("convertButton").addEventListener("click", convertButtonClicked)

    ci = document.getElementById("cInput")
    fi = document.getElementById("fInput")

    //If you are focused on one field, clear the other 
    fi.addEventListener("input", function() { ci.value = "" })
    ci.addEventListener("input", function() { fi.value = "" })
}

function convertCtoF(degreesCelsius) {
    return degreesCelsius * 9 / 5 + 32;
}

function convertFtoC(degreesFahrenheit) {
    return (degreesFahrenheit - 32) * 5 / 9
}

function convertButtonClicked() {
    c = document.getElementById("cInput").value
    f = document.getElementById("fInput").value
    error = document.getElementById("errorMessage")

    if (c.length > 0) {
        if (isNaN(parseFloat(c))) { //Check for non-number
            error.innerHTML = c + " is not a number"
        } else {
            error.innerHTML = "" //Erase error since it's a number
            document.getElementById("fInput").value = convertCtoF(c)
        }
    } else if (f.length > 0) {
        if (isNaN(parseFloat(f))) { //Check for non-number
            error.innerHTML = f + " is not a number"
        } else {
            error.innerHTML = "" //Erase error since it's a number
            document.getElementById("cInput").value = convertFtoC(f)
        }
    }

    //Check the temperature in F to pick the correct icon
    temp = parseFloat(document.getElementById("fInput").value)
    img = document.getElementById("weatherImage")
    if (temp < 32) {
        img.src = "cold.png"
    } else if (temp >= 32 && temp <= 50) {
        img.src = "cool.png"
    } else if (temp > 50) {
        img.src = "warm.png"
    }
}