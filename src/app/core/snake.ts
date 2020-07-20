import { Direction, Piece, PieceType, Position } from "./types/game";

export interface SnakeBody extends Piece {
    type: PieceType.SNAKE_BODY
}

export default class Snake implements Piece{

    public position: Position = { x: 0, y: 0 };
    public type = PieceType.SNAKE;
    public direction: Direction  = Direction.INITIAL;
    public body: SnakeBody[] = [];

    constructor() { }
}
