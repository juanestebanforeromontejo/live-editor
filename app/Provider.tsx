"use client";
import {
  LiveblocksProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";

const Provider = ({children}: {children: React.ReactNode}) => {
  return (
    <LiveblocksProvider authEndpoint={"/api/liveblocks-auth"}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
    </LiveblocksProvider>
  )
}

export default Provider
