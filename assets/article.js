// document.addEventListener("DOMContentLoaded", function() {
//     const article = document.getElementById("article");
//     const displayMore = document.getElementById("afficherPlus");
//     const displayLess = document.getElementById("afficherMoins");

//     const images = [
//         "./img/blog/Cappadocia-turquie-630x420.jpg",
//         // Ajoutez d'autres chemins d'images ici
//     ];

//     // Ajouter chaque image à la balise #article
//     images.forEach(imagePath => {
//         const imgElement = document.createElement("img");
//         imgElement.src = imagePath;
//         imgElement.alt = "Description de l'image"; // Remplacez par la description réelle
//         article.appendChild(imgElement);
//     });
//     if (article.textContent.length > 150) {
//         article.setAttribute("articleComplet", article.textContent);
//         article.textContent = article.textContent.substring(0, 150) + "...";

//         displayMore.addEventListener("click", function() {
//             article.textContent = article.getAttribute("articleComplet");
//             displayMore.style.display = "none";
//             displayLess.style.display = "inline";
//         });

//         displayLess.addEventListener("click", function() {
//             article.textContent = article.getAttribute("articleComplet").substring(0, 150) + "...";
//             displayMore.style.display = "inline";
//             displayLess.style.display = "none";
//         });
//     } else {
//         displayMore.style.display = "none";
//         displayLess.style.display = "none"; // Masquer "Afficher Moins" si le contenu est court
//     }
// });
document.addEventListener("DOMContentLoaded", function() {
    const blog = document.getElementById("blog");

    const articles = [{
            title: "Discovering Tuzla:",
            image: "./img/blog/20240210_153319.jpg",
            text: `Istanbul's Maritime Gem Welcome to Tuzla, a coastal jewel nestled along the Marmara Sea, an integral part of Istanbul's fascinating urban tapestry in Turkey. Naval Industry and Maritime Economy: Tuzla shines particularly bright thanks to its dynamic naval industry. With its renowned shipyards, the city is the beating heart of boat and ship construction in Turkey. This flourishing activity extends beyond the local economy, significantly contributing to the national maritime economy. A Culture Deeply Connected to the Sea: Life in Tuzla is infused with the soothing influence of the sea. The local culture reflects this intimate connection with traditions rooted in fishing and navigation. Inhabitants celebrate their maritime heritage through festivals, events, and delightful cuisine featuring fresh seafood. History and Modernity Coexist: Tuzla also unveils its past through historical remnants dating back to the Byzantine and Ottoman eras. Captivating archaeological sites bear witness to the region's rich history, creating a striking contrast with the modernity of its shipyards and infrastructure. A Green and Blue Paradise: Despite its bustling industry, Tuzla offers green spaces and parks that invite relaxation. These verdant sanctuaries add a touch of serenity to residents' daily lives, providing peaceful retreats along the shore. In summary, Tuzla captivates with its harmonious blend of maritime tradition, captivating history, and a dynamic present geared toward the future. Explore its lively streets, savor its delicious cuisine, and let yourself be carried away by the enchanting charm of this exceptional maritime city.`
        },
        {
            title: "Titre de l'article 2",
            image: "",
            text: "Texte de l'article 2...",
        },
        // Ajoutez d'autres articles ici
    ];

    articles.forEach(articleInfo => {
        const articleElement = document.createElement("div");
        articleElement.className = "article";

        const titleElement = document.createElement("h2");
        titleElement.textContent = articleInfo.title;
        articleElement.appendChild(titleElement);

        const imgElement = document.createElement("img");
        imgElement.src = articleInfo.image;
        imgElement.alt = "Description de l'image"; // Remplacez par la description réelle
        articleElement.appendChild(imgElement);

        const textElement = document.createElement("p");
        textElement.textContent = articleInfo.text.substring(0, 150) + "...";
        articleElement.appendChild(textElement);

        const displayMore = document.createElement("span");
        displayMore.className = "afficherPlus";
        displayMore.textContent = "Afficher Plus";
        articleElement.appendChild(displayMore);

        const displayLess = document.createElement("span");
        displayLess.className = "afficherMoins";
        displayLess.textContent = "Afficher Moins";
        displayLess.style.display = "none"; // Masquer "Afficher Moins" par défaut
        articleElement.appendChild(displayLess);

        displayMore.addEventListener("click", function() {
            textElement.textContent = articleInfo.text;
            displayMore.style.display = "none";
            displayLess.style.display = "inline";
        });

        displayLess.addEventListener("click", function() {
            textElement.textContent = articleInfo.text.substring(0, 150) + "...";
            displayMore.style.display = "inline";
            displayLess.style.display = "none";
        });

        blog.appendChild(articleElement);
    });
});