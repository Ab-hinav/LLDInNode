import { User } from "../Users";

export class Split{

    user:User
    amount:number
    percent:number

    constructor(user:User, amount:number, percent:number){
        this.user = user
        this.amount = amount
        this.percent = percent
    }


}