gdjs.SpawnCode = {};
gdjs.SpawnCode.localVariables = [];
gdjs.SpawnCode.GDPlayerHitboxObjects1= [];
gdjs.SpawnCode.GDPlayerHitboxObjects2= [];
gdjs.SpawnCode.GDPlayerObjects1= [];
gdjs.SpawnCode.GDPlayerObjects2= [];
gdjs.SpawnCode.GDgrassObjects1= [];
gdjs.SpawnCode.GDgrassObjects2= [];
gdjs.SpawnCode.GDMuseumObjects1= [];
gdjs.SpawnCode.GDMuseumObjects2= [];
gdjs.SpawnCode.GDTreeObjects1= [];
gdjs.SpawnCode.GDTreeObjects2= [];
gdjs.SpawnCode.GDBarriersObjects1= [];
gdjs.SpawnCode.GDBarriersObjects2= [];
gdjs.SpawnCode.GDTriggerToNextObjects1= [];
gdjs.SpawnCode.GDTriggerToNextObjects2= [];
gdjs.SpawnCode.GDBlackOutObjects1= [];
gdjs.SpawnCode.GDBlackOutObjects2= [];


gdjs.SpawnCode.mapOfGDgdjs_9546SpawnCode_9546GDPlayerHitboxObjects1Objects = Hashtable.newFrom({"PlayerHitbox": gdjs.SpawnCode.GDPlayerHitboxObjects1});
gdjs.SpawnCode.mapOfGDgdjs_9546SpawnCode_9546GDTriggerToNextObjects1Objects = Hashtable.newFrom({"TriggerToNext": gdjs.SpawnCode.GDTriggerToNextObjects1});
gdjs.SpawnCode.asyncCallback10916484 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SpawnCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Museum1", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}gdjs.SpawnCode.localVariables.length = 0;
}
gdjs.SpawnCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SpawnCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.SpawnCode.asyncCallback10916484(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SpawnCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SpawnCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerHitbox"), gdjs.SpawnCode.GDPlayerHitboxObjects1);
{for(var i = 0, len = gdjs.SpawnCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SpawnCode.GDPlayerObjects1[i].setPosition((( gdjs.SpawnCode.GDPlayerHitboxObjects1.length === 0 ) ? 0 :gdjs.SpawnCode.GDPlayerHitboxObjects1[0].getPointX("")),(( gdjs.SpawnCode.GDPlayerHitboxObjects1.length === 0 ) ? 0 :gdjs.SpawnCode.GDPlayerHitboxObjects1[0].getPointY("")));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitbox"), gdjs.SpawnCode.GDPlayerHitboxObjects1);
{for(var i = 0, len = gdjs.SpawnCode.GDPlayerHitboxObjects1.length ;i < len;++i) {
    gdjs.SpawnCode.GDPlayerHitboxObjects1[i].hide();
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11165916);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SpawnCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.SpawnCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SpawnCode.GDPlayerObjects1[i].returnVariable(gdjs.SpawnCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.SpawnCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SpawnCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.SpawnCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SpawnCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("WalkBack");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9393076);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SpawnCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.SpawnCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SpawnCode.GDPlayerObjects1[i].returnVariable(gdjs.SpawnCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.SpawnCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SpawnCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.SpawnCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SpawnCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("WalkRight");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9394028);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SpawnCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.SpawnCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SpawnCode.GDPlayerObjects1[i].returnVariable(gdjs.SpawnCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(2);
}
}{for(var i = 0, len = gdjs.SpawnCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SpawnCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.SpawnCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SpawnCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("WalkFront");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9394884);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SpawnCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.SpawnCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SpawnCode.GDPlayerObjects1[i].returnVariable(gdjs.SpawnCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(3);
}
}{for(var i = 0, len = gdjs.SpawnCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SpawnCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.SpawnCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SpawnCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("WalkRight");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SpawnCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SpawnCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.SpawnCode.GDPlayerObjects1[i].getVariableNumber(gdjs.SpawnCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.SpawnCode.GDPlayerObjects1[k] = gdjs.SpawnCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.SpawnCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10911004);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.SpawnCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.SpawnCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SpawnCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.SpawnCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SpawnCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("IdleBack");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SpawnCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SpawnCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.SpawnCode.GDPlayerObjects1[i].getVariableNumber(gdjs.SpawnCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.SpawnCode.GDPlayerObjects1[k] = gdjs.SpawnCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.SpawnCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10911980);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.SpawnCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.SpawnCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SpawnCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.SpawnCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SpawnCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("IdleRight");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SpawnCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SpawnCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.SpawnCode.GDPlayerObjects1[i].getVariableNumber(gdjs.SpawnCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.SpawnCode.GDPlayerObjects1[k] = gdjs.SpawnCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.SpawnCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10913388);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.SpawnCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.SpawnCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SpawnCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.SpawnCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SpawnCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("IdleFront");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SpawnCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SpawnCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.SpawnCode.GDPlayerObjects1[i].getVariableNumber(gdjs.SpawnCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.SpawnCode.GDPlayerObjects1[k] = gdjs.SpawnCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.SpawnCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10914644);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.SpawnCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.SpawnCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SpawnCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.SpawnCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SpawnCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("IdleRight");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitbox"), gdjs.SpawnCode.GDPlayerHitboxObjects1);
gdjs.copyArray(runtimeScene.getObjects("TriggerToNext"), gdjs.SpawnCode.GDTriggerToNextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SpawnCode.mapOfGDgdjs_9546SpawnCode_9546GDPlayerHitboxObjects1Objects, gdjs.SpawnCode.mapOfGDgdjs_9546SpawnCode_9546GDTriggerToNextObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackOut"), gdjs.SpawnCode.GDBlackOutObjects1);
/* Reuse gdjs.SpawnCode.GDPlayerHitboxObjects1 */
{for(var i = 0, len = gdjs.SpawnCode.GDBlackOutObjects1.length ;i < len;++i) {
    gdjs.SpawnCode.GDBlackOutObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FadeIn", 255, "linear", 0.3, false);
}
}{for(var i = 0, len = gdjs.SpawnCode.GDPlayerHitboxObjects1.length ;i < len;++i) {
    gdjs.SpawnCode.GDPlayerHitboxObjects1[i].activateBehavior("TopDownMovement", false);
}
}
{ //Subevents
gdjs.SpawnCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackOut"), gdjs.SpawnCode.GDBlackOutObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerHitbox"), gdjs.SpawnCode.GDPlayerHitboxObjects1);
{for(var i = 0, len = gdjs.SpawnCode.GDBlackOutObjects1.length ;i < len;++i) {
    gdjs.SpawnCode.GDBlackOutObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.SpawnCode.GDPlayerHitboxObjects1.length ;i < len;++i) {
    gdjs.SpawnCode.GDPlayerHitboxObjects1[i].activateBehavior("TopDownMovement", true);
}
}{for(var i = 0, len = gdjs.SpawnCode.GDBlackOutObjects1.length ;i < len;++i) {
    gdjs.SpawnCode.GDBlackOutObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FadeIn", 0, "linear", 0.3, false);
}
}}

}


};

gdjs.SpawnCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SpawnCode.GDPlayerHitboxObjects1.length = 0;
gdjs.SpawnCode.GDPlayerHitboxObjects2.length = 0;
gdjs.SpawnCode.GDPlayerObjects1.length = 0;
gdjs.SpawnCode.GDPlayerObjects2.length = 0;
gdjs.SpawnCode.GDgrassObjects1.length = 0;
gdjs.SpawnCode.GDgrassObjects2.length = 0;
gdjs.SpawnCode.GDMuseumObjects1.length = 0;
gdjs.SpawnCode.GDMuseumObjects2.length = 0;
gdjs.SpawnCode.GDTreeObjects1.length = 0;
gdjs.SpawnCode.GDTreeObjects2.length = 0;
gdjs.SpawnCode.GDBarriersObjects1.length = 0;
gdjs.SpawnCode.GDBarriersObjects2.length = 0;
gdjs.SpawnCode.GDTriggerToNextObjects1.length = 0;
gdjs.SpawnCode.GDTriggerToNextObjects2.length = 0;
gdjs.SpawnCode.GDBlackOutObjects1.length = 0;
gdjs.SpawnCode.GDBlackOutObjects2.length = 0;

gdjs.SpawnCode.eventsList1(runtimeScene);
gdjs.SpawnCode.GDPlayerHitboxObjects1.length = 0;
gdjs.SpawnCode.GDPlayerHitboxObjects2.length = 0;
gdjs.SpawnCode.GDPlayerObjects1.length = 0;
gdjs.SpawnCode.GDPlayerObjects2.length = 0;
gdjs.SpawnCode.GDgrassObjects1.length = 0;
gdjs.SpawnCode.GDgrassObjects2.length = 0;
gdjs.SpawnCode.GDMuseumObjects1.length = 0;
gdjs.SpawnCode.GDMuseumObjects2.length = 0;
gdjs.SpawnCode.GDTreeObjects1.length = 0;
gdjs.SpawnCode.GDTreeObjects2.length = 0;
gdjs.SpawnCode.GDBarriersObjects1.length = 0;
gdjs.SpawnCode.GDBarriersObjects2.length = 0;
gdjs.SpawnCode.GDTriggerToNextObjects1.length = 0;
gdjs.SpawnCode.GDTriggerToNextObjects2.length = 0;
gdjs.SpawnCode.GDBlackOutObjects1.length = 0;
gdjs.SpawnCode.GDBlackOutObjects2.length = 0;


return;

}

gdjs['SpawnCode'] = gdjs.SpawnCode;
