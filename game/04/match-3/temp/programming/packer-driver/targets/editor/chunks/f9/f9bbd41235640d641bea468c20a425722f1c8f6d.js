System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CELL_TYPE, ANITIME, CELL_STATUS, v2, CellModel, _crd;

  function _reportPossibleCrUseOfCELL_TYPE(extras) {
    _reporterNs.report("CELL_TYPE", "./Const", _context.meta, extras);
  }

  function _reportPossibleCrUseOfANITIME(extras) {
    _reporterNs.report("ANITIME", "./Const", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCELL_STATUS(extras) {
    _reporterNs.report("CELL_STATUS", "./Const", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      v2 = _cc.v2;
    }, function (_unresolved_2) {
      CELL_TYPE = _unresolved_2.CELL_TYPE;
      ANITIME = _unresolved_2.ANITIME;
      CELL_STATUS = _unresolved_2.CELL_STATUS;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0d765hsIeVPMruXkS/cRoYQ", "CellModel", undefined);

      // 操作cell
      __checkObsolete__(['_decorator', 'Component', 'Node', 'AudioSource', 'Button', 'v2', 'Vec2']);

      _export("default", CellModel = class CellModel {
        constructor() {
          this.type = null;
          this.status = (_crd && CELL_STATUS === void 0 ? (_reportPossibleCrUseOfCELL_STATUS({
            error: Error()
          }), CELL_STATUS) : CELL_STATUS).COMMON;
          this.x = 1;
          this.y = 1;
          this.startX = 1;
          this.startY = 1;
          this.cmd = [];
          this.isDeath = false;
          this.objecCount = Math.floor(Math.random() * 1000);
        }

        init(type) {
          this.type = type;
        }

        isEmpty() {
          return this.type == (_crd && CELL_TYPE === void 0 ? (_reportPossibleCrUseOfCELL_TYPE({
            error: Error()
          }), CELL_TYPE) : CELL_TYPE).EMPTY;
        }

        setEmpty() {
          this.type = (_crd && CELL_TYPE === void 0 ? (_reportPossibleCrUseOfCELL_TYPE({
            error: Error()
          }), CELL_TYPE) : CELL_TYPE).EMPTY;
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
            keepTime: (_crd && ANITIME === void 0 ? (_reportPossibleCrUseOfANITIME({
              error: Error()
            }), ANITIME) : ANITIME).TOUCH_MOVE,
            playTime: 0,
            pos: pos
          });
          this.cmd.push({
            action: "moveTo",
            keepTime: (_crd && ANITIME === void 0 ? (_reportPossibleCrUseOfANITIME({
              error: Error()
            }), ANITIME) : ANITIME).TOUCH_MOVE,
            playTime: (_crd && ANITIME === void 0 ? (_reportPossibleCrUseOfANITIME({
              error: Error()
            }), ANITIME) : ANITIME).TOUCH_MOVE,
            pos: srcPos
          });
        }

        moveTo(pos, playTime) {
          var srcPos = v2(this.x, this.y);
          this.cmd.push({
            action: "moveTo",
            keepTime: (_crd && ANITIME === void 0 ? (_reportPossibleCrUseOfANITIME({
              error: Error()
            }), ANITIME) : ANITIME).TOUCH_MOVE,
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
            keepTime: (_crd && ANITIME === void 0 ? (_reportPossibleCrUseOfANITIME({
              error: Error()
            }), ANITIME) : ANITIME).DIE
          });
          this.isDeath = true;
        }

        toShake(playTime) {
          this.cmd.push({
            action: "toShake",
            playTime: playTime,
            keepTime: (_crd && ANITIME === void 0 ? (_reportPossibleCrUseOfANITIME({
              error: Error()
            }), ANITIME) : ANITIME).DIE_SHAKE
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

        moveToAndDie(pos) {}

        isBird() {
          return this.type == (_crd && CELL_TYPE === void 0 ? (_reportPossibleCrUseOfCELL_TYPE({
            error: Error()
          }), CELL_TYPE) : CELL_TYPE).G;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f9bbd41235640d641bea468c20a425722f1c8f6d.js.map