```javascript
document.addEventListener('DOMContentLoaded', (event) => {
  loadTitle();
});

function loadTitle() {
  const titleSection = document.getElementById('title-section');
  
  fetch('/db/database.js')
    .then(response => response.json())
    .then(data => {
      titleSection.innerHTML = `
        <h1 class="text-4xl font-bold text-white">${data.title}</h1>
        <p class="text-xl text-gray-300">${data.subtitle}</p>
      `;
    })
    .catch(error => console.error('Error:', error))
    .finally(() => {
      document.dispatchEvent(new CustomEvent('titleLoaded'));
    });
}
```