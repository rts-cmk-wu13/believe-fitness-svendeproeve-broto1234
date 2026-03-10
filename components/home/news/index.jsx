import Image from "next/image";
import { getAllNews } from "@/dal/newsText-dal";
import { getAllAssets } from "@/dal/assets-dal";

export default async function News() {
  const news = await getAllNews();
  const assets = await getAllAssets();

  // console.log("Fetched news:", news[0].assetId);
  // console.log("Fetched assets:", assets[10].url);

  return (
    <section className="my-12 px-4">  
      <h2 className="text-6xl font-bold text-primaryColor">News</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

        {news.map((article) => {
          const assetsImage = assets.find((asset) => asset.id === article.assetId)?.url;
          return (
            <div key={article.id} className="">
              <h3 className="text-xl text-balance font-semibold mt-5 mb-4 font-pretty">{article.title}</h3>
              {assetsImage && (
                <Image src={assetsImage} alt={article.title} width={800} height={600} className="w-full h-40 object-cover" />
              )}
              <p className="text-md/7 py-4">{article.text}</p>
          </div>
        )})}
      </div>
      <div className="w-30 h-1 bg-black "></div>
    </section>
  );
}