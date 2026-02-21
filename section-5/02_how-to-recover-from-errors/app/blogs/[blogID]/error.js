"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({ error, reset }) {
  const router = useRouter();
  return (
    <div>
      <p>Something went wrong</p>
      <button
        onClick={() => {
          startTransition(() => {
            router.refresh();
            reset();
          });
        }}
      >
        Try Again
      </button>
    </div>
  );
}

// onCLick={() => {
//   window.location.reload()
// }}
// Reloads the entire page
// Destroys React state
// Does a full browser refresh

// startTransition - This update is not urgent. Treat it as a low-priority state update.
// So instead of blocking the UI immediately, React can keep the app responsive while it processes the update.

// router.refresh()
// Re-fetches server components
// Re-runs data fetching
// Triggers a re-render of the route

// reset()
// Resets the error boundary
// Attempts to re-render the component tree