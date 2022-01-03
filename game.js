    let bombRow = Math.floor( 4 * Math.random() );
    let bombColumn = Math.floor(4*Math.random() );

console.log('The bomb is in title #'+bombRow+' - '+bombColumn);

function doClick(id){
    console.log('clicked on #'+id);
    let bombe = 'title' +bombRow+' - '+bombColumn;
    if (bombe== id.id){
        id.style.backgroundImage = "url('"
        
    }
}

// faire en sort que l'on mettent une bomb est faux la trouver 
