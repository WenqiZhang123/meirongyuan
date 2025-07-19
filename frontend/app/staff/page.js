import { createServer } from '@/lib/supabase/utils'

export default async function Staff() {
  const supabase = createServer()
  const { data: staff } = await supabase.from('staff').select('*')

  return (
    <div>
      <h1>美容师列表</h1>
      <ul>
        {staff.map((person) => (
          <li key={person.id}>{person.name} - {person.role}</li>
        ))}
      </ul>
    </div>
  )
} 