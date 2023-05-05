export declare global {
  interface Promise<T> {
    status: 'pending' | 'fulfilled' | 'rejected';
    value: T;
    reason: any;
  }
}