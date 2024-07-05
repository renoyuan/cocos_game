System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  /**
   * 合并
   * @param rowPoints
   * @param colPoints
   */

  /**
   * 减法
   * @param points
   * @param exclusivePoint
   */
  function mergePointArray(rowPoints, colPoints) {
    let result = rowPoints.concat();
    colPoints = colPoints.filter(function (colEle) {
      let repeat = false;
      result.forEach(function (rowEle) {
        if (colEle.equals(rowEle)) {
          repeat = true;
        }
      }, this);
      return !repeat;
    }, this);
    result.push(...colPoints);
    return result;
  }

  function exclusivePoint(points, exclusivePoint) {
    let result = new Array();

    for (let point of points) {
      if (!point.equals(exclusivePoint)) {
        result.push(point);
      }
    }

    return result;
  }

  _export({
    mergePointArray: mergePointArray,
    exclusivePoint: exclusivePoint
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a54d8MeNW9ISZedQpL4QGb6", "ModelUtils%20copy", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aeb3b3e5c613d0d5287a84c17b0daa97f867b3e8.js.map