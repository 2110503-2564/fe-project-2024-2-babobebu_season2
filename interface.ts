interface VenueItem {
    _id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string,
    dailyrate: number,
    __v: number,
    id: string
  }
  
  interface VenueJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: VenueItem[]
  }


  interface CompanyJson{
    success: boolean,
    count: number,
    pagination: Object,
    data: CompanyItem[]
  }

  interface CompanyItem{
    _id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    website: string,
    description: string,
    telephonenumber: string,
    __v: number,
  }