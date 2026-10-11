import propertyForSaleArr from "./propertyForSaleArr.js";
import { placeholderPropertyObj } from "./placeholderPropertyObj.js";


const getPropertyHtml = (propetyobject = [placeholderPropertyObj]) => propetyobject.map( obj => {
        return `
            <section class="card">
            <img src="./images/${obj.image}">
            <div class="card-right">
            <h2>${obj.propertyLocation}</h2>
            <h3>${obj.priceGBP}</h3>
            <p>${obj.comment}</p>
            <h3>${obj.roomsM2.reduce((total, currentElement) => {return total + currentElement},0)}</h3>
            </div>
            </section>
        `
    }).join('')


document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr)