"use client"
import { ModeToggle } from "@/components/Mode-toggle"
import { UserButton } from "@clerk/nextjs"

export default function Home() {
  return (

    <div>
           <UserButton
                  afterSignOutUrl="/">


           </UserButton>
           <ModeToggle />         
    </div>
   
   
  )
}

