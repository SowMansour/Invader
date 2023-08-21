const container = document.getElementById('invader');

for(let i = 0; i < 8*8 ; i++){
    // Creation des elements invader et stylisation
    const pixelDiv = document.createElement('div');
    pixelDiv.classList.add('cell');
    //Append the the row div to an existing elem(here invader)
    container.appendChild(pixelDiv);
}