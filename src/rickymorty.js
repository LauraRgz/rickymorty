import request from "request"
const characterList = function(argv){
    const baseURL = "https://rickandmortyapi.com/api/";
    const characterURL = "character";
    const pageURL = "/?page=";
    const index = argv.page;
    const urlCharacters = `${baseURL}${characterURL}${pageURL}${index}`;
    
    request({ url: urlCharacters, json: true }, (error, response) => {  
        
            response.body.results.forEach((element,i) => {
                    console.log(`${i}: ${response.body.results[i].name}`);
            });
    
    });

}
export{characterList}