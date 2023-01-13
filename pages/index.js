import Button from "@/components/UI/Button";
import Navbar from "@/components/UI/Navbar";

// import Particles from "react-particles";
// import particlesConfig from "../Particles/Particles.config";





export default function Home() {
  return (
    <div className="min-h-screen z-10 flex items-end pb-16">
      {/* <Particles params={particlesConfig} > </Particles> */}
      <Navbar />
<div>
<img
        src="images/bg3.png"
        className="absolute top-0 left-0 w-full h-full  z-10 pointer-events-none"
        alt=""
      />
</div>
      

      <div className="z-50 relative w-full">
        <div className="container">
          <div className="mb-8">
         

            <p className="text-center text-fawn max-w-[30rem] text-sm mx-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur itaque perspiciatis voluptatum molestias enim fuga,
             
              veritatis, ipsum id incidunt natus quia.
            </p>
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="max-w-[160px] w-full">
              Trade
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
