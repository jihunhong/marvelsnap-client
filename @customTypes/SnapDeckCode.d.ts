interface Card {
  CardDefId: string;
}

export interface SnapDeckCode {
  Name: string;
  Cards: Array<Card>;
}
