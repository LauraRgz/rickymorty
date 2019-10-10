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

const searchByName = function(argv){
    const baseURL = "https://rickandmortyapi.com/api/";
    const characterURL = "character/?name=";
    const name = argv.name;
    const index = argv.page;
    const urlCharacters = `${baseURL}${characterURL}${name}&page=${index}`;
    
    request({ url: urlCharacters, json: true }, (error, response) => {  
        response.body.results.forEach((element,i) => {
            console.log(`${i}: ${response.body.results[i].name}`);
        });
    });
}

const listStatus = function(argv){
    const baseURL = "https://rickandmortyapi.com/api/";
    const characterURL = "character/?status=";
    const statusURL = argv.status;
    const index = argv.page;
    const urlCharacters = `${baseURL}${characterURL}${statusURL}&page=${index}`;
    console.log(urlCharacters);
    request({ url: urlCharacters, json: true }, (error, response) => {  
        response.body.results.forEach((element,i) => {
            console.log(`${i}: ${response.body.results[i].name}`);
        });
    });
}

const showCharacter = function(argv){
    const baseURL = "https://rickandmortyapi.com/api/character/?name=";
    //const characterURL = "character/?name=";
    const name = argv.name;
    const urlCharacters = `${baseURL}${name}`;
    // console.log(name);
    // console.log(urlCharacters);
    
    //const getValues = (urlCharacters, results, name) => {
        //console.log("hola");
        request({ url: urlCharacters, json: true }, (error, response) => {  
            response.body.results.forEach((element,i) => {
                //console.log(`${i}: ${response.body.results[i].id}`);
                const idCharacter = response.body.results[i].id;
                const baseURLid = "https://rickandmortyapi.com/api/character/";
                const idURL = `${baseURLid}${idCharacter}`;

                request({ url: idURL, json: true }, (error, response) => { 
                    console.log(element);
                });
            });
            
            // if(response.body.info.next !== ""){
            //     getValues(response.body.info.next, results, name);
            // }
            
        });
    //}
}

export{characterList, searchByName, listStatus, showCharacter}