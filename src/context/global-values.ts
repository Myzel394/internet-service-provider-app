import {createContext} from "react";

export interface GlobalValuesInterface {
    name: string;
    phoneNumber: string;
    balance: number;
    dataVolumeUsed: number;
    dataVolumeAvailable: number;
    price: number;
    data: number[];
}

export const initialData: GlobalValuesInterface = {
    name: "Jenny",
    phoneNumber: "+01 804 2309 8672",
    balance: 1924.3,
    dataVolumeUsed: 8,
    dataVolumeAvailable: 30,
    price: 50.99,
    data: Array(5).fill(null).map(() => Math.random() * 100),
}

const GlobalValuesContext = createContext<GlobalValuesInterface>(initialData);

export default GlobalValuesContext;
