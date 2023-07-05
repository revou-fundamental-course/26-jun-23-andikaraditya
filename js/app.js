let images = [
    "./img/casey-horner-017h9kTu6cc-unsplash.jpg", 
    "./img/courtney-corlew-l5b_Jd8Ttfg-unsplash.jpg",
    "./img/nik-shuliahin-of89Cd3oFuk-unsplash.jpg",
    "./img/simon-hurry-yWeQdUKa4-k-unsplash.jpg"
]

let i = 0

function changeImg(){
	document.slide.src = images[i];
	if(i < images.length - 1){
	  i++; 
	} else { 
		i = 0;
	}
	setTimeout("changeImg()", 5000);
}

// Run function when page loads
window.onload=changeImg;