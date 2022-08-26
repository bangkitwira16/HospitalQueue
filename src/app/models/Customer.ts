export interface Customer {
    id?: string;
    name: string;
    address: string
    IDNumber: number
    phone: number
    BPJS: number
    gender: 'male' | 'female' | undefined
    createdAt: number
}
