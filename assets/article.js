
document.addEventListener("DOMContentLoaded", function () {
    const article = document.getElementById("article");
    const displayMore = document.getElementById("afficherPlus");
    const displayLess = document.getElementById("afficherMoins");
    
    const images = [
        "./img/blog/Cappadocia-turquie-630x420.jpg",
        // Ajoutez d'autres chemins d'images ici
    ];

    // Ajouter chaque image à la balise #article
    images.forEach(imagePath => {
        const imgElement = document.createElement("img");
        imgElement.src = imagePath;
        imgElement.alt = "Description de l'image";  // Remplacez par la description réelle
        article.appendChild(imgElement);
    });
    if (article.textContent.length > 150) {
        article.setAttribute("articleComplet", article.textContent);
        article.textContent = article.textContent.substring(0, 150) + "...";

        displayMore.addEventListener("click", function () {
            article.textContent = article.getAttribute("articleComplet");
            displayMore.style.display = "none";
            displayLess.style.display = "inline";
        });

        displayLess.addEventListener("click", function () {
            article.textContent = article.getAttribute("articleComplet").substring(0, 150) + "...";
            displayMore.style.display = "inline";
            displayLess.style.display = "none";
        });
    } else {
        displayMore.style.display = "none";
        displayLess.style.display = "none"; // Masquer "Afficher Moins" si le contenu est court
    }
});
