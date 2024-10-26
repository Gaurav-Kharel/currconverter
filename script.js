console.log("js is working.")

const populate=(value,currency)=>{

    let myStr=""
    url="https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_hZGLiJXIvlvQPg7hWo4z4dFYOysgF1iUjeKh5xdc&base_currency="
    let response= fetch(url)
    let rJson= response.json();
    document.querySelector(".output").style.css="block";
    for(let key of Object.keys(rJson["data"]))
    {
        myStr +=`
        <tr>
        <td>${rJson["data"]}</td>
        </tr>
        `
    }
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML=myStr

}

const btn= document.querySelector('.btn');
btn.addEventListener("click",(e)=>
{
    e.preventDefault();
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='Currency']").value;

    populate();
})

