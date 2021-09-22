
import { _decorator, Component, Node, JsonAsset, Label, color } from 'cc';
const { ccclass, property } = _decorator;

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
 
@ccclass('Abc')
export class Abc extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property(JsonAsset)
    asset:any=null;

    @property(Node)
    content:Node=null;


    titleList: string[] = [];
    titleIndex: number = 1;




    start () {
        this.titleList = this.asset.json["Symptoms data"][0];
        // [3]
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
    }


    // update (deltaTime: number) {
    //     // [4]
    // }
}

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
