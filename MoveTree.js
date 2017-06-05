const Move = require("./Move");

class MoveTree {
    constructor(coordinates, maxDepth) {
        this.root = new Move(coordinates[0], coordinates[1], 0, [], null);
        this.maxDepth = maxDepth;
        this.boardSize = 8;
        this.moves = 1;
        this.generateMoves(this.root, maxDepth);
        
    }

    generateMoves(node, maxDepth) {
        let queue = [node];
        const nextMoves = (node) => {
            let nodeX = node.x;
            let nodeY = node.y;
            //get the node coordinates
            //generate all possible next coordinates
            //filter the coorindates that are valid
            //only create a new move for the valid coorindates
            let nextCoordinates = [
                [1, 2],
                [1, -2],
                [-1, -2],
                [-1, 2],
                [2, 1],
                [2, -1],
                [-2, 1],
                [-2, -1]
            ].map((move) => {
                return [move[0] + nodeX, move[1] + nodeY];
            });
            nextCoordinates = nextCoordinates.filter((coordinates) => {
                if ((coordinates[0] > 8 || coordinates[0] < 1) || (coordinates[1] > 8 || coordinates[1] < 1)) {
                    return false;
                }
                return true;
            });
            nextCoordinates.forEach((coordinate) => {
                node.children.push(
                    new Move(coordinate[0], coordinate[1], node.depth + 1, [], node)
                );
                ++this.moves;
            });

        };
        while (queue.length) {
            let nextNode = queue.shift();
            if (nextNode.depth < maxDepth) {
                nextMoves(nextNode);
                queue = [...queue, ...nextNode.children];
            }
        }
    }
    
    inspect() {
        console.log(`The tree has ${this.moves} moves and a maxDepth of ${this.maxDepth}`);
    }
}

//generate moves
let tree = new MoveTree([3, 3], 1);
console.log(tree.root.children[0]);
tree.inspect();