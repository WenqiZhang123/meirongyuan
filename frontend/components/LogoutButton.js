'use client'

import { createClient } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()
  // This createClient function is safe to use in client components
  const supabase = createClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      登出
    </button>
  )
} 