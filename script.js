function startAudio() {
    const thunderAudio = document.getElementById('thunder-audio');
    const soundBtn = document.getElementById('sound-btn');
    
    if (thunderAudio.paused) {
        thunderAudio.volume = 0.5;
        thunderAudio.play();
        soundBtn.innerText = "🔇 Matikan Suara";
        soundBtn.style.background = "#ffb703";
        soundBtn.style.color = "#000";
    } else {
        thunderAudio.pause();
        soundBtn.innerText = "🔊 Hidupkan Suara";
        soundBtn.style.background = "transparent";
        soundBtn.style.color = "#ffb703";
    }
}

function changeShowcase(element, mediaSrc, title, desc) {
    const mainVid = document.getElementById("main-video");
    const mainTitle = document.getElementById("main-title");
    const mainDesc = document.getElementById("main-desc");

    mainVid.style.opacity = 0;

    setTimeout(() => {
        mainVid.src = mediaSrc;
        mainTitle.innerText = title; 
        mainDesc.innerText = desc; 
        mainVid.style.opacity = 1; 
    }, 300);

    const allThumbs = document.querySelectorAll('.thumb');
    allThumbs.forEach(thumb => thumb.classList.remove('active'));
    element.classList.add('active');
}

function jamBerjalan() {
    let tanggal = new Date();
    // Format tanggal yang lebih rapi
    document.getElementById("tanggal").innerHTML = tanggal.toLocaleString('id-ID'); 
}

document.addEventListener("DOMContentLoaded", function() {
    jamBerjalan(); 
    setInterval(jamBerjalan, 1000);
});

function tampil() {
    alert("Memulai pemutaran video spesial Zenitsu!");
    const modal = document.getElementById('video-modal');
    const specialVid = document.getElementById('special-video');
    
    modal.style.display = 'flex';
    specialVid.play();
}

function show() {
    alert("Web ini dibuat oleh Meilan Ulfia Nurfari’ah untuk tugas Web Design Development.");
}

function closeVideo() {
    const modal = document.getElementById('video-modal');
    const specialVid = document.getElementById('special-video');
    
    specialVid.pause();
    specialVid.currentTime = 0;
    modal.style.display = 'none';
}