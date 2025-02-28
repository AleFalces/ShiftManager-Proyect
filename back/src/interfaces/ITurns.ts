enum EStatus {
  AVAILABLE = "available",
  RESERVED = " reserved",
}

export interface Iturn {
  id: number;
  date: Date;
  time: string;
  userId: number;
  status: EStatus;
}
