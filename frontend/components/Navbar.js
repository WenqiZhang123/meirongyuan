'use client'

import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'

export default function Navbar() {
  const supabase = createClient()
  // 示例导航栏内容
  return (
    <nav>
      <Link href="/">首页</Link>
      <Link href="/services">服务</Link>
      <Link href="/staff">员工</Link>
    </nav>
  )
} 