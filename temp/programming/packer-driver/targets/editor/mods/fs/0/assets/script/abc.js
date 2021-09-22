System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, JsonAsset, Label, color, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, Abc;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      JsonAsset = _cc.JsonAsset;
      Label = _cc.Label;
      color = _cc.color;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f7857Z1+jlJh6Rl1hyz4ik+", "abc", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = Abc
       * DateTime = Wed Sep 22 2021 18:28:18 GMT+0530 (India Standard Time)
       * Author = chandan_krishnani
       * FileBasename = abc.ts
       * FileBasenameNoExtension = abc
       * URL = db://assets/script/abc.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("Abc", Abc = (_dec = ccclass('Abc'), _dec2 = property(JsonAsset), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = class Abc extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "asset", _descriptor, this);

          _initializerDefineProperty(this, "content", _descriptor2, this);

          _defineProperty(this, "titleList", []);

          _defineProperty(this, "titleIndex", 1);
        }

        start() {
          this.titleList = this.asset.json["Symptoms data"][0]; // [3]
        }

        onClick() {
          if (null == this.titleList[this.titleIndex]) {
            return;
          }

          var node = new Node();
          var lab = node.addComponent(Label);
          lab.string = this.titleList[this.titleIndex];
          console.log(this.titleList[this.titleIndex]);
          lab.node.color = color(0, 0, 0);
          lab.horizontalAlign = Label.HorizontalAlign.RIGHT;
          this.titleIndex++;
          node.parent = this.content;
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "asset", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=abc.js.map