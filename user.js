const urlParams = new URLSearchParams(window.location.search);
const id =urlParams.get('id')

let profile = document.getElementById('profile');
let url = 'https://my-json-server.typicode.com/PavloRymaruck/RoboMarketplace';

fetch(`${url}/users/$id`)
    .then(async function (response){
        let user = await response.json();
            profile.innerHTML = `
                <h1>${user.name}</h1>
                <h2>${user.sirname}</h2>
                <img class="profile-img" src="${user.photo_url}" alt="">
                <p>Balance: ${user.balace}$</p>
            `;
        })

        
    