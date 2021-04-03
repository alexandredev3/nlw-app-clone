import * as next from 'next';

declare module 'next' {
  export interface NextApiRequest {
    userId: string;
  }
}
