import { Services } from "../utils";
import { Garage } from "./Garage";

export enum RequestStatus {
    Pending = "Pending",
    Accepted = "Accepted",
    Refused = "Refused",
    Cancelled = "Cancelled"
}

export interface Request {
    id: number;
    clientName: string;
    clientPhoneNumber: string;
    clientEmailAddress: string;
    garage: Garage;
    preferredDate: Date;
    vehicule: string;
    status: RequestStatus;
    time: Date;
    services: Services[];
}