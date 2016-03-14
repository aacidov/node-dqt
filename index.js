'use strict';

var ee = require("events");

class DQT  extends ee{

    constructor(set, interval){
        super();

        var x, y, step, lx, ly;
        this.set = set;
        this.interval = interval==null?1000:interval;

        this.on('reset', ()=>{
            y=x=step=0;
        });
        this.on('next',()=>{
            lx =x; ly=y;
            this.emit('step', step===0?this.set[y]:this.set[y][x], y, x);
            if (step===0){

                if (y==this.set.length-1){
                    y=0;
                    return;
                }
                y++;
            }
            else {
                if (x==this.set[y].length-1){
                   x=0;
                   return;
                }
                x++;
            }

        });
        this.on('click', ()=>{
            var choosenObject = Array.isArray(this.set[ly])&&step===1?this.set[ly][lx]:this.set[ly];
            this.emit('choosen', choosenObject);
            if (Array.isArray(choosenObject)){
                step = 1;
                y =  ly;
                return;
            }

            this.emit('reset');
        });
        this.emit('reset');

        if (interval!==false){
        this.timer = setInterval(()=>{
            this.emit('next');
        }, this.interval);
        }
    }
    static group (arr){
      var matrix = [];
      var length = arr.length;
      var sqrt = (Math.sqrt(length));
      var floor = Math.floor(sqrt);
      var intRoot = floor<sqrt?floor+1:sqrt;
      for (var i = 0; i < floor; i++) {
        var lastMatrix =[];
        matrix.push(lastMatrix);
        for (var j = 0; (j < intRoot); j++) {
          if(arr[i*intRoot+j]!=null) lastMatrix.push(arr[i*intRoot+j]);
        }
      }
      return matrix;
    }
}

module.exports = DQT;
if ("undefined" !== typeof window){
  window.DQT = DQT;
}
