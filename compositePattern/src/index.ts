import {Directory, File} from './FileSystem';

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






