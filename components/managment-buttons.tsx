import { cn } from '@/lib/utils'
import { Button } from './ui/button'

export function ManagmentButtons({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl pl-10',
        'transition-all duration-200 ease-in-out hover:scale-[103%]',
        'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
        className,
      )}
    >
      <div className="flex items-center justify-center space-x-2 mb-24 h-full">
        <Button size="sm" className='bg-[#4E5058] shadow-lg font-semibold'>📝 Editar</Button>
        <Button size="sm" className='bg-[#4E5058] shadow-lg font-semibold'>⏸️ Pausar</Button>
        <Button size="sm" className='bg-[#4E5058] shadow-lg font-semibold'>🚫 Desabilitar</Button>
      </div>
    </div>
  )
}
