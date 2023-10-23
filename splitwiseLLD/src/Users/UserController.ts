import { User } from "./User";

export class UserController {

    private users: Array<User>

    constructor(){
        this.users = new Array<User>();
    }

    addUser(user: User){
        this.users.push(user);
    }

    



}