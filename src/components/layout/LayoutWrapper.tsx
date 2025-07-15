import { createContext, useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { CACHE_KEY, TTL } from '@/constants/cache'
import { getFamous } from '@/services/getFamousFromSheet'
import type { ActorProps } from '@/types/actor'
import type { ActorsContext as ActorsContextType } from '@/types/actorsContext'
import { Footer } from './Footer'
import { Header } from './Header'

const ActorsContext = createContext<ActorsContextType>({ actors: [], loading: true })

export function Layout() {
  const [actors, setActors] = useState<ActorProps[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const cached = localStorage.getItem(CACHE_KEY)

    if (cached) {
      const { value, expiry } = JSON.parse(cached)

      if (Date.now() < expiry) {
        setActors(value)
        setLoading(false)
        return
      }
      localStorage.removeItem(CACHE_KEY)
    }

    getFamous()
      .then((fetched) => {
        const filtered = fetched.filter((a) => a.isIntegrated !== 'Não')

        setActors(filtered)

        localStorage.setItem(CACHE_KEY, JSON.stringify({ value: filtered, expiry: Date.now() + TTL }))
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className='flex min-h-screen max-w-full flex-col bg-gray-950 text-white'>
      <Header />

      <main className='grow px-4 py-6 sm:mx-auto'>
        <ActorsContext.Provider value={{ actors, loading }}>
          <Outlet />
        </ActorsContext.Provider>
      </main>

      <Footer />
    </div>
  )
}

export const useActors = () => useContext(ActorsContext)
