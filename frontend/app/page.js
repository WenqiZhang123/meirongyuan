import { createServer } from '@/lib/supabase/server'
import { cookies } from 'next/headers'
import Link from 'next/link'
import LogoutButton from '@/components/LogoutButton'

export default async function Home() {
  const supabase = createServer()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">美容店预约系统</h1>
      {session ? (
        <div className="text-center">
          <p className="mb-4">欢迎, {session.user.email}</p>
          <LogoutButton />
        </div>
      ) : (
        <Link
          href="/login"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          登录
        </Link>
      )}
    </main>
  )
}
