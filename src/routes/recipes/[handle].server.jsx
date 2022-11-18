import { Link, Image, useRouteParams, fetchSync, Seo } from "@shopify/hydrogen"
import { NotFound, Layout } from '@server'
import { PrimaryMenu, HorizontalSeperator, RecomendedRecipes } from "@client"
import { makeKey } from "@utils"

import TabSection from "../../components/sections/recipes/TabSection.client";
import SplitBgVertBlue from "../../components/sections/SplitBgVertBlue.client";
import RecipeImageCarousel from "../../components/sections/recipes/RecipeImageCarousel.client";
// ----------------------------------------------------------------------

const recipesApi = 'https://lavish-turnip.cloudvent.net/api/recipes.json'

export default function Recipe(){
  const { handle } = useRouteParams()

  const recipes = fetchSync(recipesApi,{
    preload: false
  }).json()

  const activeRecipe = recipes.find(recipe => recipe.slug === handle)

  if (!activeRecipe) {
    return <NotFound />
  }


  const customSeo = {
    name: 'How to craft • Bittercube',
  }

  return(
    <Layout>
      <Seo type="page" data={{
          title: customSeo.name,
      }} />
      <PrimaryMenu dark={false}/>
      <div className="container flex items-center w-11/12 gap-2 pb-6 mt-8">
        <Link className="transition duration-700 label text-dark hover:text-gold" to="/recipes/all">All Recipes</Link>
      </div>

      <div className="container grid w-11/12 gap-6 pt-0 md:grid-cols-2">
        <div className="md:hidden">
          <RecipeImageCarousel content={activeRecipe} />
        </div>
        <div className="hidden gap-6 md:flex md:flex-col">
          {activeRecipe.images?.map((image) => (
            <Image src={image.url} width={366} height={455} alt={activeRecipe.name} className="object-cover w-full aspect-4/5" />
          ))}
        </div>

        <div className="sticky top-0 grid gap-6 px-4 py-20 md:px-4 lg:px-10 h-fit xl:px-20">
          <div>
            <p className="mb-0 text-base label">cocktail style:<br />
              {activeRecipe.flavors.slice(0, 2)
              .map((flavor, index) => (
                  <span key={makeKey(flavor)}>{index != 0 ? ', ' : ''}{flavor}</span>
              ))}
            </p>
            <h1>{activeRecipe.name}</h1>
            {activeRecipe.description &&
              <p>{activeRecipe.description}</p>
            }
          </div>

          <div className="py-6">
            <HorizontalSeperator />
          </div>
          <h3>Make the cocktail</h3>
          <div>
            <TabSection activeRecipe={activeRecipe}/>
          </div>
        </div>
      </div>
      <div className="relative w-11/12 pt-0 mx-auto">
        <HorizontalSeperator />
        <div className="absolute top-0 px-6 py-2 text-sm tracking-widest text-white uppercase -translate-x-1/2 left-1/2 bg-gold h-fit">
          Recommended Recipes
        </div>
      </div>
      <RecomendedRecipes recipes={recipes} activeRecipe={activeRecipe}/>
      <SplitBgVertBlue />
    </Layout>
  )
}