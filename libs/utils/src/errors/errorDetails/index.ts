import { auth } from './auth';
import { fauna } from './fauna';

export const errorDetails: Record<string, string> = { ...auth, ...fauna };
