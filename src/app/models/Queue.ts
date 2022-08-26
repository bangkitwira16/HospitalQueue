import { Customer } from "./Customer";

export interface Queue extends Partial<Customer> {
    queueNumber: string;
}