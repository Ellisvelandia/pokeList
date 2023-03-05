const container = document.querySelector(".container");

const getPokemons = () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1008`)
    .then((res) => res.json())
    .then((data) => {
      const pokemon = data.results;
      for (let i = 0; i < pokemon.length; i++) {
        const div = document.createElement("div");
        div.classList.add("box");
        container.appendChild(div);
        div.innerHTML += `
      <div class="card">
      <p>${pokemon[i].name}</p>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        i + 1
      }.png" alt=${pokemon[i].name} loading="lazy"/>
      </div>
      `;
      }
    });
};
getPokemons();
