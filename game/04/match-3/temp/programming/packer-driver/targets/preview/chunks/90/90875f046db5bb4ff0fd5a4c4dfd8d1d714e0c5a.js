System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _crd;

  /**
   * 减法
   * @param points
   * @param exclusivePoint
   */
  function mergePointArray(rowPoints, colPoints) {
    var result = rowPoints.concat();
    colPoints = colPoints.filter(function (colEle) {
      var repeat = false;
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
    var result = new Array();

    for (var point of points) {
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
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6ac2eHlBUlCZKVuEJ0gI6xY", "ModelUtils", undefined);

      /**
       * 合并
       * @param rowPoints
       * @param colPoints
       */
      __checkObsolete__(['_decorator', 'Component', 'Node', 'AudioSource', 'Button', 'v2', 'Vec2']);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=90875f046db5bb4ff0fd5a4c4dfd8d1d714e0c5a.js.map