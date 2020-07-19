import '../styles/main.scss'

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(async () => {
        const snakeModule = await import('./core/snake');
        console.log(snakeModule.Snake);
        // const littleSnake = new Snake(12);

        const as: any = {};

        as.hey();
    }, 3000);
});
