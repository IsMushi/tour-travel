export default interface TourItem  {
    id?: string | number,
    title: string,
    city: string,
    distance: number,
    address:string,
    price: number,
    maxGroupSize: number,
    desc: string,
    reviews: [
      {
        name: string,
        rating: number,
        image: string
      },
    ],
    avgRating: 4.5,
    photo: string,
    featured: true,
  }