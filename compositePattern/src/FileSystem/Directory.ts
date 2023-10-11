import { FileSystem } from "./FileSytemInterface";

export class Directory implements FileSystem {

    list: FileSystem[];
    name: string;

    constructor(name: string, list: FileSystem[]) {
        this.name = name;
        this.list = list;
    }

    add(fileSytem: FileSystem): void {
        this.list.push(fileSytem);
    }

    ls(): void {
        console.log(this.name);
        this.list.forEach(fileSytem => fileSytem.ls());
    }


}