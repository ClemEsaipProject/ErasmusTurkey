document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById("gallery");

    const images = [{
            src: "./img/blog/20240210_153319.jpg",
            alt: "Description de l'image 1",
        },
        {
            src: "./img/gallery/image2.jpg",
            alt: "Description de l'image 2",
        },
        {
            src: "./img/gallery/image3.jpg",
            alt: "Description de l'image 3",
        },
        // Ajoutez d'autres images ici
    ];

    images.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        imgElement.loading = "lazy"; // Utiliser le chargement paresseux pour les images

        gallery.appendChild(imgElement);
    });
});