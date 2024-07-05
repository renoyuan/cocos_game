
//一个简单的tost组件，用法：
// let Toast = reqire('Toast.js')
// Toast(text,{gravity,duration,bg_color})
//text:要显示的字符串
//gravity(可选):位置，String类型，可选值('CENTER','TOP','BOTTOM'),默认为'CENTER'
//duration(可选):时间，Number类型，单位为秒，默认1s
//bg_color(可选):颜色，cc.color类型，默认cc.color(102, 102, 102, 200)


export class Toast  {
    text = "";
    grid:Node=null




    start() {

    }

    update(deltaTime: number) {
        
    }
}


