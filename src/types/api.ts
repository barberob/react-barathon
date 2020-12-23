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