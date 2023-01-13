import Button from "@/components/UI/Button";
import Navbar from "@/components/UI/Navbar";
// import { useCallback } from "react";
// import Particles from "react-particles";
// import { loadFull } from "tsparticles";
// import Nasa from './particles.json'


  // const particlesInit = useCallback(async engine => {
  //     console.log(engine);
  //     // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
  //     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  //     // starting from v2 you can add only the features you need reducing the bundle size
  //     await loadFull(engine);
  // }, []);

  // const particlesLoaded = useCallback(async container => {
  //     await console.log(container);
  // }, []);

export default function Home() {
  return (
    <div className="min-h-screen z-10 flex items-end pb-16">
      {/* <Particles id="tsparticles" url={Nasa} init={particlesInit} loaded={particlesLoaded} /> */}
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
