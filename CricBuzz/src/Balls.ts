import { Player } from "./Player";
import { ScoreUpdater } from "./ScoreUpdater";

export class Balls{

    ballType:BallType;
    ballNo:number;
    runType:RunType;

    playedBy:Player;
    bowledBy:Player;

    observers:ScoreUpdater[];

    notify(){
        
    }

}



enum BallType{

    NOBALL,WIDEBALL,NORMAL

}

enum RunType{
    ONE,TWO,THREE,FOUR,SIX,WIDE_RUN,ZERO
}