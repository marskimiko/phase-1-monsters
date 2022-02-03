//let addMonster = false;

document.addEventListener("DOMContentLoaded", () => {
  const createMonster = document.getElementById('create-monster');
  const monsterCointainer = document.getElementById('monster-container');
  //const back = document.getElementById('back');
  //const forward = document.getElementById('forward');

  
  function getAllMonsters() {
    fetch('http://localhost:3000/monsters')
    .then(res => res.json())
    .then(monsterData => {
      // grab the monster container
      // const monsterCointainer = document.getElementById('monster-container');
      monsterData.forEach(monster => {
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
    createMonster.appendChild(form)
  }

  // const createMonster = document.getElementById('create-monster').addEventListener('submit', (e) => {
  //   handleSubmit(e)
  // })
  // console.log(createMonster)
  
  // function handleSubmit(e){
  //   e.preventDefault()

  //   let monsterObj = {
  //     name: e.target.name.value,
  //     age: e.target.age.value,
  //     description: e.target.description.value
  //   }
  //   getAllMonsters(monsterObj);
  //   addMonster(monsterObj);
  // }

  // function addMonster(monsterObj) {
  //   console.log(monsterObj, 'monsterobj')
  //   fetch('http://localhost:3000/monsters',{
  //     method: 'POST',
  //     headers:
  //     {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     },
  //     body:
  //     { 
  //       name: string, 
  //       age: number, 
  //       description: string 
  //     }
  //   })
  // }


  function intialize() {
    getAllMonsters()
  }
  intialize()
})























// get http://localhost:3000/monsters

// ## Deliverables

// - When the page loads, show the first 50 monsters. Each monster's name, age, and
//   description should be shown.
// - Above your list of monsters, you should have a form to create a new monster.
//   You should have fields for name, age, and description, and a 'Create Monster
//   Button'. When you click the button, the monster should be added to the list
//   and saved in the API.
// - At the end of the list of monsters, show a button. When clicked, the button
//   should load the next 50 monsters and show them