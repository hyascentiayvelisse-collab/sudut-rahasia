// Fungsi Masuk ke Ruangan
function enterRoom(roomId) {
    const mainHall = document.getElementById('main-hall');
    const targetRoom = document.getElementById(roomId);

    // Animasi keluar dari hall utama
    mainHall.style.transform = "scale(1.1)";
    mainHall.classList.remove('active');

    // Menampilkan ruangan yang dipilih
    setTimeout(() => {
        targetRoom.classList.add('active');
        window.scrollTo(0, 0);
    }, 400);
}

// Fungsi Kembali ke Ruang Utama (Pilihan Pintu)
function backToHall(currentRoomId) {
    const mainHall = document.getElementById('main-hall');
    const currentRoom = document.getElementById(currentRoomId);

    currentRoom.classList.remove('active');

    setTimeout(() => {
        mainHall.style.transform = "scale(1)";
        mainHall.classList.add('active');
    }, 400);
}

// Efek Light Sparkles
const bgDecoration = document.getElementById('bg-decoration');
const totalSparkles = 25;

for (let i = 0; i < totalSparkles; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    
    sparkle.style.top = Math.random() * 100 + 'vh';
    sparkle.style.left = Math.random() * 100 + 'vw';
    
    const size = Math.random() * 4 + 2; 
    sparkle.style.width = size + 'px';
    sparkle.style.height = size + 'px';
    sparkle.style.animationDuration = (Math.random() * 4 + 4) + 's';
    sparkle.style.animationDelay = Math.random() * 5 + 's';
    
    bgDecoration.appendChild(sparkle);
}