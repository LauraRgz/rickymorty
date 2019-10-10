import yargs from 'yargs';
import {characterList} from './rickymorty'

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

yargs.parse();
