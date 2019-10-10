import request from "request"

const characterList = function(argv){
    const baseURL = "https://rickandmortyapi.com/api/";
    const characterURL = "character";
    const pageURL = "/?page=";
    const index = argv.page;
    const urlCharacters = `${baseURL}${characterURL}${pageURL}${index}`;
    
    request({ url: urlCharacters, json: true }, (error, response) => {  
        if(response.body.results){
            response.body.results.forEach((element,i) => {
                    console.log(`${i}: ${response.body.results[i].name}`);
            });
        }
        else{
            console.log("No results found");
        }
    });
}

const searchByName = function(argv){
    const baseURL = "https://rickandmortyapi.com/api/";
    const characterURL = "character/?name=";
    const name = argv.name;
    const index = argv.page;
    const urlCharacters = `${baseURL}${characterURL}${name}&page=${index}`;
    
    request({ url: urlCharacters, json: true }, (error, response) => {  
        if(response.body.results){
            response.body.results.forEach((element,i) => {
                console.log(`${i}: ${response.body.results[i].name}`);
            });
        }
        else{
            console.log("No results found");
        }
    });
    
    
}

const listStatus = function(argv){
    const baseURL = "https://rickandmortyapi.com/api/";
    const characterURL = "character/?status=";
    const statusURL = argv.status;
    const index = argv.page;
    const urlCharacters = `${baseURL}${characterURL}${statusURL}&page=${index}`;
    request({ url: urlCharacters, json: true }, (error, response) => {  
        if(response.body.results){
            response.body.results.forEach((element,i) => {
                console.log(`${i}: ${response.body.results[i].name}`);
            });
        }
        else{
            console.log("No results found");
        }
    });
}

const showCharacter = function(argv){
    const baseURL = "https://rickandmortyapi.com/api/character/?name=";
    const name = argv.name;
    const urlCharacters = `${baseURL}${name}`;
    const results = "";
    const getValues = (urlCharacters, results, name) => {
        request({ url: urlCharacters, json: true }, (error, response) => {  
            if(response.body.results){
                response.body.results.forEach((element,i) => {
                    console.log(element);
                });
                
                if(response.body.info.next !== ""){
                    getValues(response.body.info.next, results, name);
                }
                else{
                    console.log(results);
                }
            }
            else{
                console.log("No results found");
            }
        });
    }
    getValues(urlCharacters, results, name);
}
export{characterList, searchByName, listStatus, showCharacter}