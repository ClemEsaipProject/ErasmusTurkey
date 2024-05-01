document.addEventListener("DOMContentLoaded", function() {
    const blog = document.getElementById("blog");

    const articles = [{
            title: "Discovering Tuzla:",
            images: [{
                    src: "./img/blog/20240213_155727.jpg",
                    alt: "Description de l'image 1"
                },
                {
                    src: "./img/blog/20240210_153319.jpg",
                    alt: "Description de l'image 2"
                },

            ],

            text: `Istanbul's Maritime Gem Welcome to Tuzla, a coastal jewel nestled along the Marmara Sea, an integral part of Istanbul's fascinating urban tapestry in Turkey. Naval Industry and Maritime Economy: Tuzla shines particularly bright thanks to its dynamic naval industry. With its renowned shipyards, the city is the beating heart of boat and ship construction in Turkey. This flourishing activity extends beyond the local economy, significantly contributing to the national maritime economy. A Culture Deeply Connected to the Sea: Life in Tuzla is infused with the soothing influence of the sea. The local culture reflects this intimate connection with traditions rooted in fishing and navigation. Inhabitants celebrate their maritime heritage through festivals, events, and delightful cuisine featuring fresh seafood. History and Modernity Coexist: Tuzla also unveils its past through historical remnants dating back to the Byzantine and Ottoman eras. Captivating archaeological sites bear witness to the region's rich history, creating a striking contrast with the modernity of its shipyards and infrastructure. A Green and Blue Paradise: Despite its bustling industry, Tuzla offers green spaces and parks that invite relaxation. These verdant sanctuaries add a touch of serenity to residents' daily lives, providing peaceful retreats along the shore. In summary, Tuzla captivates with its harmonious blend of maritime tradition, captivating history, and a dynamic present geared toward the future. Explore its lively streets, savor its delicious cuisine, and let yourself be carried away by the enchanting charm of this exceptional maritime city.`
        },
        {
            title: "Transport on Istanbul ",
            images: [{
                    src: "./img/blog/20240218_182307.jpg",
                    alt: "Description de l'image 1"
                },
                // {
                //     src: "./img/blog/20240222_150900.jpg",
                //     alt: "Description de l'image 2"
                // },
                // {
                //     src: "image3.jpg",
                //     alt: "Description de l'image 3"
                // }
            ],

            text: `Istanbul, a vast Turkish city divided into 40 districts, provides an integrated public transportation network managed by the rechargeable Istanbulkart. This card facilitates access to buses, the Marmaray (under the Bosphorus tunnel), the metro, and ferries, streamlining payments into a single method.

            Buses form the backbone of the network, ensuring essential connectivity. The Marmaray offers a swift crossing under the Bosphorus, while the metro facilitates underground travel. Ferries offer a picturesque experience.
            
            The Istanbulkart, rechargeable and usable everywhere, eliminates the need to juggle different tickets. Fares remain affordable, with discounts for students and the elderly. In summary, Istanbul's transportation system, powered by the Istanbulkart, provides a variety of convenient options to explore the city, highlighting its efficiency and accessibility.`,
        },

        {
            title: "Exploring Turkish Gastronomic Culture",
            images: [{
                src: "./img/blog/20240213_153907.jpg",
                alt: "Description de l'image 1"
            }, ],
            text: `During my Erasmus journey in Turkey, one of the most enriching experiences has been exploring the rich gastronomic culture of this vibrant country. Turkish cuisine is a delightful fusion of flavors, influenced by centuries of history and diverse cultural influences. From traditional dishes like kebabs and mezze to indulgent sweets like baklava, every meal tells a story of Turkish tradition and hospitality. The bustling markets, with their colorful array of fresh produce and aromatic spices, offer a sensory adventure for any food enthusiast. Whether cooking with locals or dining at charming cafes, every bite has been a journey of discovery, connecting me more deeply with the culture and people of Turkey. As my Erasmus adventure continues, I look forward to savoring more of Turkey's culinary treasures and creating lasting memories through its delicious cuisine.`,
        },

        {
            title: "Exploring Şile: A Weekend Getaway at Kaçkar Kamp",
            images: [{
                src: "img/blog/20240427_153124.jpg",
                alt: "Description de l'image 1"
            }, ],
            text: `
            Last weekend, I ventured to Şile's Kaçkar Kamp for a rejuvenating escape. Amidst lush landscapes, I connected with nature and fellow campers through hikes and communal activities. Indulging in traditional Turkish cuisine, I sampled savory kebabs, delightful desserts, and local spirits, enhancing my gastronomic journey. Guided explorations unveiled Şile's natural wonders, from forest trails to secluded beaches. Capturing captivating moments, from vibrant sunsets to starlit nights, I crafted timeless memories. Overall, my Şile retreat was a fulfilling blend of nature, community, cuisine, and unforgettable experiences.`,
        },
        // Ajoutez d'autres articles ici
    ];

    articles.forEach(articleInfo => {
        const articleElement = document.createElement("div");
        articleElement.className = "article";

        const titleElement = document.createElement("h2");
        titleElement.textContent = articleInfo.title;
        articleElement.appendChild(titleElement);

        // const imgElement = document.createElement("img");
        // imgElement.src = articleInfo.image;
        // imgElement.alt = "Description de l'image"; // Remplacez par la description réelle
        // articleElement.appendChild(imgElement);
        articleInfo.images.forEach(imageInfo => {
            const imgElement = document.createElement("img");
            imgElement.src = imageInfo.src;
            imgElement.alt = imageInfo.alt;
            articleElement.appendChild(imgElement);
        });

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