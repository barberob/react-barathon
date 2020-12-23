export interface IPub {
    _id: string;
    name: string;
    averageRating: number;
    comments: any[];
    description: string;
    img: string;
    latlng: {
        lat: number;
        lng: number;
    }
}

export interface IBarathon {
    _id: string
    name : string
    author : string
    checkpoints : string[]
    comments? : IComment[]
}


export interface IComment {
    text : string
    author : string
    date : string
    rating : number
}