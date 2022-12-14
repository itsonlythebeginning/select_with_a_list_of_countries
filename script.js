


let select_countries = document.getElementById("select_countries")

let countries = document.querySelectorAll(".countries")


select_countries.addEventListener("change", function () {


        for (let i = 0; i < countries.length; i++) {


            let index = select_countries.selectedIndex - 1

            if (countries[i].classList.contains("active")) {
                countries[i].classList.remove("active")
            }
            else {
                if (index < 0) {

                }
                else {
                    countries[index].classList.add("active")
                }
            }



        }


    }

)