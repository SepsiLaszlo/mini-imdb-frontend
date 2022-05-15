
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
    comments: CommentWithUser[]
}

export interface Comment{
    id:number
    text:string
}

export interface CommentWithUser{
    id:number
    text:string
    user: User
}

export interface Category{
    id:number
    name:string
}

export interface User{ 
    id:number
    name: string
    email: string
    password: string
}