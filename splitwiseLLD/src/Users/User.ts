import { UserBalanceSheet } from "./UserBalanceSheet";

export class User{
    username:String;
    userId:number;
    userBalanceSheet:UserBalanceSheet;

    constructor(username:String,userId:number,userBalanceSheet:UserBalanceSheet){
        
        this.username = username;
        this.userId = userId;
        this.userBalanceSheet = userBalanceSheet;    
    }

}