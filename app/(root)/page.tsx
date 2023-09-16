import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div className='flex justify-center items-center h-full'>
      <UserButton afterSignOutUrl='/' />
    </div>
  )
}
