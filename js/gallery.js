// External JavaScript for Pet Olympics

function openModal(imageSrc) {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modal-image').src = imageSrc;
    document.body.classList.add('modal-open');
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.body.classList.remove('modal-open');
}
