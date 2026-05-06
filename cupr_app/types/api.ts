/**
 * Shared API response / request shapes used across Next.js route handlers.
 */

/** Standard JSON envelope for all API responses. */
export type ApiResponse<T = null> = {
  ok: boolean;
  message: string;
  data?: T;
};

/** Body accepted by POST /api/join. */
export type JoinRequestBody = {
  email: string;
  source?: string;
};
