import { createServer } from '@/lib/supabase/utils'

export default async function Services() {
  const supabase = createServer()
  const { data: services } = await supabase.from('services').select('*')

  return (
    <div>
      <h1>美容服务</h1>
      <ul>
        {services.map((service) => (
          <li key={service.id}>{service.name} - {service.price}</li>
        ))}
      </ul>
    </div>
  )
} 