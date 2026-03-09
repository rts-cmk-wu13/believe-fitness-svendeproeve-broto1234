import { getAllNews } from "@/dal/newsText-dal";
import { getAllAssets } from "@/dal/assets-dal";

export default async function News() {
  const news = await getAllNews();
  const assets = await getAllAssets();

  // console.log("Fetched news:", news[0].assetId);
  // console.log("Fetched assets:", assets[10].url);


  return (
    <section className="my-14 px-4">  
      <h2 className="text-8xl font-bold text-textColor">News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {news.map((article) => (
          <div key={article.id} className="">
              <h3 className="text-xs font-semibold mb-2">{article.title}</h3>
            <img src={assets.find((asset) => asset.id === article.assetId)?.url} alt={article.title} className="w-full h-48 object-cover" />
              <p className="text-[0.55rem] mt-2">{article.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}