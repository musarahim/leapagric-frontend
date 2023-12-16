
type post = {
    title: string;
    content: string;
}

type User = {
    id?:number
    email:string,
    avatar:string,
    first_name: string,
    last_name: string,
    phone_number: string,
    alternative_contact: string,
    gender: number,
    username: string,
    password: string,
    re_password: string
}

type LoginUser = {
    username: string,
    password: string,
}
type UserEmail = {
    email: string
}

type SocialAuthArgs = {
    provider: string,
    state: string,
    code: string
}

type CreateUserResponse = {
    suceess: boolean,
    user: User
}
type Gender={
    id: number,
    name: string
}


type Farmer = {
      user:number,
      date_of_birth:string,
      level_of_education: string,
      occupation: string,
      experience: number,
      district:string,
      sectors?:Array<Sector>,
      farmer_names?:string,
      farmer_group ?: Array<FarmerGroup>,
      production_scale: string,
      general_remarks: string,
      district:string,
      status?: string,
      approved_date?: string
}

type EducationLevel = {
    id?: number,
    name: string
}

type FarmerGroup = {
    id: number,
    name : string,
    description?: string,
    address?: string,
    contact_person_email?: string,
    district?: string,
    leaders?: string,
    sectors?: string,
}

type Sector ={
    id?: number,
    name: string
}

type Region ={
    id?: number,
    name: string
}
type District ={
    id?: number,
    name: string,
    region?:string
}



type Crop = {

    id: number,
    name: string,
    image?: string,
    description?: string

}

type Product = {
    id?: number,
    seller?: number,
    name: string,
    description?: string,
    category: string,
    price: string,
    unit_measurement: string,
    unit: number,
    image: string,
    image_2?: string,
    image_3?: string,
    image_4?: string,
    available: string,
    seller_name?: string,
    contact_phone?: string,
    contact_email?: string,
    seller_location?: string,
    seller_image?: string,
    specification?: string,
    
    }

type ProductList = {
    count: number,
    next: string,
    previous: string,
    results: Array<Product>
}
type chat = {
    id?: number,
    sender: number,
    receiver?: number,
    message: string,
    created_at?: string,
    updated_at?: string
}