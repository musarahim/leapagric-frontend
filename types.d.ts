
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

type ProductionProtocol = {
    id?: number,
    step: string,
    crop?: string,
    activity_name: string,
    days_before_planting: string,
    days_after_planting: string,
    acceptable_timeline: string,
    description: string,
    value: 1.00,
    is_activity_required: string

}


type Crop = {

    id: number,
    name: string,
    image?: string,
    crop_type: string,
    growth_period: string,
    period_type: string,
    description?: string,
    crop_production_protocal?: Array<ProductionProtocol>,

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

type ServiceCategory = {
    id?: number,
    name: string,
}

type ServiceProvider = {
    id?: number,
    user: string
    enterprise_name: string,
    business_number: string,
    email?: string,
    website?: string,
    service_logo: string,
    services_offered: Array<ServiceCategory>,
    target_audience: string,
    business_model: string,
    year_established: string,
    number_of_employees: number,
    certifications: string,
    location: string,
    address?: string,
    general_remarks?: string,
    services?: Array<Service>,
}

type Expertise = {
    id?: number,
    name: string,
}

type ExtensionWorker = {
        user: number,
        names?: string,
        email?: string,
        phone_number?: string,
        alternative_contact?: string,
        highest_education_level: string,
        years_of_experience: number,
        expertise_areas: Array<Expertise>,
        district: string,
        region: string,
        county: string,
        sub_county: string,
        verified: string,
        visibility: boolean,
        general_remarks: string
        avatar?: string,
      }

type ExtensionWorkerResponse = {
    count: number,
    next: string,
    previous: string,
    results: Array<ExtensionWorker>
}

type Service = {
         id?: number,
        name: string,
        price: number,
        image: string,
        hire_sell: string,
        owner: string,
        owner_name?: string,
        owner_email?: string,
        owner_contacts?: string,
        alternative_contact?: string,
        description: string
        duration: string,
        equipment_used: string,
        material_used: string
    }