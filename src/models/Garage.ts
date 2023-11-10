import { LatLng } from "leaflet";
import { Cost, Services } from "../utils";

export interface Garage {
    name: string;
    city: string;
    address: string;
    phoneNumber: string;
    emailAddress?: string;
    cost: Cost.Low | Cost.Medium | Cost.High;
    fulfilledRequests: number;
    services: Services[];
    location: LatLng;
}