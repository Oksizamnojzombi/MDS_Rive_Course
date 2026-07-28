// ============================================================
//  Rive — hero + lesson cards
//  Змінюй HERO_SRC і HERO_STATE_MACHINE щоб підключити свій hero .riv
// ============================================================

const HERO_SRC = "09.BonusLesson/Final_Result/09.mds_bonuslesson2.riv";
const HERO_STATE_MACHINE = "Room_MainStMashine";

const fitContain = {
  fit: rive.Fit.Contain,
  alignment: rive.Alignment.Center,
};

export const instances = [];

function mount(canvasId, src, stateMachine, artboard) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const inst = new rive.Rive({
    src,
    canvas,
    artboard,
    autoplay: true,
    stateMachines: stateMachine,
    layout: new rive.Layout(fitContain),
    onLoad: () => inst.resizeDrawingSurfaceToCanvas(),
  });
  instances.push(inst);
}

mount("heroCanvas", HERO_SRC, HERO_STATE_MACHINE);

mount("canvas1", "01.Lesson_01/Final_Result/01.mds_lesson_01_jumping_ball.riv", "Jumping_Ball");
mount("canvas2", "02.Lesson_02/Final_Result/02.mds_lesson02_waterbubble.riv", "BubleStateMashine");
mount("canvas3", "03.Lesson_03/Final_Result/03.mds_lesson03_bellymixing.riv", "Belly_SatetMashine");
mount("canvas4", "04.Lesson_04/Final_Result/04.mds_lesson04_sunnyrock.riv", "RockSunnyStateMashine");
mount("canvas5", "05.Lesson_05/Final_Result/05.mds_lesson05_artistparallax.riv", "Artist_StateMashineFinal");
mount("canvas6", "06.Lesson_06/Final_Result/06.mds_lesson06_lazerboy.riv", "LazerBoyStateMashine");
mount("canvas7", "07.Lesson_07/Final_Result/07.mds_lesson07_firesiage.riv", "Fire360_StateMashine");
mount("canvas8", "08.Lesson_08/Final_Result/08.mds_lesson08_octopus.riv", "OctopusEcho");
mount("canvas9", "09.Lesson_09/Final_Result/09.mds_lesson09.riv", "State Machine 1", "Inner Space");
mount("canvas10", "10.Lesson_10/Final_Result/10.mdl_pluto_lesson10.riv", "PlutoRoutine", "Planet_Remap");
mount("canvas11", "11.Lesson_11/Final_Result/11.mds_lesson11_spaceduo.riv", "SpaceDuo");
