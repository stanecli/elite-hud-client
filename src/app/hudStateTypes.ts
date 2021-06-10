import { LoadGameData } from "./hudDataTypes";

export interface HudState {
    messages: string[];
    status?: LoadGameData;
    ship: ShipState;
}

export interface ShipState {
    landingGear: boolean;
    nightVision: boolean;
    headlights: boolean;
}
