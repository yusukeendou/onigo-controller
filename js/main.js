import CalibrationButton from "./calibration-button";
import HPBoard from "./hp-board";
import GameStatusLabel from "./game-status-label";
import InactiveScreen from "./inactive-screen";
import SpheroStates from "./sphero-states";
import SpheroClient from "./sphero-client";
import ModeManager from "./mode-manager";
import BlockManager from "./block-manager";
import Editor from "./editor";
import Compiler from "./compiler";

// webpack
import "../css/style.css";
import "font-awesome";
import "web-animations-js";

document.addEventListener("DOMContentLoaded", function() {
  const editor = new Editor();
  new InactiveScreen();
  new SpheroStates();
  new SpheroClient("ws://localhost:8080");
  new HPBoard(document.getElementById("hp"));
  new GameStatusLabel(document.getElementById("game-status-label"));
  new CalibrationButton(document.getElementById("calibration-button"));
  new ModeManager();
  new BlockManager(editor);
  new Compiler(document.getElementById("compile-log"));
});
