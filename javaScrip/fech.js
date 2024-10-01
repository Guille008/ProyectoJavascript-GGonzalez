
const cardsProd = document.getElementById("cards");

const peticionAppy = async () => {
    const respuesta = await fetch('https://burgers-hub.p.rapidapi.com/burgers', {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7f20a4cf97mshba4919e0f9f73ecp128327jsn5783e58b2a99',
            'X-RapidAPI-Host': 'burgers-hub.p.rapidapi.com'
        }
    });
    const datos = await respuesta.json();
    const data = await datos;

    console.log(data);
    for (let item of data) {
        const card = document.createElement('div');
        const imageUrl = item.images[0]?.sm || "placeholder.jpg";
        
        card.innerHTML = `
            <div class="card" style="width: 18rem; height: 32rem border-radius: 5px;">
                <img class="card-img-top" src=${imageUrl} alt="${item.name}" />
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">Precio: $${item.price}</p>
                    <a href="#" class="bottonGenerico">Comprar</a>
                </div>
            </div>
        `;
        
        cardsProd.appendChild(card);
    }
}
peticionAppy();
