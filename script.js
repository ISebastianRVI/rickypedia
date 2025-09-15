const apiUrl = 'https://rickandmortyapi.com/api/character/4'; 

async function fetchCharacterData() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);

    document.getElementById('character-img').src = data.image;
    document.getElementById('character-name').textContent = data.name;
    document.getElementById('character-status').textContent = `Status: ${data.status}`;
    document.getElementById('character-location').textContent = `Location: ${data.location.name}`;
    document.getElementById('character-origin').textContent = `Origin: ${data.origin.name}`;
    document.getElementById('character-episode').textContent = `First seen in: ${data.episode[0].split('/').pop()}`;
}

fetchCharacterData();
