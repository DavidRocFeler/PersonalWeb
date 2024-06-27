class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository {
    constructor() {
        this.activities = [];
        this.id = 1;
    }
   
    // Un método que retorna todas las actividades
    getAllActivities = () => this.activities;
        
    // Un método que recibe datos de una actividad nueva y la guarda en su array
    createActivity = (title, description, imgUrl) => {
        const activity = new Activity(this.id, title, description, imgUrl);
        this.id++;
        this.activities.push(activity);
    }

    // Un método que permite filtrar las actividades 
    deleteActivity = (id) => {
        this.activities = this.activities.filter(activity => activity.id !== id);
        console.log(this.activities);
    }
}

function buildActivity(activity) {
    const card = document.createElement("div");
    card.className = "card";
    card.id = activity.id;
    
    card.style.margin = "1em";
    card.style.flex = "1 1 calc(30% - 2em)";
    card.style.boxSizing = "border-box";
    card.style.border = "1px solid #ccc";
    card.style.borderRadius = "10px";
    card.style.backgroundColor = "white";
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.alignItems = "center";
    
    const titleTag = document.createElement("h2");
    titleTag.textContent = activity.title;
    
    titleTag.style.fontSize = "2em";
    titleTag.style.fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
    titleTag.style.margin = "0";
    titleTag.style.fontWeight = "bold";
    titleTag.style.textAlign = "center";
    
    const descriptionTag = document.createElement("p");
    descriptionTag.innerText = activity.description;
    
    descriptionTag.style.fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
    descriptionTag.style.fontSize = "1.3em";
    descriptionTag.style.margin = "0.5em 0";
    descriptionTag.style.textAlign = "center";
    
    const imgTag = document.createElement("img");
    imgTag.src = activity.imgUrl;
    imgTag.alt = `imagen de ${activity.title}`;
    
    imgTag.style.width = "30vw";
    imgTag.style.height = "15em";
    imgTag.style.display = "block";
    imgTag.style.padding = "1em 1em 1em 1em"
    
    card.appendChild(titleTag);
    card.appendChild(descriptionTag);
    card.appendChild(imgTag);

    return card;
}

function buildActivities() {
    const container = document.getElementById("container_actividad");
    container.innerHTML = ""; 
    
    container.style.backgroundColor = "#fbc0c4";
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.justifyContent = "space-between";
    container.style.padding = "1em";
    
    const activities = repo.getAllActivities();
    activities.forEach(activity => {
        const activityElement = buildActivity(activity);
        container.appendChild(activityElement);
    });
}

function handleSubmit(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const imgUrl = document.getElementById("imgUrl").value;

    if (title === "" || description === "" || imgUrl === "") {
        alert("Debe completar todos los datos");
        return;
    } 
    
    repo.createActivity(title, description, imgUrl);
    buildActivities();
}

const repo = new Repository();
const button = document.getElementById("submit");
button.addEventListener("click", handleSubmit);