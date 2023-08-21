const app = {

    init(){
        const canvaForm = document.querySelector('.configuration');
        //Create form elem
        const canvasSize = document.createElement('input');
        canvasSize.classList.add('canvasSizeS');
        canvasSize.placeholder = "Taille de la grille";
        canvasSize.type = 'number';

        const btn = document.createElement('button');
        btn.classList.add('btnStyle');
        btn.textContent = "Valider";

        //Apprend elems to parent
        canvaForm.appendChild(canvasSize);
        canvaForm.appendChild(btn);

        canvaForm.addEventListener('submit', (e)=>{
            e.preventDefault();
        // Récupère la valeur rentré par le user
            app.gridInit(canvasSize.valueAsNumber);
        });

    app.gridInit();
    },

    // Par défaut la grille sera de 8
    gridInit(gridSize = 8){
    const container = document.getElementById('invader');
    // On initialise la grille
    container.textContent = '';
    // On adapte l'affichage pour le style s'adapte à n'importe quelle chiffre
    container.style.width = `${5*gridSize}rem`;
    for(let i = 0; i < gridSize*gridSize ; i++){
        // Creation des elements invader et stylisation
        let pixelDiv = document.createElement('div');
        pixelDiv.classList.add('cell');
        //Append the the row div to an existing elem(here invader)
        container.appendChild(pixelDiv);
    
        pixelDiv.addEventListener('click', ()=>{
            pixelDiv.classList.toggle('change-color');
        });
    };
    }   
};

app.init();
