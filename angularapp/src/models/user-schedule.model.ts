export class UserSchedule {
    Id:number
    FullName:string
    MobileNumber:string
    Email:string
    Address:string
    Area:string
    Pincode:string
    PickupDay:string
    PickupTimeSlot:string
    PackageId:number
    Package?:Package
    StatusId:number
    Status?:LaundryStatus
    ExpectedDeliveryDate?:DateTime
}
