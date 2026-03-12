
export default function BelieveHeader( { textColor}) {
  return (
    <div className="flex gap-1 items-end">        
        <div className={`w-10 h-[0.08rem] bg-${textColor} mb-3`}></div>
        <div className="flex flex-col items-start">
          <h2 className="w-20 text-4xl text-start leading-none text-primaryColor font-bold">Believe Fitness</h2>
          <p className={`text-${textColor} text-md font-semibold`}>Train like a pro</p>
        </div>
      </div>
  )
}