export interface Comment {
  id: string;
  content: string;
  collection: string;
  recordId: string;
  created: string; // "2023-01-11 11:41:14.909Z"
  expand?: {
    user?: {
      avatarUrl?: string;
      username?: string;
      name?: string;
      id?: string;
    };
  };
}
