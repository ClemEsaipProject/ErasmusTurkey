document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById("gallery");

    const images = [{
            src: "./img/galleries/20240204_145548.jpg",
            alt: "Description de l'image 2",
        }, {
            src: "./img/blog/20240210_153319.jpg",
            alt: "Description de l'image 1",
        },

        {
            src: "./img/galleries/20240205_115531.jpg",
            alt: "Description de l'image 3",
        },
        {
            src: "./img/galleries/20240205_214954.jpg",
            alt: "Description de l'image 3",
        },
        {
            src: "./img/galleries/20240206_122356.jpg",
            alt: "Description de l'image 3",
        },
        {
            src: "./img/galleries/20240206_224229.jpg",
            alt: "Description de l'image 3",
        },
        {
            src: "./img/galleries/20240207_104817.jpg",
            alt: "Description de l'image 3",
        },
        {
            src: "./img/galleries/20240209_195613.jpg",
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