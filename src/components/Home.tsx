import { Button } from "./ui/button";
import { Link } from "@tanstack/react-router";
import videoBg from "../images/driving.mp4";
import imageCar from "../images/ad1.jpeg";
import imgageCartwo from "../images/ad2.jpeg";
import imageCarThree from "../images/ad3.jpeg";
import { Target,Lightbulb,Gauge } from "lucide-react";

const Home = () => {
  return (
    <section>
      <div className="w-full h-full relative">
        <video
          src={videoBg}
          autoPlay
          loop
          muted
          className="object-cover w-full h-full "
        />
        <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center text-white">
          <h1 className="font-extrabold text-6xl mb-4">Canopy</h1>
          <p className="font-semibold text-3xl">Advertising for all</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 md:p-2 min-h-screen">
        <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-4 md:mt-[5rem]">

          <div className="">
            <h3 className="font-bold text-4xl">
              Canopy: Bringing affordable billboard advertising to where it is
              previously impossible.
            </h3>
            <p className="text-gray-500 font-light text-lg lg:text-xl mt-8">
              Fueled by the most advanced tracking, measurement, and
              optimization capabilities in the out-of-home space, Canopy is the
              premier choice for launching impactful DOOH campaigns. Our on-car
              mobile billboard solutions deliver eye-catching messages at the
              most relevant moments. Why pay thousands of pounds for a one-month
              bus-stop ad when you can have mobile ads seen everywhere for a
              fraction of the cost?
            </p>
          </div>
          <div>
            <img src={imageCar} className="aspect-[4/3] object-cover " width={500} height={500} />
          </div>
        </div>

        <div className="flex flex-col items-center p-2 md:max-w-2xl mx-auto">
          <p className="px-4 md:px-1 pb-4 mt-6">
            Our proprietary screens deliver dynamic content using
            location-based, GPS-enabled triggers. We empower brands to
            efficiently engage consumers through targeted advertising that
            activates at points of interest, such as areas with a high
            concentration of your target market, outside competitors' locations,
            or near your own stores. With Canopy's first-of-its-kind
            street-level media platform, you can reach and engage your customers
            on their everyday journeys, capturing their curiosity and keeping
            their attention with our eye-catching screens and your compelling
            ads.
          </p>
          <Button asChild>
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
        <div className="p-2 grid grid-cols-1 md:grid-cols-2">
          <img src={imgageCartwo} />
          <div className="flex flex-col justify-around items-center ">
            <p className="text-2xl font-semibold">Be seen</p>
            <p className="text-2xl font-semibold">When you want</p>
            <p className="text-2xl font-semibold">Where you want</p>
            <p className="text-2xl font-semibold">By who you want</p>
          </div>
        </div>

        <div className="my-10">
          <h2 className="text-3xl font-bold leading-snug ">How can you leverage Canopy</h2>
          <p className="mt-8">
            Canopy enables you to deliver instant, customizable, and highly
            engaging ad campaigns using advanced targeting techniques like
            geofencing, postcode targeting, DMA (Designated Market Areas), and
            day-parting. You can serve dynamic creative content triggered in
            real-time by factors like weather, vehicle location, and time. With
            the ability to launch "swarm" campaigns, you can deploy 10-20
            vehicles displaying your message along specific routes and in
            designated high-traffic areas for maximum visibility—imagine a
            Burberry campaign circulating through Mayfair, Knightsbridge, and
            Regent Street. Measure the effectiveness of your ads with detailed
            metrics, including foot traffic data, brand recall, web and app
            conversion studies, QR code scans, and vehicle tracking, ensuring
            your ads are not only seen but also driving results.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 my-10">
        <div className="mx-auto border-2 border-solid border-color-gray text-center rounded-xl min-w-70 shadow-lg
        hover:scale-105 ease-in duration-300 hover:bg-orange-500">
          <div className="flex flex-col items-center p-4 "> 
          <Target className="w-[90px] h-[90px] "/>
          <h4  className="text-xl font-semibold my-2">Hyper targeting</h4>
          </div>
        </div>
        <div className="mx-auto border-2 border-solid border-color-gray text-center rounded-xl shadow-lg min-w-70
        hover:scale-105 ease-in duration-300 hover:bg-orange-500">
          <div className="flex flex-col items-center p-4">
          <Lightbulb className="w-[90px] h-[90px]"/>
          <h4 className="text-xl font-semibold my-2">Hyper targeting</h4>
          </div>
        </div>
        <div className="mx-auto border-2 border-solid border-color-gray text-center rounded-xl shadow-lg min-w-70
        hover:scale-105 ease-in duration-300 hover:bg-orange-500">
          <div className="flex flex-col items-center p-4">
            
          <Gauge className="w-[90px] h-[90px]" />
          <h4  className="text-xl font-semibold my-2">Hyper targeting</h4>
          </div>
        </div>

        

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
          <div>
          <img src={imageCarThree} className="aspect-[4/3] object-cover " width={500} height={600}/>
          </div>
          <div className="text-center md:text-left ">
            <h2 className="text-3xl font-bold leading-snug mb-6">Drivers: Drive and Earn </h2>
            <p className="mb-6">Drive the same miles but earn more money.  Sign up through the button below.</p>
            <Button asChild>
            <Link to="/about">Learn More</Link>
          </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
