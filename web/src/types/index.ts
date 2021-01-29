import { ObjectId } from "mongodb"

export type RecommendedGasPrices = { 
    name: string;
    source: string;
    instant: number;
    fast: number;
    standard: number;
    slow: number;
    lastBlock?: number;
    lastUpdate?: number;
}

export type RegisteredEmailAddress = { 
    _id?: ObjectId;
    email: string;
    price: number;
    confirmed?: boolean;
    disabled?: boolean;
    emailSent?: boolean;
    lastModified?: number;
}

export type GasPriceData = { 
    slow: GasPriceValues,
    normal: GasPriceValues,
    fast: GasPriceValues,
    instant: GasPriceValues,
    ethPrice: number,
    lastUpdated: number,
    sources: RecommendedGasPrices[]
}

export type GasPriceValues = { 
    gwei: number,
    usd: number
}

export type AlertsData = { 
    alerts: number,
    unique: number,
    average: number,
    mode: number,
}

export type AlertsChartData = {
    labels: Array<string>,
    registrations: Array<number>,
}

export type TrendChartData = {
    labels: Array<string>,
    slow: Array<number>,
    normal: Array<number>,
    fast: Array<number>,
    instant: Array<number>
}