export interface User {
  avatar?: string;
  avatarUrl?: string;
  collectionId: string;
  id: string;
  name: '홍지훈';
  username: string;
  cId?: string;
}

export interface JWTPayload {
  exp: number;
  collectionId: string;
  id: string;
  type: string;
}
