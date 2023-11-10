export enum RequestStatus {
    Accepted = "Accepted",
    Refused = "Refused",
    Cancelled = "Cancelled"
}

export interface Request {
    id: number;
    status: RequestStatus;
    time: Date
}