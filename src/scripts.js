const cardColors = [
  {
    type: 'normal',
    color: '#A8A878'
  },
  {
    type: 'flying',
    color: '#A890F0'
  },
  {
    type: 'fire',
    color: '#DD6C6C'
  },
  {
    type: 'water',
    color: '#688FF0'
  },
  {
    type: 'grass',
    color: '#78C850'
  },
  {
    type: 'electric',
    color: '#F8D02F'
  },
  {
    type: 'ice',
    color: '#98D8D8'
  },
  {
    type: 'fighting',
    color: '#C03028'
  },
  {
    type: 'poison',
    color: '#A040A1'
  },
  {
    type: 'ground',
    color: '#E0C068'
  },
  {
    type: 'psychic',
    color: '#F85888'
  },
  {
    type: 'bug',
    color: '#A8B820'
  },
  {
    type: 'rock',
    color: '#B9A038'
  },
  {
    type: 'ghost',
    color: '#705899'
  },
  {
    type: 'dark',
    color: '#705848'
  },
  {
    type: 'dragon',
    color: '#7038F8'
  },
  {
    type: 'steel',
    color: '#B8B8D0'
  },
  {
    type: 'fairy',
    color: '#F0B6BC'
  }
]

async function handleClick(e) {
  e.preventDefault()
  let searching = e.target[0].value.trim().toLowerCase()
  if (searching.length !== 0) {
    let pokemon = await getPokemon(searching)
    if (pokemon !== 'not found') {
      let delT = document.getElementById('types')
      let chil = delT.children.length
      for (let i = 0; i < chil; i++) {
        let t = document.getElementById(`p-${i}`)
        delT.removeChild(t)
      }
      let types = []
      for (let i = 0; i < pokemon.types.length; i++) {
        cardColors.forEach((pokType) => {
          if (pokType.type === pokemon.types[i].type.name) {
            let n = {
              type: pokemon.types[i].type.name,
              color: pokType.color
            }
            types.push(n)
          }
        })
      }
      let color = types[0].color
      let card = document.getElementById("card-color")
      card.style.background = color
      let pokemonId = deleteZero(pokemon.id.toString())
      document.getElementById('card-id').innerText = pokemonId
      document.getElementById('card-img').setAttribute('src', pokemon.sprites.other['official-artwork'].front_default)
      document.getElementById('card-img').setAttribute('alt', pokemon.name)
      document.getElementById('card-hp').innerText = "HP " + pokemon.stats[0].base_stat.toString()
      document.getElementById('name').innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
      document.getElementById('attack').innerText = pokemon.stats[1].base_stat.toString()
      document.getElementById('defense').innerText = pokemon.stats[2].base_stat.toString()
      document.getElementById('speed').innerText = pokemon.stats[5].base_stat.toString()
      for (let i = 0; i < types.length; i++) {
        let newP = document.createElement('p')
        newP.className = 'type'
        newP.innerText = types[i].type.charAt(0).toUpperCase() + types[i].type.slice(1)
        newP.style.color = '#FFFFFF'
        newP.style.background = types[i].color
        newP.id = `p-${i}`
        document.getElementById('types').appendChild(newP)
      }
      document.getElementById('weight').innerText = `${(pokemon.weight / 10).toString()} kg`
      document.getElementById('height').innerText = `${(pokemon.height / 10).toString()} m`
      card.style.display = "flex";
    } else {
      let card = document.getElementById("card-color")
      card.style.display = "none";
      document.getElementById("GET-pokemon").focus()
      alert("We couldn't find this pokemon, did you type it correctly?")
    }
  } else {
    alert('You must type a pokemon')
  }
}

async function getPokemon(name) {
  try {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    let data = await res.json()
    return data
  } catch (error) {
    return 'not found'
  }
}

function deleteZero(id) {
  switch (id.length) {
    case 1:
      return `#000${id}`
    case 2:
      return `#00${id}`
    case 3:
      return `#0${id}`
    case 4:
      return `#${id}`
  }
}