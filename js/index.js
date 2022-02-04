//let addMonster = false;
document.addEventListener("DOMContentLoaded", () => {
  const createMonster = document.getElementById('create-monster');
  monsterSubmitForm()
  const monsterCointainer = document.getElementById('monster-container');
  const monsterForm = document.querySelector('form');
  
  monsterForm.addEventListener('submit', (event) => {
    event.preventDefault()

    let monsterObj = {
      name: event.target.name.value,
      age: event.target.age.value,
      description: event.target.description.value
    }

    handleSubmit(monsterObj)
    console.log('monster')
  })

  function getAllMonsters() {
    fetch('http://localhost:3000/monsters')
    .then(res => res.json())
    //.then(monsterData => console.log(monsterData))
    .then(monsterData => {
      // grab the monster container
      // const monsterCointainer = document.getElementById('monster-container');
      monsterData.slice(0, 50).forEach(monster => {
        // declare new div to hold the monster information
        const card = document.createElement('div')
        // set innerHTML to have all info I want on the page
        card.innerHTML = `
        <div class="card" id='${monster.id}'>
        <h2>${monster.name}</h2>
        <h3>${monster.age}</h3>
        <p>${monster.description}</p>
      </div>
        `
        // append info to the dom
        monsterCointainer.appendChild(card)
      });
    })
  }
  
  function handleSubmit(monsterObj){
    addMonster(monsterObj);
  }

  function addMonster(monsterObj) {
    //console.log(monsterObj, 'monsterobj')
    fetch('http://localhost:3000/monsters',{
      method: 'POST',
      headers:
      {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: monsterObj.name, 
        age: monsterObj.age, 
        description: monsterObj.description 
      })
    })
    .then(res => res.json())
    .catch(e => console.log(monster))
  }
  
  function monsterSubmitForm() {
    const form = document.createElement('form')
    form.innerHTML = `
    <form class="add-monster-form">
      <h3>Add a monster!</h3>

      <input
        type='text'
        name='name'
        value=""
        placeholder="Enter a monster's name..."
        class="input-text"
      />
      <br />
      <input
        type='text'
        name='age'
        value=""
        placeholder="Enter a monster's age..."
        class="input-text"
      />
      <br />
      <input
        type='text'
        name='description'
        value=""
        placeholder="Enter a monster's description..."
        class="input-text"
      />
      <br />
      <input
        type="submit"
        name="submit"
        value="Add Monster"
        class="submit"
      />
    </form>
    `
    console.log(createMonster)
    createMonster.appendChild(form)
  }

  getAllMonsters()
})