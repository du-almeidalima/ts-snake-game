import Snake from "./snake";

export default class GameEngine {
    private snake!: Snake;
    private board!: any[];
    private runInterval: any;

    constructor (
        private rows: number,
        private cols: number,
        private renderEngine: any
    ) {}

    private bootstrap(): void {
        // Validations
        if (this.rows < 5 || this.cols < 5) {
            new Error('Board to small, minimum required 5 x 5');
        }

        this.snake = new Snake();
        this.board = new Array(this.rows * this.cols);
    };

    private run(): void {
        this.runInterval = setInterval(() => {

        }, 500);
    }

    public start(): void {
        this.bootstrap();
        this.run();
    }
}
