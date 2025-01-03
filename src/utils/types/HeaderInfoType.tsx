export type HeaderInfoType = {
  title?: string;
  total?: number;
  currency?: string;
};

export interface Order {
  id: number;
  orderNumber: string;
  client: string;
  orderDate: string;
  store: string;
  ship: string;
  price: string;
  totalAmount: string;
  orderStatus: string;
  payStatus: string;
}
export interface AbandonedData {
  id: number;
  client: string;
  cart: string;
  store: string;
  totalAmount: string;
  orderDate: string;
}

export interface Products {
  id: number;
  orderNumber: string;
  productName: string;
  SKU: string;
  totalProducts: string;
  orderStatus: string;
}
export interface CouponsData {
  id: number;
  coupon: string;
  category: string;
  qty: string;
  endDate: string;
  discountPercentage: string;
  couponStatus: string;
}
export interface LoyaltyData {
  id: number;
  programCode: string;
  type: string;
  qty: string;
  startDate: string;
  programStatus: string;
}
export interface DiscountsType {
  id: number;
  discountPercentage: string;
  category: string;
  endDate: string;
  couponStatus: string;
}
export interface ClientsType {
  id: number;
  clientCode: string;
  clientName: string;
  phoneNumber: string;
  city: string;
  totalPayments: string;
  totalPoints: string;
  clientStatus: string;
}
export interface InvoicesType {
  id: number;
  code: string;
  date: string;
  clientName: string;
  price: string;
  status: string;
}
export interface ThemesType {
  id: number;
  mainColor: string;
  secondColor: string;
  selected: boolean;
}

export interface Permission {
  name: string;
}
export interface Permissions {
  id: number;
  code: string;
  userName: string;
  phone: string;
  city: string;
  permissions: Permission[];
  userStatus: string;
}
export interface Notifications {
  id: number;
  code: string;
  notifyType: string;
  users: string;
  status: string;
}
export interface Ads {
  id: number;
  code: string;
  adsType: string;
  dateEnd: string;
  status: string;
}
export interface Whatsapp {
  id: number;
  userName: string;
  userMessage: string;
  timeAgo: string;
}
