import {Directory, File} from './FileSystem';
import { Number,Expression,Operation } from './Arithmetic';

    // Example 1
    const movieDirectory:Directory = new Directory("Movies",[]);
    const moviewComedy:File = new File("Comedy", 12);
    movieDirectory.add(moviewComedy);
    const movieHorror:File = new File("Horror", 14);
    movieDirectory.add(movieHorror);
    const movieRomance:File = new File("Romance", 16);

    const songsDir:Directory = new Directory("Songs",[]);
    const songLove:File = new File("Love", 10);
    songsDir.add(songLove);

    movieDirectory.add(songsDir);

    movieDirectory.ls();

    // Example 2
    const exp:Expression = new Expression(new Number(10),Operation.ADD,new Number(3));
    const exp1:Expression = new Expression(exp,Operation.MULTIPLY,new Number(5));
    console.log(exp1.evaluate());
    






