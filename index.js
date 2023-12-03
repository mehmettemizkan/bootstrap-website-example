function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");

        if (dots.style.display === "none") {
                dots.style.display = "inline";
                btnText.innerHTML = "Devamını Oku";
                moreText.style.display = "none";
        } else {
                dots.style.display = "none";
                btnText.innerHTML = "Daha Az Göster";
                moreText.style.display = "inline";
        }
}