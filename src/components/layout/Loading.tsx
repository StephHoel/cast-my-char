export function Loading() {
  return (
    <div className='flex items-center space-x-4 mx-auto justify-center'>
      <div className='w-2 h-2 bg-indigo-500 rounded-full animate-bounce' />
      <div className='w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-150' />
      <div className='w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-300' />
      <p className='text-gray-300 text-2xl'>Carregando...</p>
    </div>
  )
}
