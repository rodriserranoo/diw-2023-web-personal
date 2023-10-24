const images = [
    { src: ".png", url: "https://www.marca.com" },
    { src: ".png", url: "https://www.youtube.com" }
  ];
  
  let currentImageIndex = 0;
  const imgElement = document.getElementById('currentImg');
  
  function showImage() {
    imgElement.src = images[currentImageIndex].src;
  }
  
  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage();
  }
  
  function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage();
  }
  
  function redirectToPage(index) {
    window.location.href = images[index].url;
  }
  
  showImage();
  
