export class Drawer {

    constructor(width, height) {
        this.canvas = Array.from(
            {length : height},
            (_, index)=>
                Array(width).fill(0)
        );

        this.rlue = {
            0 : '*',
            1 : '■'
        };
    }

    show(gap = true){
        this.canvas.forEach((col, _) => {
            col.forEach(
                (row, _)=>{
                    process.stdout.write(gap ? ` ${this.tool(row)} ` : `${this.tool(row)}`);
                }
            );
            console.log();
        })
    }


    /**
     *
     * @param {function(Array):void} action
     */
    drawing(action){
        console.clear();
        action(this.canvas);
        this.show()
    }

    /**
     *
     * @param {number} data
     */
    tool(data){
        try {
            return this.rlue[data]
        }catch (e){
            return '*';
        }
    }
}