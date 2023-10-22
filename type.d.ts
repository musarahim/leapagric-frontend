import { type } from "os";

type farmer = {
    name: string;
    age: number;
    address: string;
    phone: string;

    };
type post = {
    title: string;
    content: string;
}

type User = {
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