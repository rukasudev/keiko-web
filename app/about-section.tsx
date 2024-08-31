import { Label } from '@/components/ui/label'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="bg-white flex flex-col">
      <div className="h-[500px] flex justify-center items-center">
        <Image
          src={'/KEIKO_02.png'}
          alt="Keiko-Image-01"
          width={500}
          height={500}
        />
        <Label className="text-5xl text-black font-bold">Keiko Bot</Label>
      </div>
    </section>
  )
}
