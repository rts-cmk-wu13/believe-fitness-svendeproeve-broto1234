import Image from "next/image";

export default function TrainerCard({ trainer }) {
  return (
    <div>
      <div className="flex items-center gap-4 my-3">
        <Image src={trainer.asset.url} alt={trainer.trainerName} width={400} height={400} className="w-16 h-16 rounded-xl object-cover" />
        <h2 className="text-xs font-semibold mt-1">{trainer.trainerName}</h2>
      </div>
    </div>
  )
}