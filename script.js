
document.getElementById('reservation-form').addEventListener('submit', function(e) {
    e.preventDefault(); 


    const name = document.getElementById('name').value;
    const guests = document.getElementById('guests').value;
    const time = document.getElementById('time').value;


    const li = document.createElement('li');
    li.innerHTML = `
        <strong>${name}</strong> - ${guests} guest(s) at ${time}
        <button class="delete-btn">Delete</button>
    `;


    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
    });


    document.getElementById('reservation-list').appendChild(li);

  
    document.getElementById('name').value = '';
    document.getElementById('guests').value = '';
    document.getElementById('time').value = '';
});
