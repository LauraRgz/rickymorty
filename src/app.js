import yargs from 'yargs';
import {characterList, searchByName, listStatus, showCharacter} from './rickymorty'

yargs.command({
    command: 'list',
    describe: ' ',
    builder: {
        page: {
            describe: 'page',
            demandOption: false, 
            type: 'number',
          },
    }, 
    handler: function(argv){
        characterList(argv);
  }
});

yargs.command({
    command: 'search',
    describe: ' ',
    builder: {
        name: {
            describe: 'name',
            demandOption: true, 
            type: 'string',
          },
    }, 
    handler: function(argv){
        searchByName(argv);
  }
});

yargs.command({
    command: 'searchStatus',
    describe: ' ',
    builder: {
        status: {
            describe: 'status',
            demandOption: true, 
            type: 'string',
          },
          
          page: {
            describe: 'page',
            demandOption: false, 
            type: 'number',
          },
    }, 
    handler: function(argv){
        listStatus(argv);
  }
});

yargs.command({
  command: 'showCharacter',
  describe: ' ',
  builder: {
      name: {
          describe: 'name',
          demandOption: true, 
          type: 'string',
        },
      page: {
        describe: 'page',
        demandOption: false, 
        type: 'number',
      },
  }, 
  handler: function(argv){
    showCharacter(argv);
}
});

yargs.parse();
