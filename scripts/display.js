function displayCards(hound) {
  let petsDiv = document.getElementById('hounds');
  let tmp =
    `
  <div class="hound">
  <h3>${hound.name}</h3>
  <p>Age: ${hound.age}</p>
  <p>Gender: ${hound.gender}</p>
  <p>Breed: ${hound.breed}</p>
  <p>Service: ${hound.service}</p>
  <p>Owner: ${hound.owner}</p>
  <p>Tel: ${hound.phone}</p>
  </div>

  `;
  petsDiv.innerHTML += tmp;
}