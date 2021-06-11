export interface HudState {
    status?: StatusState;
    ship: ShipControlState;
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
}
