 const pokemonName = document.querySelector('.pokemon__name');
 const pokemonNumber = document.querySelector('.pokemon__number');
 const pokemonImage = document.querySelector('.pokemon__image');
 const pokemonTypes = document.querySelector('.pokmeonTypes');
 const pokmeonAbilities = document.querySelector('.pokmeonAbilities');
 const pokeStats = document.querySelector('.pokeStats');
 const pokeStats1 = document.querySelector('.pokeStats1');
 const pokeStats2 = document.querySelector('.pokeStats2');
 const pokeStats3 = document.querySelector('.pokeStats3');
 const pokeStats4 = document.querySelector('.pokeStats4');
 const pokeStats5 = document.querySelector('.pokeStats5');

 const form = document.querySelector('.form');
 const input = document.querySelector('.input__search');
 const buttonPrev = document.querySelector('.btn-prev');
 const buttonNext = document.querySelector('.btn-next');

 let searchPokemon = 1;

 
 const fetchPokemon = async (pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    
    if (APIresponse.status === 200) {
    const data = await APIresponse.json();
    return data;
    };
 }

const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML ='Loading...';
    pokemonNumber.innerHTML = '';

const data = await fetchPokemon(pokemon)
    if (data) {
    pokemonImage.style.display= 'block';
     pokemonName.innerHTML = data.name;
     pokemonNumber.innerHTML = data.id;

     if(data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']){
         pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
     }else if(data.sprites.other.showdown.front_default){
        pokemonImage.src = data.sprites.other.showdown.front_default
     }else{
        pokemonImage.src = data.sprites.front_default
     }
     
     const type1 = data.types[0].type.name

if(data.types.length == 1){
    // construção do elemento h3
    const h3 = document.createElement('h3')
    // definiçõa do atributo 'class' do elemento h3 através do método setAttribute
    h3.setAttribute('class',type1+" "+"type" )
    // definição do texto interno da tag h3 atravpes da propriedade innerText
    h3.innerText = type1
    pokemonTypes.innerHTML = h3.outerHTML
} else {
    const type2 = data.types[1].type.name
    const h3 = document.createElement('h3')
    h3.setAttribute('class',type1+" "+"type" )
    h3.innerText = type1
    const h3_2 = document.createElement('h3')
    h3_2.setAttribute('class',type2+" "+"type" )
    h3_2.innerText = type2
    pokemonTypes.innerHTML = h3.outerHTML + "<br>" + h3_2.outerHTML ;
}

pokmeonAbilities.innerHTML = "<hr><br>" + data.abilities[0].ability.name + "<br>" + "<br>" + data.abilities[1].ability.name + "<br><br><hr>";

pokeStats.innerHTML = data.stats[0].stat.name + "  :  " + data.stats[0].base_stat + "<br>";
pokeStats1.innerHTML = data.stats[1].stat.name + "  :  " + data.stats[1].base_stat + "<br>";
pokeStats2.innerHTML = data.stats[2].stat.name + "  :  " + data.stats[2].base_stat + "<br>";
pokeStats3.innerHTML = data.stats[3].stat.name + "  :  " + data.stats[3].base_stat + "<br>";
pokeStats4.innerHTML = data.stats[4].stat.name + "  :  " + data.stats[4].base_stat + "<br>";
pokeStats5.innerHTML = data.stats[5].stat.name + "  :  " + data.stats[5].base_stat + "<br>";

     input.value='';
     searchPokemon=data.id;
    } else {
        pokemonImage.style.display = 'none';
        pokemonName.innerHTML = 'not found :c';
        pokemonNumber.innerHTML = '';
    }

}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    renderPokemon(input.value.toLowerCase());
    input.value = '';
})

buttonPrev.addEventListener('click', () => {
   searchPokemon -= 1;
   renderPokemon(searchPokemon)
})

buttonNext.addEventListener('click', () => {
    searchPokemon += 1;
    renderPokemon(searchPokemon)
})

renderPokemon(searchPokemon);

// Obtém elementos do DOM
var modal = document.getElementById("modal");
var btn = document.getElementById("button btn-info");
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abre o modal
btn.onclick = function() {
    console.log('disparei')
  modal.style.display = "flex"; // Usar flex para centralizar o modal
  modal.classList.add("show"); // Adiciona a classe para iniciar a animação
}

// Quando o usuário clicar no botão de fechar, fecha o modal
span.onclick = function() {
  modal.style.display = "none";
  modal.classList.remove("show"); // Remove a classe para parar a animação
}

// Quando o usuário clicar fora do modal, fecha-o
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modal.classList.remove("show"); // Remove a classe para parar a animação
  }
}





