import { cn } from '@/lib/utils'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import { I18nContext } from '@/providers/i18nProvider'
import { useContext } from 'react'

export function WelcomeMessages({ className }: { className?: string }) {
  const { i18n } = useContext(I18nContext)

  return (
    <div
      className={cn(
        'relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl pl-10 items-center',
        'transition-all duration-200 ease-in-out hover:scale-[103%]',
        'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
        className,
      )}
    >
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 text-white flex cursor-pointer">
        <div className="w-1 bg-keiko-bg-primary pr-1" />
        <div className="w-full h-96 bg-[#535458] flex flex-col p-4 space-y-2 shadow-lg">
          <Label className="text-white font-bold">
            {i18n.advantageSection.welcomeMessage.title}
          </Label>
          <div className="flex flex-col space-y-2">
            <div>
              <Label className="text-white text-xs text-nowrap">
                {i18n.advantageSection.welcomeMessage.description}
              </Label>
              <Label className="text-blue-300 text-xs pl-1">
                @CasquinhaDeBala
              </Label>
            </div>
            <Image
              src={`/KEIKO_WELCOME.png`}
              alt="keiko-welcome-image"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
