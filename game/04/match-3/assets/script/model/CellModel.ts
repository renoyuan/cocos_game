import { CELL_TYPE, ANITIME, CELL_STATUS, GRID_HEIGHT } from './Const';
import { _decorator, Component, Node, AudioSource, Button,v2, Vec2 } from 'cc';

// 操作cell
export default class CellModel {
  
    public type = null;
    public status = CELL_STATUS.COMMON;
    public x = 1;
    public y = 1;
    public startX = 1;
    public startY = 1;
    public cmd = [];
    public isDeath = false;
    public objecCount = Math.floor(Math.random() * 1000);


  init(type) {
    this.type = type;
  }

  isEmpty() {
    return this.type == CELL_TYPE.EMPTY;
  }

  setEmpty() {
    this.type = CELL_TYPE.EMPTY;
  }
  setXY(x, y) {
    this.x = x;
    this.y = y;
  }

  setStartXY(x, y) {
    this.startX = x;
    this.startY = y;
  }

  setStatus(status) {
    this.status = status;
  }

  moveToAndBack(pos) {
    var srcPos = v2(this.x, this.y);
    this.cmd.push({
      action: "moveTo",
      keepTime: ANITIME.TOUCH_MOVE,
      playTime: 0,
      pos: pos
    });
    this.cmd.push({
      action: "moveTo",
      keepTime: ANITIME.TOUCH_MOVE,
      playTime: ANITIME.TOUCH_MOVE,
      pos: srcPos
    });
  }

  moveTo(pos, playTime) {
    var srcPos = v2(this.x, this.y);
    this.cmd.push({
      action: "moveTo",
      keepTime: ANITIME.TOUCH_MOVE,
      playTime: playTime,
      pos: pos
    });
    this.x = pos.x;
    this.y = pos.y;
  }

  toDie(playTime) {
    this.cmd.push({
      action: "toDie",
      playTime: playTime,
      keepTime: ANITIME.DIE
    });
    this.isDeath = true;
  }

  toShake(playTime) {
    this.cmd.push({
      action: "toShake",
      playTime: playTime,
      keepTime: ANITIME.DIE_SHAKE
    });
  }

  setVisible(playTime, isVisible) {
    this.cmd.push({
      action: "setVisible",
      playTime: playTime,
      keepTime: 0,
      isVisible: isVisible
    });
  }

  moveToAndDie(pos) {

  }

  isBird() {
    return this.type == CELL_TYPE.G;
  }

}
