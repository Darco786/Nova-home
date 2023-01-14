import Button from "@/components/UI/Button";
import DotParticals from "@/components/UI/DotParticals";
import Navbar from "@/components/UI/Navbar";

export default function Home() {
  return (
    <>
    <Head>
        <title>Cool Title</title>
        <meta name="description" content="Checkout our cool page" key="desc" />
        <meta property="og:title" content="Social Title for Cool Page" />
        <meta
          property="og:description"
          content="And a social description for our cool page"
        />
        <meta
          property="og:image"
          content="https://example.com/images/cool-page.jpg"
        />
      </Head>
      <div className="min-h-screen z-10 flex items-end pb-10">
        <Navbar />

        <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none">
          <DotParticals />
        </div>

        <img
          src="images/bg3.png"
          className="absolute top-0 left-0 w-full h-full object-cover z-10 pointer-events-none"
          alt=""
        />

        <div className="z-50 relative w-full">
          <div className="container">
            <div className="mb-6 md:mb-8">
           

              <p className="text-center text-fawn max-w-[30rem] text-sm mx-auto">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur itaque perspiciatis voluptatum molestias enim fuga,
                tempora eaque, rem ab nesciunt possimus fugit autem voluptas
                veritatis, ipsum id incidunt natus quia.
              </p>
            </div>

            <div className="flex justify-center">
              <Button
                variant="outline"
                className="max-w-none sm:max-w-[160px] w-fit sm:w-full"
              >
                Trade
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
