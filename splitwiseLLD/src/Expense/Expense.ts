import { User } from "../Users";
import { SplitType } from "./SplitType";
import { Split } from "./Split";



export class Expense{

    private expenseId:number;
    private expenseName:string;
    private expenseAmount:number;
    private expenseDate:Date;
    userPaidBy:User;
    type:SplitType;
    splits:Array<Split>;

    constructor(expenseName:string,expenseAmount:number,expenseDate:Date,userPaidBy:User,type:SplitType,splits:Array<Split>){
        this.expenseId = Math.floor(Math.random() * 1000000);
        this.expenseName = expenseName;
        this.expenseAmount = expenseAmount;
        this.expenseDate = expenseDate;
        this.userPaidBy = userPaidBy;
        this.type = type;
        this.splits = splits;
    }


}