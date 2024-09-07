"use client";
import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { ClientSideSuspense, RoomProvider } from '@liveblocks/react/suspense'
import Loader from '@/components/Loader';

const CollaborativeRoom = () => {
  return (
    <div>
      <RoomProvider id='my-room'>
        <ClientSideSuspense fallback={<Loader/>}>
          <div className='collaborative-room'>
            <Header>
              <div className="flex w-fit items-center justify-center gap-2">
                <p className="document-title">Share</p>
              </div>
              <SignedOut>
                <SignInButton/>
              </SignedOut>

              <SignedIn>
                <UserButton/>
              </SignedIn>
            </Header>

            <Editor/>
          </div>
        </ClientSideSuspense>
      </RoomProvider>
    </div>
  )
}

export default CollaborativeRoom
