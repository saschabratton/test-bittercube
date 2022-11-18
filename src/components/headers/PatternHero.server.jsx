import { useShopQuery, CacheNone, gql, Image } from "@shopify/hydrogen"
import Nav from "./Nav.client"

export default function PatternHero({ content }) {

  const {
    data: { shop },
  } = useShopQuery({
    query: SHOP_QUERY,
    cache: CacheNone(),
    preload: true,
  });

  return (
     <div className="relative bg-dark bg-pattern header-dark">
      <Nav shop={shop} dark={true} />
      <div className="container relative text-center h-[550px]">
        <div className="flex flex-col justify-center h-full">
          <div className="h-0.5 w-20 mx-auto bg-gold grow-outward"></div>
          <h1 className="max-w-2xl py-4 mx-auto text-6xl capitalize normal-case text-outline">{ content }</h1>
          <div className="h-0.5 w-20 mx-auto bg-gold grow-outward"></div>
        </div>
      </div>
    </div>
  );
}

const SHOP_QUERY = gql`
  query ShopInfo {
    shop {
      name
      description
    }
  }
`;