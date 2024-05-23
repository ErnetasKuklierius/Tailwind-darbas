


function spam() {
    var delay = setInterval(function () {
        for (let i = 0; i < 1; i++) {
        
            chipi();
        }
    }, 1000);
    setTimeout(function () {
        clearInterval(delay);
    }, 13000);
};


function chipi() {
const chapa = [
    { id: 'catto1', src: 'chipi-chipi.mp4', width: 100, height: 100, autoplay: true, loop:true},
    { id: 'catto2', src: 'chipi-chipi.mp4', width: 100, height: 100, autoplay: true, loop:true}
];

chapa.forEach(chapa => {
const chapaElement = document.createElement("video");
chapaElement.src = chapa.src;
chapaElement.width = chapa.width;
chapaElement.height = chapa.height;
chapaElement.autoplay = chapa.autoplay;
chapaElement.loop = chapa.loop;

const container = document.getElementById("Container");
container.appendChild(chapaElement);
});
    chipiChipi();
};

function chipiChipi() {
    const chapa = [
    { id: 'catto3', src: 'chipi-chipi.mp4', width: 100, height: 100, autoplay:true, loop:true},
    { id: 'catto4', src: 'chipi-chipi.mp4', width: 100, height: 100, autoplay:true, loop:true}
];

chapa.forEach(chapa => {
const chapaElement = document.createElement("video");
chapaElement.src = chapa.src;
chapaElement.width = chapa.width;
chapaElement.height = chapa.height;
chapaElement.autoplay = chapa.autoplay;
chapaElement.loop = chapa.loop;
    
const container = document.getElementById("Container2");
container.appendChild(chapaElement);
});
};


function uploadfile() {
    const uploadwindow = document.getElementById("uploadwindow");
    uploadwindow.classList.replace("hidden","flex");

};

  
  function closePopup() {
  
    if (uploadwindow.classList.contains("flex")) {
      uploadwindow.classList.replace("flex", "hidden");
    }
  }