import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const About = () => {
  return (
    <section>
      <div className="mx-auto max-w-4xl">
        <Card className="">
          <CardHeader>
            <CardTitle>
              Canopy is a cutting-edge digital media platform that aims to
              transform the advertising industry by connecting audiences with
              dynamic media on private vehicles at street level.
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Canopy is a top mobile advertising provider in the UK, operating a
              three-sided marketplace that connects drivers, advertisers, and
              smart city data consumers. Our unique advertising displays are
              installed on vehicles, delivering dynamic content based on
              location, time, and contextual triggers like weather. Our goal is
              to not only compete in the existing Out-Of-Home market, but also
              to create a new segment for smaller businesses that have been
              traditionally excluded, democratizing advertising. We aim to
              expand quickly and efficiently to ensure our success.
            </p>
          </CardContent>
          
        </Card>
      </div>
      <div>
        <h2>Our Mission</h2>
        <h2>Better adverising for all.</h2>
      </div>
    </section>
  );
};

export default About;
