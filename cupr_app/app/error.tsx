'use client';

function messageFromUnknown(error: unknown): string {
  if (error instanceof Error && error.message) {
    return error.message;
  }
  if (typeof error === 'string') {
    return error;
  }
  if (
    error !== null &&
    typeof error === 'object' &&
    'message' in error &&
    typeof (error as { message: unknown }).message === 'string' &&
    (error as { message: string }).message
  ) {
    return (error as { message: string }).message;
  }
  if (typeof Event !== 'undefined' && error instanceof Event && error.type) {
    return `A browser ${error.type} event was reported as an error (often a failed script or resource load). Check the console for details.`;
  }
  return 'An unexpected error occurred.';
}

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: unknown;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 px-6">
      <h2 className="text-2xl font-mono text-white">Something went wrong!</h2>
      <p className="text-neutral-500 font-mono text-sm text-center max-w-lg">{messageFromUnknown(error)}</p>
      <button
        type="button"
        onClick={() => reset()}
        className="px-4 py-2 border border-white/20 rounded-full text-xs uppercase tracking-widest text-white hover:bg-neutral-800 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
