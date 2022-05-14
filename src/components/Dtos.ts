
export interface Movie{
    id:number
    title:string
    description:string
    rating:number
    releaseDate:string
    categories: Category[]
}

export interface MovieWithComments{
    id:number
    title:string
    description:string
    rating:number
    releaseDate:string
    categories: Category[]
    comments: Comment[]
}

export interface Comment{
    id:number
    text:string
}

export interface Category{
    id:number
    name:string
}