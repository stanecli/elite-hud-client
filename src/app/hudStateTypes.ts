export interface HudState {
    status?: StatusState;
    loadout?: LoadoutSate;
    cargo?: CargoState;
    shipFlags?: ShipFlags;
    ship: ShipControlState;
    fsd: FSDState;
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

export interface CargoState {
    count: {
        value: number;
    };
    inventory: {
        value: CargoItem[];
    };
}

export interface CargoItem {
    count: number;
    name: string;
    name_Localised: string;
    stolen: number;
}

export enum FSDStatus {
    Thrusters,
    SuperCruise,
    HyerpJump,
}

export interface StatusState {
    commander: string;
    shipType: string;
    shipTypeLocalised: string;
    shipName: string;
    fuelLevel: number;
    fuelCapacity: number;
    credits: number;
    insurance: number;
}

export enum ShipFlags {
    None = 0,
    Docked = 1,
    Landed = 1 << 1,
    Gear = 1 << 2,
    Shields = 1 << 3,
    Supercruise = 1 << 4,
    FlightAssistOff = 1 << 5,
    Hardpoints = 1 << 6,
    Winging = 1 << 7,
    Lights = 1 << 8,
    CargoScoop = 1 << 9,
    SilentRunning = 1 << 10,
    Scooping = 1 << 11,
    SrvHandbreak = 1 << 12,
    SrvTurret = 1 << 13,
    SrvNearShip = 1 << 14,
    SrvDriveAssist = 1 << 15,
    MassLocked = 1 << 16,
    FsdCharging = 1 << 17,
    FsdCooldown = 1 << 18,
    LowFuel = 1 << 19,
    Overheating = 1 << 20,
    HasLatlong = 1 << 21,
    InDanger = 1 << 22,
    InInterdiction = 1 << 23,
    InMothership = 1 << 24,
    InFighter = 1 << 25,
    InSrv = 1 << 26,
    AnalysisMode = 1 << 27,
    NightVision = 1 << 28,
}

export interface LoadGameData {
    fid: string;
    commander: string;
    hasHorizons: boolean;
    hasOdyssey: boolean;
    ship: string;
    ship_Localised: string;
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
