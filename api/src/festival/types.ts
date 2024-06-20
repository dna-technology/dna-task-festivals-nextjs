export interface FestivalDuration {
    end: string;
    start: string;
}

export interface FestivalData {
    id: string;
    name: string;
    location: string;
    duration: FestivalDuration;
    price: number;
}
