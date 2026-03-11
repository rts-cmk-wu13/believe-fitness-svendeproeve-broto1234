import Button from "@/components/ui/buttonLink";

export default function Hero() {  
  return (
    <section className="w-full h-70 flex items-center justify-center bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat ">
      <div className="w-full h-full flex flex-col items-start justify-end pl-6 pb-6 bg-black/36">
        <div className="text-left">
          <h1 className="text-2xl/7 font-bold mb-6 text-primaryColor">Welcome to <br /> Belive Fitness</h1>
          <div className="flex gap-4 justify-start items-center">
            <Button btHref="/classes" btText="Classes" className="text-black font-semibold text-xs px-6 py-2 rounded-full uppercase bg-primaryColor" />
            <Button btHref="/login" btText="Log in" className="text-black font-semibold text-xs px-6 py-2 rounded-full uppercase  bg-primaryColor" />
          </div>
        </div>
      </div>
    </section>
  );
}