const projectsContent = document.getElementsByClassName("projects-content")[0]

const projects = [
    {
        title: "Multi Snakes",
        description: "A game which allows two players to play snakes on the same device",
        imageLink: "./project-images/snake.webp",
        imageStyle: "",
        details: [
            "<span style=\"font-weight: 800\">Tools:</span> SFML, TGUI, C++",
            "Players can choose whether to play singleplayer or multiplayer"
        ],
        result: "https://gamejolt.com/games/multisnake/268447",
        source: "https://github.com/Flaze07/multi-snake"
    },
    {
        title: "Evade",
        description: "Game where player have to dodge falling rocks",
        imageLink: "./project-images/evade.png",
        imageStyle: "background-position: 1px -10px; background-size: 120%; background-repeat: no-repeat;",
        details: [
            "<span style=\"font-weight: 800\">Tools:</span> Dlang, SFML",
            "scores are stored in .txt"
        ],
        result: "https://gamejolt.com/games/evade/353680",
        source: ""
    },
    {
        title: "Za Cleaner",
        description: "A simple platformer games",
        imageLink: "./project-images/zacleaner.png",
        imageStyle: "background-position: -10px -20px; background-size: 150%; background-repeat: no-repeat;",
        details: [
            "<span style=\"font-weight: 800\">Tools:</span> Godot, GDScript",
            "There are multiple levels",
            "There's a boss in the final level"
        ],
        result: "https://flaze07.itch.io/za-cleaner",
        source: ""
    },
    {
        title: "Bulan Ini",
        description: "Daily Planning games",
        imageLink: "./project-images/bulanini.png",
        imageStyle: "background-position: 0px -8px; background-size: 110%; background-repeat: no-repeat;",
        details: [
            "<span style=\"font-weight: 800\">Tools:</span> Godot, GDScript",
            "Short game of which player is able to finish in roughly 10-20 minutes"
        ],
        result: "https://itch.io/jam/bgdjam-2022/rate/1758706",
        source: "https://github.com/gitty20222/Dunia-Lain-BGDJam"
    },
    {
        title: "Hell Dodge",
        description: "Platformer survival game",
        imageLink: "./project-images/helldodge.png",
        imageStyle: "background-position: -40px 0px; background-size: 120%; background-repeat: no-repeat;",
        details: [
            "<span style=\"font-weight: 800\">Tools:</span> Unity, C#",
            "platformer survival games where player must dodge projectiles and avoid falling into the lava"
        ],
        result: "https://itch.io/jam/bgdjam-2022/rate/1758706",
        source: "https://github.com/gitty20222/Dunia-Lain-BGDJam"
    },
    {
        title: "Brain Freeze",
        description: "a BF interpreter",
        imageLink: "./project-images/brainfreeze.png",
        imageStyle: "background-position: -1px 0px; background-size: cover;",
        details: [
            "<span style=\"font-weight: 800\">Tools:</span> Tauri, HTML/CSS, Javascript",
            "The interpreter runs by first parsing the entire input to search for loops, only after that, it runs the code"
        ],
        result: "https://itch.io/jam/bgdjam-2022/rate/1758706",
        source: "https://github.com/gitty20222/Dunia-Lain-BGDJam"
    }
]

window.addEventListener("load", () => {
    projects.forEach((project, idx) => {
        const projectCard = document.createElement("div");

        projectCard.className = "projects-card"

        /**
         * input to handle hiding and showing project details
         */

        const projectsCardToggle = document.createElement("input")
        projectsCardToggle.type = "checkbox"
        projectsCardToggle.className = "projects-card-toggle"
        projectsCardToggle.id = `project-${idx}`

        projectCard.appendChild(projectsCardToggle)

        /**
         * creating the project detail parts of the card
         */

        const projectDetail = document.createElement("div")
        projectDetail.className = "projects-detail"

        /**
         * creating an element to handle the closing of the detail
         */

        const closeDetail = document.createElement("label")
        closeDetail.className = "projects-close-detail"
        closeDetail.htmlFor = `project-${idx}`

        const closeDetailIcon = document.createElement("div")
        closeDetailIcon.className = "projects-close-icon"

        closeDetail.appendChild(closeDetailIcon)

        projectDetail.appendChild(closeDetail)

        /**
         * creating an element that'll show the project details
         */

        const projectDetails = document.createElement("ul")
        
        project.details.forEach(text => {
            const li = document.createElement("li")
            li.innerHTML = text

            projectDetails.appendChild(li)
        })

        projectDetail.appendChild(projectDetails)

        /**
         * Creates an element that'll redirect the user to
         * the source and the result
         */
        
        const projectLinks = document.createElement("projects-links")
        projectLinks.className = "projects-links"

        /**
         * Creating the result icon and button
         */
        const result = document.createElement("a")
        result.href = project.result
        result.target = "_blank"
        
        const resultTooltip = document.createElement("div")
        resultTooltip.className = "tooltip"
        resultTooltip.textContent = "Result"

        result.appendChild(resultTooltip)

        const resultIcon = document.createElement("div")
        resultIcon.className = "projects-links-result"
        
        result.appendChild(resultIcon)

        projectLinks.appendChild(result)

        /**
         * Creating the source icon and button if there's one
         */

        if(project.source !== "") {
            const source = document.createElement("a")
            source.href = project.source
            source.target = "_blank"
    
            const sourceTooltip = document.createElement("div")
            sourceTooltip.className = "tooltip"
            sourceTooltip.textContent = "Source"
    
            source.appendChild(sourceTooltip)
    
            const sourceIcon = document.createElement("div")
            sourceIcon.className = "projects-links-source"
    
            source.appendChild(sourceIcon)
    
            projectLinks.appendChild(source)
        }


        projectDetail.appendChild(projectLinks)

        projectCard.appendChild(projectDetail)

        /**
         * Creating an element to show image and summary of 
         * project
         */

        /**
         * Element that will handle opening the project
         * details
         */
        const openProjectDetail = document.createElement("label")
        openProjectDetail.htmlFor = `project-${idx}`

        const projectImage = document.createElement("div")
        projectImage.className = "projects-image"
        projectImage.style = `background-image: url(${project.imageLink}); ${project.imageStyle}`

        openProjectDetail.appendChild(projectImage)
        
        projectCard.appendChild(openProjectDetail)

        /**
         * Creating element to show the title and summary
         */

        const cardContent = document.createElement("div")
        cardContent.className = "projects-card-content"
        
        const projectTitle = document.createElement("div")
        projectTitle.className = "projects-title"
        projectTitle.textContent = project.title

        cardContent.appendChild(projectTitle)

        const projectDescription = document.createElement("div")
        projectDescription.className = "projects-description"
        projectDescription.textContent = project.description

        cardContent.appendChild(projectDescription)

        projectCard.appendChild(cardContent)

        projectsContent.appendChild(projectCard)
    })
})