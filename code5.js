gdjs.CreditsCode = {};
gdjs.CreditsCode.localVariables = [];
gdjs.CreditsCode.GDPlayerHitboxObjects1= [];
gdjs.CreditsCode.GDPlayerHitboxObjects2= [];
gdjs.CreditsCode.GDPlayerObjects1= [];
gdjs.CreditsCode.GDPlayerObjects2= [];
gdjs.CreditsCode.GDMuseumObjects1= [];
gdjs.CreditsCode.GDMuseumObjects2= [];
gdjs.CreditsCode.GDTreeObjects1= [];
gdjs.CreditsCode.GDTreeObjects2= [];
gdjs.CreditsCode.GDBarriersObjects1= [];
gdjs.CreditsCode.GDBarriersObjects2= [];
gdjs.CreditsCode.GDTriggerToNextObjects1= [];
gdjs.CreditsCode.GDTriggerToNextObjects2= [];
gdjs.CreditsCode.GDMuseumBackgroundObjects1= [];
gdjs.CreditsCode.GDMuseumBackgroundObjects2= [];
gdjs.CreditsCode.GDMuseumBackground2Objects1= [];
gdjs.CreditsCode.GDMuseumBackground2Objects2= [];
gdjs.CreditsCode.GDInvisBarriersObjects1= [];
gdjs.CreditsCode.GDInvisBarriersObjects2= [];
gdjs.CreditsCode.GDTriggerToSpawnObjects1= [];
gdjs.CreditsCode.GDTriggerToSpawnObjects2= [];
gdjs.CreditsCode.GDTutorialObjects1= [];
gdjs.CreditsCode.GDTutorialObjects2= [];
gdjs.CreditsCode.GDCreditObjects1= [];
gdjs.CreditsCode.GDCreditObjects2= [];
gdjs.CreditsCode.GDBlackOutObjects1= [];
gdjs.CreditsCode.GDBlackOutObjects2= [];
gdjs.CreditsCode.GDCredit2Objects1= [];
gdjs.CreditsCode.GDCredit2Objects2= [];
gdjs.CreditsCode.GDCredit3Objects1= [];
gdjs.CreditsCode.GDCredit3Objects2= [];


gdjs.CreditsCode.mapOfGDgdjs_9546CreditsCode_9546GDPlayerHitboxObjects1Objects = Hashtable.newFrom({"PlayerHitbox": gdjs.CreditsCode.GDPlayerHitboxObjects1});
gdjs.CreditsCode.mapOfGDgdjs_9546CreditsCode_9546GDTriggerToSpawnObjects1Objects = Hashtable.newFrom({"TriggerToSpawn": gdjs.CreditsCode.GDTriggerToSpawnObjects1});
gdjs.CreditsCode.asyncCallback10699812 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CreditsCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Museum4", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}gdjs.CreditsCode.localVariables.length = 0;
}
gdjs.CreditsCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CreditsCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.CreditsCode.asyncCallback10699812(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.CreditsCode.asyncCallback10702876 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CreditsCode.localVariables);
{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 1, 25, 1);
}gdjs.CreditsCode.localVariables.length = 0;
}
gdjs.CreditsCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CreditsCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.CreditsCode.asyncCallback10702876(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.CreditsCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CreditsCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerHitbox"), gdjs.CreditsCode.GDPlayerHitboxObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDPlayerObjects1[i].setPosition((( gdjs.CreditsCode.GDPlayerHitboxObjects1.length === 0 ) ? 0 :gdjs.CreditsCode.GDPlayerHitboxObjects1[0].getPointX("")),(( gdjs.CreditsCode.GDPlayerHitboxObjects1.length === 0 ) ? 0 :gdjs.CreditsCode.GDPlayerHitboxObjects1[0].getPointY("")));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10677428);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitbox"), gdjs.CreditsCode.GDPlayerHitboxObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDPlayerHitboxObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDPlayerHitboxObjects1[i].hide();
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10686396);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CreditsCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDPlayerObjects1[i].returnVariable(gdjs.CreditsCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.CreditsCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.CreditsCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("WalkBack");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10687404);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CreditsCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDPlayerObjects1[i].returnVariable(gdjs.CreditsCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.CreditsCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.CreditsCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("WalkRight");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10688556);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CreditsCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDPlayerObjects1[i].returnVariable(gdjs.CreditsCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(2);
}
}{for(var i = 0, len = gdjs.CreditsCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.CreditsCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("WalkFront");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10689708);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CreditsCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDPlayerObjects1[i].returnVariable(gdjs.CreditsCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(3);
}
}{for(var i = 0, len = gdjs.CreditsCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.CreditsCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("WalkRight");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CreditsCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreditsCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.CreditsCode.GDPlayerObjects1[i].getVariableNumber(gdjs.CreditsCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.CreditsCode.GDPlayerObjects1[k] = gdjs.CreditsCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.CreditsCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10690772);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CreditsCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.CreditsCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.CreditsCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("IdleBack");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CreditsCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreditsCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.CreditsCode.GDPlayerObjects1[i].getVariableNumber(gdjs.CreditsCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.CreditsCode.GDPlayerObjects1[k] = gdjs.CreditsCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.CreditsCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10691940);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CreditsCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.CreditsCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.CreditsCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("IdleRight");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CreditsCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreditsCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.CreditsCode.GDPlayerObjects1[i].getVariableNumber(gdjs.CreditsCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.CreditsCode.GDPlayerObjects1[k] = gdjs.CreditsCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.CreditsCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10693580);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CreditsCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.CreditsCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.CreditsCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("IdleFront");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CreditsCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreditsCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.CreditsCode.GDPlayerObjects1[i].getVariableNumber(gdjs.CreditsCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.CreditsCode.GDPlayerObjects1[k] = gdjs.CreditsCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.CreditsCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10695220);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CreditsCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.CreditsCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.CreditsCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("IdleRight");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitbox"), gdjs.CreditsCode.GDPlayerHitboxObjects1);
gdjs.copyArray(runtimeScene.getObjects("TriggerToSpawn"), gdjs.CreditsCode.GDTriggerToSpawnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CreditsCode.mapOfGDgdjs_9546CreditsCode_9546GDPlayerHitboxObjects1Objects, gdjs.CreditsCode.mapOfGDgdjs_9546CreditsCode_9546GDTriggerToSpawnObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackOut"), gdjs.CreditsCode.GDBlackOutObjects1);
/* Reuse gdjs.CreditsCode.GDPlayerHitboxObjects1 */
{for(var i = 0, len = gdjs.CreditsCode.GDBlackOutObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDBlackOutObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FadeIn", 255, "linear", 0.3, false);
}
}{for(var i = 0, len = gdjs.CreditsCode.GDPlayerHitboxObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDPlayerHitboxObjects1[i].activateBehavior("TopDownMovement", false);
}
}
{ //Subevents
gdjs.CreditsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackOut"), gdjs.CreditsCode.GDBlackOutObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerHitbox"), gdjs.CreditsCode.GDPlayerHitboxObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDBlackOutObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDBlackOutObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.CreditsCode.GDPlayerHitboxObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDPlayerHitboxObjects1[i].activateBehavior("TopDownMovement", true);
}
}{for(var i = 0, len = gdjs.CreditsCode.GDBlackOutObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDBlackOutObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FadeIn", 0, "linear", 0.3, false);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "untitled [music].mp3", 1, true, 0, 1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "untitled [vocals].mp3", 2, true, 0, 1);
}
{ //Subevents
gdjs.CreditsCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



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
gdjs.copyArray(runtimeScene.getObjects("PlayerHitbox"), gdjs.CreditsCode.GDPlayerHitboxObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDPlayerHitboxObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDPlayerHitboxObjects1[i].setX(1700);
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
gdjs.copyArray(runtimeScene.getObjects("PlayerHitbox"), gdjs.CreditsCode.GDPlayerHitboxObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDPlayerHitboxObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDPlayerHitboxObjects1[i].setX(150);
}
}}

}


};

gdjs.CreditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditsCode.GDPlayerHitboxObjects1.length = 0;
gdjs.CreditsCode.GDPlayerHitboxObjects2.length = 0;
gdjs.CreditsCode.GDPlayerObjects1.length = 0;
gdjs.CreditsCode.GDPlayerObjects2.length = 0;
gdjs.CreditsCode.GDMuseumObjects1.length = 0;
gdjs.CreditsCode.GDMuseumObjects2.length = 0;
gdjs.CreditsCode.GDTreeObjects1.length = 0;
gdjs.CreditsCode.GDTreeObjects2.length = 0;
gdjs.CreditsCode.GDBarriersObjects1.length = 0;
gdjs.CreditsCode.GDBarriersObjects2.length = 0;
gdjs.CreditsCode.GDTriggerToNextObjects1.length = 0;
gdjs.CreditsCode.GDTriggerToNextObjects2.length = 0;
gdjs.CreditsCode.GDMuseumBackgroundObjects1.length = 0;
gdjs.CreditsCode.GDMuseumBackgroundObjects2.length = 0;
gdjs.CreditsCode.GDMuseumBackground2Objects1.length = 0;
gdjs.CreditsCode.GDMuseumBackground2Objects2.length = 0;
gdjs.CreditsCode.GDInvisBarriersObjects1.length = 0;
gdjs.CreditsCode.GDInvisBarriersObjects2.length = 0;
gdjs.CreditsCode.GDTriggerToSpawnObjects1.length = 0;
gdjs.CreditsCode.GDTriggerToSpawnObjects2.length = 0;
gdjs.CreditsCode.GDTutorialObjects1.length = 0;
gdjs.CreditsCode.GDTutorialObjects2.length = 0;
gdjs.CreditsCode.GDCreditObjects1.length = 0;
gdjs.CreditsCode.GDCreditObjects2.length = 0;
gdjs.CreditsCode.GDBlackOutObjects1.length = 0;
gdjs.CreditsCode.GDBlackOutObjects2.length = 0;
gdjs.CreditsCode.GDCredit2Objects1.length = 0;
gdjs.CreditsCode.GDCredit2Objects2.length = 0;
gdjs.CreditsCode.GDCredit3Objects1.length = 0;
gdjs.CreditsCode.GDCredit3Objects2.length = 0;

gdjs.CreditsCode.eventsList2(runtimeScene);
gdjs.CreditsCode.GDPlayerHitboxObjects1.length = 0;
gdjs.CreditsCode.GDPlayerHitboxObjects2.length = 0;
gdjs.CreditsCode.GDPlayerObjects1.length = 0;
gdjs.CreditsCode.GDPlayerObjects2.length = 0;
gdjs.CreditsCode.GDMuseumObjects1.length = 0;
gdjs.CreditsCode.GDMuseumObjects2.length = 0;
gdjs.CreditsCode.GDTreeObjects1.length = 0;
gdjs.CreditsCode.GDTreeObjects2.length = 0;
gdjs.CreditsCode.GDBarriersObjects1.length = 0;
gdjs.CreditsCode.GDBarriersObjects2.length = 0;
gdjs.CreditsCode.GDTriggerToNextObjects1.length = 0;
gdjs.CreditsCode.GDTriggerToNextObjects2.length = 0;
gdjs.CreditsCode.GDMuseumBackgroundObjects1.length = 0;
gdjs.CreditsCode.GDMuseumBackgroundObjects2.length = 0;
gdjs.CreditsCode.GDMuseumBackground2Objects1.length = 0;
gdjs.CreditsCode.GDMuseumBackground2Objects2.length = 0;
gdjs.CreditsCode.GDInvisBarriersObjects1.length = 0;
gdjs.CreditsCode.GDInvisBarriersObjects2.length = 0;
gdjs.CreditsCode.GDTriggerToSpawnObjects1.length = 0;
gdjs.CreditsCode.GDTriggerToSpawnObjects2.length = 0;
gdjs.CreditsCode.GDTutorialObjects1.length = 0;
gdjs.CreditsCode.GDTutorialObjects2.length = 0;
gdjs.CreditsCode.GDCreditObjects1.length = 0;
gdjs.CreditsCode.GDCreditObjects2.length = 0;
gdjs.CreditsCode.GDBlackOutObjects1.length = 0;
gdjs.CreditsCode.GDBlackOutObjects2.length = 0;
gdjs.CreditsCode.GDCredit2Objects1.length = 0;
gdjs.CreditsCode.GDCredit2Objects2.length = 0;
gdjs.CreditsCode.GDCredit3Objects1.length = 0;
gdjs.CreditsCode.GDCredit3Objects2.length = 0;


return;

}

gdjs['CreditsCode'] = gdjs.CreditsCode;
