function login(){
    const name_element = document.querySelector("#name")
    const gender_element = document.querySelector("gender")
    const age_element = document.querySelector("age")

    localStorage.setItem("userName", name_element.value)
    localStorage.setItem("userGender", gender_element.value)
    localStorage.setItem("userAge", age_element.value)
    window.location.href = "play.html"
}