export interface Duration {
    end: string;
    start: string;
}

export interface Festival {
    id: number;
    name: string;
    location: string;
    duration: Duration;
}
