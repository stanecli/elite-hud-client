// app events
export const EVT_INITIALIZE = "EVT_INITIALIZE";
export const EVT_LOADOUT = "EVT_LOADOUT";
export const EVT_CARGO = "EVT_CARGO";

// app actions
export const ACT_PRESS_KEYS = "ACT_PRESS_KEYS";

// ship events
export const EVT_LANDING_GEAR = "EVT_LANDING_GEAR";
export const EVT_NIGHTVISION = "EVT_NIGHTVISION";
export const EVT_HEADLIGHTS = "EVT_HEADLIGHTS";
export const EVT_CARGO_SCOOP = "EVT_CARGO_SCOOP";
export const EVT_SILENT_RUNNING = "EVT_SILENT_RUNNING";
export const EVT_HARDPOINTS = "EVT_HARDPOINTS";
export const EVT_HUD = "EVT_HUD";
export const EVT_ROTATIONAL_CORRECTION = "EVT_ROTATIONAL_CORRECTION";
export const EVT_ORBIT_LINES = "EVT_ORBIT_LINES";
export const EVT_GUI_FOCUS = "EVT_GUI_FOCUS";
export const EVT_SHIPFLAGS = "EVT_SHIPFLAGS";

// fsd events
export const EVT_SUPERCRUISE = "EVT_SUPERCRUISE"; // fired when entereing / dropping from supercruise
export const EVT_HYPERJUMP = "EVT_HYPERJUMP"; // fired when entering SC or hyperjump
export const EVT_FSD_CHARGING = "EVT_FSD_CHARGING"; // fired whenever the FSD is charging (both SC and hyper)
export const EVT_FSD_COOLDOWN = "EVT_FSD_COOLDOWN"; // fired when FSD starts / finishes cooldown
export const EVT_MASS_LOCK = "EVT_MASS_LOCK"; // fired when mass lock changes
export const EVT_SUPERCRUISE_CHARGING = "EVT_SUPERCRUISE_CHARGING"; // caused by pressing the supercruise button in the app
export const EVT_HYPERJUMP_CHARGING = "EVT_HYPERJUMP_CHARGING"; // caused by pressing hyperjump button in the app
export const EVT_DROPPING_OUT = "EVT_DROPPING_OUT"; // caused by pressing DROP or emergency drop button in the app
