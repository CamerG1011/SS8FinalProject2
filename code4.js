gdjs.Museum4Code = {};
gdjs.Museum4Code.localVariables = [];
gdjs.Museum4Code.GDPlayerHitboxObjects1= [];
gdjs.Museum4Code.GDPlayerHitboxObjects2= [];
gdjs.Museum4Code.GDPlayerObjects1= [];
gdjs.Museum4Code.GDPlayerObjects2= [];
gdjs.Museum4Code.GDMuseumObjects1= [];
gdjs.Museum4Code.GDMuseumObjects2= [];
gdjs.Museum4Code.GDTreeObjects1= [];
gdjs.Museum4Code.GDTreeObjects2= [];
gdjs.Museum4Code.GDBarriersObjects1= [];
gdjs.Museum4Code.GDBarriersObjects2= [];
gdjs.Museum4Code.GDTriggerToNextObjects1= [];
gdjs.Museum4Code.GDTriggerToNextObjects2= [];
gdjs.Museum4Code.GDBlackOutObjects1= [];
gdjs.Museum4Code.GDBlackOutObjects2= [];
gdjs.Museum4Code.GDMuseumBackgroundObjects1= [];
gdjs.Museum4Code.GDMuseumBackgroundObjects2= [];
gdjs.Museum4Code.GDMuseumBackground2Objects1= [];
gdjs.Museum4Code.GDMuseumBackground2Objects2= [];
gdjs.Museum4Code.GDInvisBarriersObjects1= [];
gdjs.Museum4Code.GDInvisBarriersObjects2= [];
gdjs.Museum4Code.GDTriggerToSpawnObjects1= [];
gdjs.Museum4Code.GDTriggerToSpawnObjects2= [];
gdjs.Museum4Code.GDPaintingObjects1= [];
gdjs.Museum4Code.GDPaintingObjects2= [];
gdjs.Museum4Code.GDObjectInteractionAreaObjects1= [];
gdjs.Museum4Code.GDObjectInteractionAreaObjects2= [];
gdjs.Museum4Code.GDTutorialObjects1= [];
gdjs.Museum4Code.GDTutorialObjects2= [];
gdjs.Museum4Code.GDExitObjects1= [];
gdjs.Museum4Code.GDExitObjects2= [];
gdjs.Museum4Code.GDImageObjects1= [];
gdjs.Museum4Code.GDImageObjects2= [];


gdjs.Museum4Code.mapOfGDgdjs_9546Museum4Code_9546GDPlayerHitboxObjects1Objects = Hashtable.newFrom({"PlayerHitbox": gdjs.Museum4Code.GDPlayerHitboxObjects1});
gdjs.Museum4Code.mapOfGDgdjs_9546Museum4Code_9546GDTriggerToSpawnObjects1Objects = Hashtable.newFrom({"TriggerToSpawn": gdjs.Museum4Code.GDTriggerToSpawnObjects1});
gdjs.Museum4Code.asyncCallback10424364 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Museum4Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Museum3", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}gdjs.Museum4Code.localVariables.length = 0;
}
gdjs.Museum4Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Museum4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Museum4Code.asyncCallback10424364(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Museum4Code.asyncCallback10430124 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Museum4Code.localVariables);
{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 1, 25, 1);
}gdjs.Museum4Code.localVariables.length = 0;
}
gdjs.Museum4Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Museum4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Museum4Code.asyncCallback10430124(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Museum4Code.mapOfGDgdjs_9546Museum4Code_9546GDPlayerHitboxObjects1Objects = Hashtable.newFrom({"PlayerHitbox": gdjs.Museum4Code.GDPlayerHitboxObjects1});
gdjs.Museum4Code.mapOfGDgdjs_9546Museum4Code_9546GDObjectInteractionAreaObjects1Objects = Hashtable.newFrom({"ObjectInteractionArea": gdjs.Museum4Code.GDObjectInteractionAreaObjects1});
gdjs.Museum4Code.mapOfGDgdjs_9546Museum4Code_9546GDPlayerHitboxObjects1Objects = Hashtable.newFrom({"PlayerHitbox": gdjs.Museum4Code.GDPlayerHitboxObjects1});
gdjs.Museum4Code.mapOfGDgdjs_9546Museum4Code_9546GDObjectInteractionAreaObjects1Objects = Hashtable.newFrom({"ObjectInteractionArea": gdjs.Museum4Code.GDObjectInteractionAreaObjects1});
gdjs.Museum4Code.mapOfGDgdjs_9546Museum4Code_9546GDPlayerHitboxObjects1Objects = Hashtable.newFrom({"PlayerHitbox": gdjs.Museum4Code.GDPlayerHitboxObjects1});
gdjs.Museum4Code.mapOfGDgdjs_9546Museum4Code_9546GDObjectInteractionAreaObjects1Objects = Hashtable.newFrom({"ObjectInteractionArea": gdjs.Museum4Code.GDObjectInteractionAreaObjects1});
gdjs.Museum4Code.mapOfGDgdjs_9546Museum4Code_9546GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs.Museum4Code.GDExitObjects1});
gdjs.Museum4Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Museum4Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerHitbox"), gdjs.Museum4Code.GDPlayerHitboxObjects1);
{for(var i = 0, len = gdjs.Museum4Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDPlayerObjects1[i].setPosition((( gdjs.Museum4Code.GDPlayerHitboxObjects1.length === 0 ) ? 0 :gdjs.Museum4Code.GDPlayerHitboxObjects1[0].getPointX("")),(( gdjs.Museum4Code.GDPlayerHitboxObjects1.length === 0 ) ? 0 :gdjs.Museum4Code.GDPlayerHitboxObjects1[0].getPointY("")));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10354516);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitbox"), gdjs.Museum4Code.GDPlayerHitboxObjects1);
{for(var i = 0, len = gdjs.Museum4Code.GDPlayerHitboxObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDPlayerHitboxObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10409860);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Museum4Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Museum4Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDPlayerObjects1[i].returnVariable(gdjs.Museum4Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.Museum4Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.Museum4Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("WalkBack");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10411412);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Museum4Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Museum4Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDPlayerObjects1[i].returnVariable(gdjs.Museum4Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.Museum4Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.Museum4Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("WalkRight");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10413116);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Museum4Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Museum4Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDPlayerObjects1[i].returnVariable(gdjs.Museum4Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(2);
}
}{for(var i = 0, len = gdjs.Museum4Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.Museum4Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("WalkFront");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10414900);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Museum4Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Museum4Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDPlayerObjects1[i].returnVariable(gdjs.Museum4Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(3);
}
}{for(var i = 0, len = gdjs.Museum4Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDPlayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.Museum4Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("WalkRight");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Museum4Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Museum4Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Museum4Code.GDPlayerObjects1[i].getVariableNumber(gdjs.Museum4Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Museum4Code.GDPlayerObjects1[k] = gdjs.Museum4Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Museum4Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10416932);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Museum4Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Museum4Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.Museum4Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("IdleBack");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Museum4Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Museum4Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Museum4Code.GDPlayerObjects1[i].getVariableNumber(gdjs.Museum4Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Museum4Code.GDPlayerObjects1[k] = gdjs.Museum4Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Museum4Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10418612);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Museum4Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Museum4Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.Museum4Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("IdleRight");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Museum4Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Museum4Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Museum4Code.GDPlayerObjects1[i].getVariableNumber(gdjs.Museum4Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.Museum4Code.GDPlayerObjects1[k] = gdjs.Museum4Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Museum4Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10420252);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Museum4Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Museum4Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.Museum4Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("IdleFront");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Museum4Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Museum4Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Museum4Code.GDPlayerObjects1[i].getVariableNumber(gdjs.Museum4Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.Museum4Code.GDPlayerObjects1[k] = gdjs.Museum4Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Museum4Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10421892);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Museum4Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Museum4Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDPlayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.Museum4Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("IdleRight");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitbox"), gdjs.Museum4Code.GDPlayerHitboxObjects1);
gdjs.copyArray(runtimeScene.getObjects("TriggerToSpawn"), gdjs.Museum4Code.GDTriggerToSpawnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Museum4Code.mapOfGDgdjs_9546Museum4Code_9546GDPlayerHitboxObjects1Objects, gdjs.Museum4Code.mapOfGDgdjs_9546Museum4Code_9546GDTriggerToSpawnObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackOut"), gdjs.Museum4Code.GDBlackOutObjects1);
/* Reuse gdjs.Museum4Code.GDPlayerHitboxObjects1 */
{for(var i = 0, len = gdjs.Museum4Code.GDBlackOutObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDBlackOutObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FadeIn", 255, "linear", 0.3, false);
}
}{for(var i = 0, len = gdjs.Museum4Code.GDPlayerHitboxObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDPlayerHitboxObjects1[i].activateBehavior("TopDownMovement", false);
}
}
{ //Subevents
gdjs.Museum4Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackOut"), gdjs.Museum4Code.GDBlackOutObjects1);
gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.Museum4Code.GDExitObjects1);
gdjs.copyArray(runtimeScene.getObjects("Image"), gdjs.Museum4Code.GDImageObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerHitbox"), gdjs.Museum4Code.GDPlayerHitboxObjects1);
{for(var i = 0, len = gdjs.Museum4Code.GDBlackOutObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDBlackOutObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.Museum4Code.GDExitObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDExitObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.Museum4Code.GDImageObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDImageObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.Museum4Code.GDPlayerHitboxObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDPlayerHitboxObjects1[i].activateBehavior("TopDownMovement", true);
}
}{for(var i = 0, len = gdjs.Museum4Code.GDBlackOutObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDBlackOutObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FadeIn", 0, "linear", 0.3, false);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "untitled [music].mp3", 1, true, 0, 1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "untitled [vocals].mp3", 2, true, 0, 1);
}
{ //Subevents
gdjs.Museum4Code.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("ObjectInteractionArea"), gdjs.Museum4Code.GDObjectInteractionAreaObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerHitbox"), gdjs.Museum4Code.GDPlayerHitboxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Museum4Code.mapOfGDgdjs_9546Museum4Code_9546GDPlayerHitboxObjects1Objects, gdjs.Museum4Code.mapOfGDgdjs_9546Museum4Code_9546GDObjectInteractionAreaObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10431508);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Tutorial"), gdjs.Museum4Code.GDTutorialObjects1);
{for(var i = 0, len = gdjs.Museum4Code.GDTutorialObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDTutorialObjects1[i].getBehavior("Tween").addObjectPositionTween2("MoveUp", 465, 512, "easeOutQuint", 0.5, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ObjectInteractionArea"), gdjs.Museum4Code.GDObjectInteractionAreaObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerHitbox"), gdjs.Museum4Code.GDPlayerHitboxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Museum4Code.mapOfGDgdjs_9546Museum4Code_9546GDPlayerHitboxObjects1Objects, gdjs.Museum4Code.mapOfGDgdjs_9546Museum4Code_9546GDObjectInteractionAreaObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10433284);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackOut"), gdjs.Museum4Code.GDBlackOutObjects1);
gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.Museum4Code.GDExitObjects1);
gdjs.copyArray(runtimeScene.getObjects("Image"), gdjs.Museum4Code.GDImageObjects1);
/* Reuse gdjs.Museum4Code.GDPlayerHitboxObjects1 */
{for(var i = 0, len = gdjs.Museum4Code.GDBlackOutObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDBlackOutObjects1[i].getBehavior("Tween").addObjectOpacityTween2("Objecto", 150, "linear", 0.3, false);
}
}{for(var i = 0, len = gdjs.Museum4Code.GDImageObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDImageObjects1[i].getBehavior("Tween").addObjectOpacityTween2("Objecto", 255, "linear", 0.3, false);
}
}{for(var i = 0, len = gdjs.Museum4Code.GDExitObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDExitObjects1[i].getBehavior("Tween").addObjectOpacityTween2("Objecto", 255, "linear", 0.3, false);
}
}{for(var i = 0, len = gdjs.Museum4Code.GDPlayerHitboxObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDPlayerHitboxObjects1[i].activateBehavior("TopDownMovement", false);
}
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 1, 6, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ObjectInteractionArea"), gdjs.Museum4Code.GDObjectInteractionAreaObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerHitbox"), gdjs.Museum4Code.GDPlayerHitboxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Museum4Code.mapOfGDgdjs_9546Museum4Code_9546GDPlayerHitboxObjects1Objects, gdjs.Museum4Code.mapOfGDgdjs_9546Museum4Code_9546GDObjectInteractionAreaObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10436580);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Tutorial"), gdjs.Museum4Code.GDTutorialObjects1);
{for(var i = 0, len = gdjs.Museum4Code.GDTutorialObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDTutorialObjects1[i].getBehavior("Tween").addObjectPositionTween2("MoveDown", 465, 843, "easeOutQuint", 0.5, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.Museum4Code.GDExitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Museum4Code.mapOfGDgdjs_9546Museum4Code_9546GDExitObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10437932);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackOut"), gdjs.Museum4Code.GDBlackOutObjects1);
/* Reuse gdjs.Museum4Code.GDExitObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Image"), gdjs.Museum4Code.GDImageObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerHitbox"), gdjs.Museum4Code.GDPlayerHitboxObjects1);
{for(var i = 0, len = gdjs.Museum4Code.GDBlackOutObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDBlackOutObjects1[i].getBehavior("Tween").addObjectOpacityTween2("Out", 0, "linear", 0.3, false);
}
}{for(var i = 0, len = gdjs.Museum4Code.GDExitObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDExitObjects1[i].getBehavior("Tween").addObjectOpacityTween2("Out", 0, "linear", 0.3, false);
}
}{for(var i = 0, len = gdjs.Museum4Code.GDImageObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDImageObjects1[i].getBehavior("Tween").addObjectOpacityTween2("Out", 0, "linear", 0.3, false);
}
}{for(var i = 0, len = gdjs.Museum4Code.GDPlayerHitboxObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDPlayerHitboxObjects1[i].activateBehavior("TopDownMovement", true);
}
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 1, 25, 1);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 2, 0, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitbox"), gdjs.Museum4Code.GDPlayerHitboxObjects1);
{for(var i = 0, len = gdjs.Museum4Code.GDPlayerHitboxObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDPlayerHitboxObjects1[i].setX(1700);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitbox"), gdjs.Museum4Code.GDPlayerHitboxObjects1);
{for(var i = 0, len = gdjs.Museum4Code.GDPlayerHitboxObjects1.length ;i < len;++i) {
    gdjs.Museum4Code.GDPlayerHitboxObjects1[i].setX(150);
}
}}

}


};

gdjs.Museum4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Museum4Code.GDPlayerHitboxObjects1.length = 0;
gdjs.Museum4Code.GDPlayerHitboxObjects2.length = 0;
gdjs.Museum4Code.GDPlayerObjects1.length = 0;
gdjs.Museum4Code.GDPlayerObjects2.length = 0;
gdjs.Museum4Code.GDMuseumObjects1.length = 0;
gdjs.Museum4Code.GDMuseumObjects2.length = 0;
gdjs.Museum4Code.GDTreeObjects1.length = 0;
gdjs.Museum4Code.GDTreeObjects2.length = 0;
gdjs.Museum4Code.GDBarriersObjects1.length = 0;
gdjs.Museum4Code.GDBarriersObjects2.length = 0;
gdjs.Museum4Code.GDTriggerToNextObjects1.length = 0;
gdjs.Museum4Code.GDTriggerToNextObjects2.length = 0;
gdjs.Museum4Code.GDBlackOutObjects1.length = 0;
gdjs.Museum4Code.GDBlackOutObjects2.length = 0;
gdjs.Museum4Code.GDMuseumBackgroundObjects1.length = 0;
gdjs.Museum4Code.GDMuseumBackgroundObjects2.length = 0;
gdjs.Museum4Code.GDMuseumBackground2Objects1.length = 0;
gdjs.Museum4Code.GDMuseumBackground2Objects2.length = 0;
gdjs.Museum4Code.GDInvisBarriersObjects1.length = 0;
gdjs.Museum4Code.GDInvisBarriersObjects2.length = 0;
gdjs.Museum4Code.GDTriggerToSpawnObjects1.length = 0;
gdjs.Museum4Code.GDTriggerToSpawnObjects2.length = 0;
gdjs.Museum4Code.GDPaintingObjects1.length = 0;
gdjs.Museum4Code.GDPaintingObjects2.length = 0;
gdjs.Museum4Code.GDObjectInteractionAreaObjects1.length = 0;
gdjs.Museum4Code.GDObjectInteractionAreaObjects2.length = 0;
gdjs.Museum4Code.GDTutorialObjects1.length = 0;
gdjs.Museum4Code.GDTutorialObjects2.length = 0;
gdjs.Museum4Code.GDExitObjects1.length = 0;
gdjs.Museum4Code.GDExitObjects2.length = 0;
gdjs.Museum4Code.GDImageObjects1.length = 0;
gdjs.Museum4Code.GDImageObjects2.length = 0;

gdjs.Museum4Code.eventsList2(runtimeScene);
gdjs.Museum4Code.GDPlayerHitboxObjects1.length = 0;
gdjs.Museum4Code.GDPlayerHitboxObjects2.length = 0;
gdjs.Museum4Code.GDPlayerObjects1.length = 0;
gdjs.Museum4Code.GDPlayerObjects2.length = 0;
gdjs.Museum4Code.GDMuseumObjects1.length = 0;
gdjs.Museum4Code.GDMuseumObjects2.length = 0;
gdjs.Museum4Code.GDTreeObjects1.length = 0;
gdjs.Museum4Code.GDTreeObjects2.length = 0;
gdjs.Museum4Code.GDBarriersObjects1.length = 0;
gdjs.Museum4Code.GDBarriersObjects2.length = 0;
gdjs.Museum4Code.GDTriggerToNextObjects1.length = 0;
gdjs.Museum4Code.GDTriggerToNextObjects2.length = 0;
gdjs.Museum4Code.GDBlackOutObjects1.length = 0;
gdjs.Museum4Code.GDBlackOutObjects2.length = 0;
gdjs.Museum4Code.GDMuseumBackgroundObjects1.length = 0;
gdjs.Museum4Code.GDMuseumBackgroundObjects2.length = 0;
gdjs.Museum4Code.GDMuseumBackground2Objects1.length = 0;
gdjs.Museum4Code.GDMuseumBackground2Objects2.length = 0;
gdjs.Museum4Code.GDInvisBarriersObjects1.length = 0;
gdjs.Museum4Code.GDInvisBarriersObjects2.length = 0;
gdjs.Museum4Code.GDTriggerToSpawnObjects1.length = 0;
gdjs.Museum4Code.GDTriggerToSpawnObjects2.length = 0;
gdjs.Museum4Code.GDPaintingObjects1.length = 0;
gdjs.Museum4Code.GDPaintingObjects2.length = 0;
gdjs.Museum4Code.GDObjectInteractionAreaObjects1.length = 0;
gdjs.Museum4Code.GDObjectInteractionAreaObjects2.length = 0;
gdjs.Museum4Code.GDTutorialObjects1.length = 0;
gdjs.Museum4Code.GDTutorialObjects2.length = 0;
gdjs.Museum4Code.GDExitObjects1.length = 0;
gdjs.Museum4Code.GDExitObjects2.length = 0;
gdjs.Museum4Code.GDImageObjects1.length = 0;
gdjs.Museum4Code.GDImageObjects2.length = 0;


return;

}

gdjs['Museum4Code'] = gdjs.Museum4Code;
