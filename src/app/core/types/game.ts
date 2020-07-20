export interface Position {
    x: number;
    y: number;
}

export interface Piece {
    position: Position,
    type: PieceType
}

export enum PieceType {
    "SNAKE",
    "SNAKE_BODY",
    "FOOD"
}

export enum Direction {
    "UP",
    "DOWN",
    "LEFT",
    "RIGHT",
    "INITIAL"
}
