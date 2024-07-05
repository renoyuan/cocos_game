/**
 * 合并
 * @param rowPoints
 * @param colPoints
 */
import { _decorator, Component, Node, AudioSource, Button,v2, Vec2 } from 'cc';
export  function mergePointArray(rowPoints : Vec2[], colPoints: Vec2[]){
    let result = rowPoints.concat();
    colPoints = colPoints.filter(function (colEle) {
        let repeat = false;
        result.forEach(function (rowEle) {
            if(colEle.equals(rowEle)){
                repeat = true
            }
        }, this);
        return !repeat;
    }, this);
    result.push(...colPoints);
    return result;
}

/**
 * 减法
 * @param points
 * @param exclusivePoint
 */
export function exclusivePoint(points: Vec2[], exclusivePoint: Vec2){
    let result = new Array<Vec2>();
    for(let point of points){
        if(!point.equals(exclusivePoint)){
            result.push(point);
        }
    }
    return result;
}