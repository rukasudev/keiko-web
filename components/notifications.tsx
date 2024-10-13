'use client'

import { cn } from '@/lib/utils'
import { AnimatedList } from '@/components/magicui/animated-list'
import Image from 'next/image'
import { useContext } from 'react'
import { I18nContext } from '@/providers/i18nProvider'

interface Item {
  name: string
  description: string
  icon: string
  color: string
  time: string
}

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        'relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4',
        // animation styles
        'transition-all duration-200 ease-in-out hover:scale-[103%]',
        // light styles
        'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
        // dark styles
        'transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 min-w-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          {/* <span className="text-lg">{icon}</span> */}
          <Image
            src={`/${icon}.png`}
            alt="keiko-icon-image"
            width={400}
            height={400}
          />
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <figcaption className="flex space-x-1">
            <p className="text-sm font-normal dark:text-white/60">
              <span className="text-sm font-normal text-[#7289da]">
                @everyone{' '}
              </span>
              {description}
            </p>
          </figcaption>
        </div>
      </div>
    </figure>
  )
}

export function NotificationsList({ className }: { className?: string }) {
  const { i18n } = useContext(I18nContext)

  let notifications = [
    {
      name: 'Keiko',
      description: i18n.advantageSection.notifications[0].description,
      time: i18n.advantageSection.notifications[0].time,
      icon: 'KEIKO_FACE_01',
      color: '#7289da',
    },
    {
      name: 'Keiko',
      description: i18n.advantageSection.notifications[1].description,
      time: i18n.advantageSection.notifications[1].time,
      icon: 'KEIKO_FACE_02',
      color: '#7289da',
    },
    {
      name: 'Keiko',
      description: i18n.advantageSection.notifications[2].description,
      time: i18n.advantageSection.notifications[2].time,
      icon: 'KEIKO_FACE_03',
      color: '#7289da',
    },
  ]

  notifications = Array.from({ length: 10 }, () => notifications).flat()

  return (
    <div
      className={cn(
        'relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl',
        className,
      )}
    >
      <AnimatedList delay={3000}>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  )
}
