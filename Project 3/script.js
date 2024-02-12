const breedInput = document.getElementById('breedInput');
const suggestions = document.getElementById('suggestions');
const showImagesBtn = document.getElementById('showImagesBtn');
const imageContainer = document.getElementById('imageContainer');

breedInput.addEventListener('input', () => {
    const query = breedInput.value.trim();
    if (query.length === 0) {
        suggestions.innerHTML = '';
        return;
    }
    fetch(`https://dog.ceo/api/breeds/list/all`)
        .then(response => response.json())
        .then(data => {
            const breeds = Object.keys(data.message);
            const filteredBreeds = breeds.filter(breed => breed.startsWith(query));
            const html = filteredBreeds.map(breed => `<div>${breed}</div>`).join('');
            suggestions.innerHTML = html;
        })
        .catch(error => console.error('Error fetching breed list:', error));
});

showImagesBtn.addEventListener('click', () => {
    const breed = breedInput.value.trim();
    fetch(`https://dog.ceo/api/breed/${breed}/images/random/5`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                const images = data.message;
                let index = 0;
                setInterval(() => {
                    if (index >= images.length) index = 0;
                    imageContainer.innerHTML = `<img src="${images[index]}" alt="${breed}">`;
                    index++;
                }, 5000);
            } else {
                imageContainer.innerHTML = 'No such breed';
            }
        })
        .catch(error => console.error('Error fetching images:', error));
});
