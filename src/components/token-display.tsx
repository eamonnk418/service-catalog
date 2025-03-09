"use client";

import { useEffect } from "react";

export default function TokenDisplayClient({ cookieToken, sessionToken }: { cookieToken: string; sessionToken: string }) {
  return (
    <div>
      <h2>Token Information</h2>
      <pre>Cookie Token: {JSON.stringify(cookieToken, null, 2)}</pre>
      <pre>Auth Session Token: {JSON.stringify(sessionToken, null, 2)}</pre>
    </div>
  );
}
