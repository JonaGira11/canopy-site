import { Button } from "./ui/button";
import { Link } from "@tanstack/react-router";
import { Separator } from "@/components/ui/separator";
const Car = new URL("../images/stock.jpg", import.meta.url);

const Services = () => {
  return (
    <section className="max-w-6xl mx-auto p-4 md:p-2 min-h-screen">
      <div>
        <h2 className=" text-3xl md:text-5xl font-bold">Services</h2>
        <div></div>
        <p>
          Digital Billiboard taxi top
          <span className="text-orange-500">advertising</span>
        </p>
        <p>
          Looking to transform your taxi rides into immersive brand experiences?
          Our cutting-edge digital taxi top billboards are the perfect solution!
          With our dynamic content creation and management services, your brand
          will shine brightly in the urban, reaching commuters, tourists, and
          pedestrians alike. Maximize your advertising impact and ride the wave
          of innovation with our sleek, attention-grabbing digital taxi top
          billboards. Contact us today to learn more about our engine-optimised
          solutions!
        </p>
        <p>Content Creation</p>
        <p>
          Elevate your brand's presence with captivating video content tailored
          for digital billboards or your own platforms! Our skilled team
          specializes in creating and editing visually stunning videos that
          engage and inspire your audience. From concept to final cut, we bring
          your vision to life, ensuring each frame reflects your brand's essence
          and message. Whether it's for digital billboards or internal use,
          trust us to deliver professional-grade video content that leaves a
          lasting impact and drives results for your business. Enhance your
          marketing strategy with our expert video production services today.
        </p>
        <h3 className=" text-2xl md:text-4xl font-bold">Adversitng</h3>
        <p>Street-level digital marketing</p>
        <p>
          Hyper-target audiences at relevant moments with dynamic content based
          on data such as location, time of day, and weather. Make the most of
          your investment with measurable ROI, attribution, and programmatic
          buying.
        </p>
        <Separator className="my-4" />
        <div className="grid md:grid-cols-2 gap-2">
          <div className="container">
            <img src={Car} className="object-cover" />
          </div>
          <div>
            <p className="text-2xl bold">Hyper Targeting</p>
            <p>
              Canopy’s Precision Targeting empowers brands to reach people in
              high-traffic locations where other media formats cannot reach or
              are prohibitively expensive, ensuring your messaging is seen
              during key decision-making moments. Deliver customizable, scalable
              campaigns based on geofencing, postcode, DMA, competitor
              conquesting, and day-parting. Whether you're a restaurant, club,
              hotel, or online retailer, you can book our screens for six months
              and set up an automation with us. This enables you to conduct
              ongoing promotions, such as a restaurant offering 10% off for
              students on Mondays, free delivery on Wednesdays, and other timely
              deals as required, ensuring your mobile ad space is always
              instantly updated and relevant.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h3 className=" text-2xl md:text-4xl font-bold">Drivers</h3>
        <p>Earn more money while you drive</p>
        <Button asChild>
          <Link to="/contact">Get In Touch</Link>
        </Button>
      </div>
      <div className=" text-2xl md:text-3xl font-bold max-w-2xl">
        <p>Referrals:</p>
        <p>
          Get £50 for every driver that that successfully signs up from your
          referral!
        </p>
      </div>
    </section>
  );
};

export default Services;
