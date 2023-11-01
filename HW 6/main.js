
generate.addEventListener("click",clickedFcn)

let url = "https://randomuser.me/api" // The base url for random.me

clickedFcn()
function clickedFcn(){
    fetch(url) // get url data

    .then(decode) // what did the fetch tell us?

    .then(success,fail)
}
function decode(response){
    if (response.ok){
        apiData.innerHTML = response.status;
        return (response.json())
    }else
        throw response.status
}

function success(responseData){
    const apiFirst = responseData.results[0].name.first;

    const apiLast = responseData.results[0].name.last;
    const apiCountry = responseData.results[0].location.country;
    const apiAge = responseData.results[0].dob.age;
    const apiPhone = responseData.results[0].phone
    apiData.innerHTML = `<div id="apiData">
    <img  class='Person' src=${responseData.results[0].picture.large} alt="A RANDOM PERSON">
    <h2 class='Person'>This is ${apiFirst} ${apiLast}</h2>
    <h2 class='Person'>They are from ${apiCountry} and are ${apiAge}</h2>
    <h2 class='Person'>Their phone number is ${apiPhone}</h2>
    </div>`;

    apiform = document.querySelector("form")
    apiform.innerHTML = `<input type="hidden" name="first" value="${apiFirst}"/>
    <input type="hidden" name="last" value="${apiLast}"/>
    <input type="hidden" name="country" value="${apiCountry}"/>
    <input type="hidden" name="age" value="${apiAge}"/>
    <input type="hidden" name="phone" value="${apiPhone}"/>
    <input type="submit" id="addBtn" class="btn" value="Add them!"></button>`
    

}
function fail(response){

}