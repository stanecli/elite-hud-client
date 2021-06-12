export interface HudState {
    status?: StatusState;
    ship: ShipControlState;
    fsd: FSDState;
    loadout?: LoadoutSate;
}

export interface LoadoutSate {
    hullHealth: number;
    rebuy: number;
    maxJumpRange: number;
    cargoCapacity: number;
}

export interface FSDState {
    isSuperCruiseCharging: boolean;
    isHyperJumpCharging: boolean;
    isDropping: boolean;
    status: FSDStatus;
    isCharging: boolean;
    isJumping: boolean;
    onCooldown: boolean;
    massLocked: boolean;
}

export enum FSDStatus {
    Thrusters,
    SuperCruise,
    HyerpJump,
}

export interface StatusState {
    commander: string;
    shipType: string;
    shipName: string;
    fuelLevel: number;
    fuelCapacity: number;
    credits: number;
    insurance: number;
}

export interface LoadGameData {
    fid: string;
    commander: string;
    hasHorizons: boolean;
    hasOdyssey: boolean;
    ship: string;
    shipLocalised: string;
    shipId: string;
    shipName: string;
    shipIdent: string;
    fuelLevel: number;
    fuelCapacity: number;
    isLanded: boolean;
    gameMode: string;
    credits: number;
    loan: number;
}

export interface ShipControlState {
    landingGear: boolean;
    nightVision: boolean;
    headlights: boolean;
    cargoSoop: boolean;
    hardpoints: boolean;
    silentRunning: boolean;
    rotationalCorrection: boolean;
    orbitLines: boolean;
    hud: boolean;
    guiFocus: ShipGuiFocus;
}

export enum ShipGuiFocus {
    NoFocus = 0,
    InternalPanel = 1,
    ExternalPanel = 2,
    CommsPanel = 3,
    RolePanel = 4,
    StationServices = 5,
    GalaxyMap = 6,
    SystemMap = 7,
    Orrery = 8,
    FssMode = 9,
    SaaMode = 10,
    Codex = 11,
}
