const Move = require('./Move');

class MoveTree{
    constructor(coordinates, maxDepth){
        this.root = new Move(coordinates[0], coordinates[1], 0, [], null);
        this.currentDepth = 0;
        this.boardSize = 8;
    }
    
    generateMoves(){
        
    }
    
    
}



//generate moves
let tree = new MoveTree([3,3], 1);