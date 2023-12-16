export type SalesTypes = '월세' | '전세';
export type FloorTypes = number | '옥탑' | '반지하';
export type RoomTypes = '원룸' | '투룸' | '쓰리룸' | '포룸+';

export interface Room {
  id: string;
  imageUrl: string;
  salesTypes: SalesTypes;
  depositPrice: number;
  rentPrice: number;
  size: number;
  floor: FloorTypes;
  address: string;
  roomTypes: RoomTypes;
  maintenanceFee: number;
  loanable: boolean;
}
