"use client";
import AddDocumentBtn from '@/components/AddDocumentBtn';
import Header from '@/components/Header'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { redirect } from 'next/navigation';
import Image from 'next/image';

const Home = () => {
  function onAdd() {
    redirect("/documents/1");
  }
  const documents = [];
  return (
    <main className='home-container'>
      <Header className='sticky left-0 top-0'>
        <div className='flex items-center gap-2 lg:gap-4'>
          Notification
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </div>
      </Header>

      {documents.length > 0 ? (
        <div className=''>

        </div>
      ) : (
        <div className='document-list-empty'>
            <Image src={"/assets/icons/doc.svg"} alt='Document' 
              width={40} height={40}
              className='mx-auto'/>

            <AddDocumentBtn onAdd={onAdd}/>
        </div>
      )}

    </main>
  )
}

export default Home
