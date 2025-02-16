
/**
 * @param {HTMLCanvasElement} canvas
 */
const width = 10;
const height = 20;
const px = 40;

const canvas = document.getElementById('board')
canvas.width = width*px;
canvas.height = height*px;

const ctx = canvas.getContext('2d');



const shapes = {
    L: [
            [0, 0, 1],
            [1, 1, 1]
        ],
    J : [
            [2, 0, 0],
            [2, 2, 2]
        ],

    I : [
            [3, 3, 3, 3,]
        ],
    S : [
            [0, 4, 4],
            [4, 4, 0]
        ]
    ,
    O : [
            [5, 5,],
            [5, 5,]
        ]
}

const colors = {
    1: 'blue',
    2: 'red',
    3: 'skyblue',
    4: 'green',
    5: 'purple'
};


class Game{
    
    constructor(px){
        this.transform = {
            x : 0,
            y : 0,
        }
        this.px = px
        this.initControls()
    }

    initControls() {
        document.addEventListener("keydown", (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    this.move(-this.px, 0);
                    break;
                case "ArrowRight":
                    this.move(this.px, 0);
                    break;
                case "ArrowUp":
                    this.move(0, -this.px);
                    break;
                case "ArrowDown":
                    this.move(0, this.px);
                    break;
            }
        });
    }

    /**
     * @param {Function} action 
     */
    
    
    move(dx, dy) {
        this.transform.x += dx;
        this.transform.y += dy;
    }
}

class tetris extends Game{
    constructor(){
        super(px)
        this.board = Array.from({length : height}, ()=>Array(width).fill(0));
    }

    start() {
        const loop = () => {
            this.init();
            this.draw(shapes.I);
            requestAnimationFrame(loop);
        };
        loop();
    }
    

    generate(){
    }
    init(){
        this.board.forEach((col, y)=>{
            col.forEach((row, x)=>{
                ctx.fillStyle = colors[row];
                ctx.fillRect(x*px, y*px, px, px);
                ctx.strokeRect(x*px, y*px, px, px);
            });
        });
    }

    draw(shape){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        shape.forEach(
            (col, y)=>{
                col.forEach((row, x)=>{
                    if(row != 0){
                        ctx.fillStyle = colors[row];
                        ctx.fillRect(this.transform.x + x*px, this.transform.y + y*px, px, px);
                        ctx.strokeRect(this.transform.x + x*px, this.transform.y + y*px, px, px);
                    }
                })
            }
        );
    }

}



const game = new tetris(); // ✅ 인스턴스 생성
game.start(); // ✅ start() 호출 가능
