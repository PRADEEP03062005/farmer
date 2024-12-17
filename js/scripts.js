document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let city = document.getElementById('city').value;
    let pincode = document.getElementById('pincode').value;

    if (name && city && pincode) {
        localStorage.setItem('userDetails', JSON.stringify({ name, city, pincode }));
        window.location.href = 'vegetables.html';
    } else {
        alert("Please fill out all fields.");
    }
});
