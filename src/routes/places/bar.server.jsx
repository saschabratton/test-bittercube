import { Layout } from "../../components/Layout.server"
import ImageHero from "../../components/headers/ImageHero.server"
import { Image, Link } from "@shopify/hydrogen"
import TabSection from "../../components/sections/TabSection.client"
import OtherVenues from "../../components/sections/places/OtherVenues.client"
import HorizontalSeperator from "../../components/headers/HorizontalSeperator.client"
import SignUpForm from "../../components/global/SignUpForm.client"


const HeaderText = ("Bittercube Bar")
const TabContent = [
  {
    'label': 'Signature',
    'contentHtml': '<dl><dt>Cocktail Name Here</dt><dd>This would be the description text, lorem ipsum, doler, sit, amet conquite, lorem ierem</dd></dl>',
  },
  {
    'label': 'Classic',
    'contentHtml': '<h6>Something else</h6><p>Burnt sugar, cinnamon, dried fruit, chamomile and jasmine</p>',
  },
  {
    'label': 'N/A craft',
    'contentHtml': '<h6>Something else</h6><p>Burnt sugar, cinnamon, dried fruit, chamomile and jasmine</p>',
  },
]

export default function moslers(){
  return(
    <Layout>
      <ImageHero content={HeaderText} />
      <div className="container grid grid-cols-2 gap-6 max-w-screen-2xl">
        <div className="grid gap-6">
        <Image src='/images/about.jpg' width={366} height={455} alt='alt' className="object-cover w-full aspect-4/5" />
        <Image src='/images/about.jpg' width={366} height={455} alt='alt' className="object-cover w-full aspect-4/5" />
          {/* <Image src={image} width={366} height={455} alt='alt' className="object-cover w-full aspect-4/5" /> */}
        </div>
        <div className="sticky top-0 grid gap-3 py-20 h-fit lg:px-20">
          <span className="label">Located on Milwaukee’s North-side</span>
          <h2>a place to gather and enjoy good spirits, in glass and company</h2>
          <p className="label">
            Located at<br />1234 north ave<br />milwaukee wi<br /><span className="inline-block mt-6">at the crossroads collective</span>
          </p>
          <div className="text-ornament w-fit"></div>
          <p className="label ">
            <a href="tel:4142076262" target="_blank" className="text-gold hover:text-dark">414.123.4567</a><br />
            <a href="mailto:info@bittercube.com" target="_blank" className="text-gold hover:text-dark">info@bittercube.com</a>
          </p>
          <p className="label">Follow us online<br />@bittercube</p>
          <p>Over the last decade, the company has built relationships with farmers, botanical suppliers, bartenders, and foodies across the globe, and continues to innovate with new flavors, collaborations, business lines and services.</p>
          <p>Over the years, Bittercube has been featured in the New York Times, Martha Stewart’s Everyday Food, Playboy, Imbibe Magazine, Timeout, Bon Appétit, Chicago Tribune, Bloomberg BusinessWeek, GO – AirTran Inflight Magazine, Southwest Magazine, NPR, and Daily Candy, among many other publications.</p>
        </div>
      </div>


     <div className="py-12 section bg-dark">
        <div className="border-y-2 border-gold">
          <div className="container grid grid-cols-2 gap-6 max-screen-xl">
            <div className="max-w-md mx-auto text-center">
              <span className="label">Explore More</span>
              <h2>Check out our other venues or join us for events</h2>
              <div className="flex">
                <Link to="/places/moslers" className="btn btn-action">Mosler's Vault</Link>
                <a href="https://www.crowdcast.io/bittercube" target='_blank' className="btn btn-action">Events portal</a>
              </div>
            </div>
            <div className="flex flex-col max-w-md gap-6 text-center">
              <h4 className="tracking-wide text-white">Enjoy new recipes and the latest<br />news and events</h4>
              <p>Donec dictum, purus quis tincidunt molestie, nulla nibh ornare diam, eu vestibulum velit erat eget diam. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
              <SignUpForm />
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}





