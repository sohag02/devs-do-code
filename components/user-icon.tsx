'use client'
import { useSession } from "@/context/SessionContext"
import Image from "next/image"
import { getAvatar } from "@/lib/utils"

export default function UserIcon() {
  const { user } = useSession()

  if (!user) {
    return null
  }

  return (
    <div className="rounded-full">
      {user.picture ? (
        <Image
          src={user.picture}
          alt="User Profile"
          width={40}
          height={40}
          className="rounded-full"
        />
      ) : (
        <Image
          src={getAvatar(user.name)}
          alt="User Profile"
          width={40}
          height={40}
          className="rounded-full"
        />
      )}
    </div>
  )

}
