import { Link, Image } from "@shopify/hydrogen"

export default function BakingCard({ bitters }){
  const { name, image, flavor, description, link} = bitters

  return(
    <div className="flex flex-1 h-full p-4 transition duration-700 border-2 lg:p-12 hover:border-gold border-gold/0 rounded-jumbo-sm">
      <div className="flex flex-col justify-between text-center">
        <Image src={image} width={460} height={555} className="w-full" alt="Bitters" />
        <div>
          <span className="text-xl text-gold font-decorative">{ flavor }</span>
          <h3 className="text-2xl">{ name }</h3>
          <p className="text-sm text-ornament">{ description }</p>
        </div>
        <Link to={link} className="flex items-center gap-2 mx-auto label group w-fit">View Bitters<div className="btn-arrow btn-arrow-gold"></div></Link>
      </div>
    </div>
  )
}