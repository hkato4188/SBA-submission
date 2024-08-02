document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('sign-up-form').addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Thank you for signing up your pet!');
    });
});