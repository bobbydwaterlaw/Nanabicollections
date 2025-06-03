// Scroll navbar
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 25) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Modal zoom image saat klik gambar ATAU tombol "Quick View"
function openModal(element) {
    // Ambil langsung src dari elemen gambar
    const src = element.getAttribute('src');

    document.getElementById("modal-img").src = src;
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
