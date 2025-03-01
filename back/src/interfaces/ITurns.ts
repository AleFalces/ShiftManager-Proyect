export enum EStatus {
  AVAILABLE = "available",
  RESERVED = "reserved",
}

export interface Iturn {
  id: string;
  date: Date;
  time: string;
  userId: number;
  status: EStatus;
}
