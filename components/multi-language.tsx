'use client'

import React, { forwardRef, useRef } from 'react'

import { cn } from '@/lib/utils'
import { AnimatedBeam } from '@/components/magicui/animated-beam'
import Image from 'next/image'
import { Label } from '@/components/ui/label'

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'z-10 flex flex-row size-14 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]',
        className,
      )}
    >
      {children}
    </div>
  )
})

Circle.displayName = 'Circle'

export function MultiLanguage({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)

  return (
    <div
      className={cn(
        'relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl',
        className,
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center items-center">
          <Circle ref={div7Ref} className="text-center">
            <Label className="text-xs">🇧🇷 Olá!</Label>
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-16 bg-keiko-orange">
            <Image
              src={`/KEIKO_FACE_01.png`}
              alt="keiko-multi-language-image"
              width={400}
              height={400}
            />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref} className="text-center">
            <Label className="text-xs">🇺🇸 Hello!</Label>
          </Circle>
          <Circle ref={div2Ref} className="text-center">
            <Label className="text-xs">🇪🇸 Hola!</Label>
          </Circle>
          <Circle ref={div3Ref} className="text-center">
            <Label className="text-xs">🇩🇪 Hallo!</Label>
          </Circle>
          <Circle ref={div4Ref} className="text-center">
            <Label className="text-xs">🇫🇷 Bonjour!</Label>
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        duration={3}
      />
    </div>
  )
}
