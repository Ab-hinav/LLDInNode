import { FileSystem } from "./FileSytemInterface";


export class File implements FileSystem{

    public name:String;
    public size:number;

    constructor(name:String,size:number){
        this.name=name;
        this.size=size;
    }

    public ls(){
        console.log(this.name);
    }


}
