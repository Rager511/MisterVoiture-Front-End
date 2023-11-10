import { LatLng } from "leaflet";

export enum Cost {
    Low = '$',
    Medium = '$$',
    High = '$$$',
}

export enum Services {
    Washing = 'Washing',
    WheelRepair = 'Wheel Repair',
    OilChange = 'Oil Change',
    TechnicalVisit = 'Technical Visit'
}

export const defaultCenter = new LatLng(31.63358, -8.00604);
