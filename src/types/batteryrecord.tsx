import { User } from "./user";

export interface BatteryRecord {
    id: string,
    user: User,
    timeRemaining: string,
    batteryPercentage: Number,
    temperature: string,
    isCharging: boolean,
    timeCreated: string
}