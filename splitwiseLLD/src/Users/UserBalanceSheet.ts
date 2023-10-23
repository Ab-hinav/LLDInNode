import { User } from "./User";

export class UserBalanceSheet{

    private friends:Map<User,UserBalanceSheet>;
    private totalMyExpense:number;
    private totalPayment:number;
    private totalGetBack:number;

    constructor(){
        this.friends = new Map<User,UserBalanceSheet>();
        this.totalMyExpense = 0;
        this.totalPayment = 0;
        this.totalGetBack = 0;
    }

    addNewExpense(expense:Expense){
        //
    }

    getTotalMyExpense():number{
        return this.totalMyExpense;
    }

    getTotalPayment():number{
        return this.totalPayment;
    }

    getTotalGetBack():number{
        return this.totalGetBack;
    }

    
}