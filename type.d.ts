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
      date_of_birth:string,
      level_of_education: string,
      occupation: string,
      experience: number,
      farmer_group : string,
      production_scale: string,
      general_remarks: string,
      status: string,
      approved_date: string
}