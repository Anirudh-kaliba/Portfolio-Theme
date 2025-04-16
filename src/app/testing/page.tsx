import React from "react";
import { Marquee } from "@/components/magicui/marquee";
import { MarqueeDemoVertical } from "@/components/ui/marquee";
import { Pointer } from "@/components/magicui/pointer";

import { IconCloud } from "@/components/magicui/icon-cloud";
import { IconCloudDemo } from "@/components/ui/iconcould";
import { Particles } from "@/components/magicui/particles";
import { ParticlesDemo } from "@/components/ui/particle";


const pages = () => {
  return (
    
      <div>
        <h1>
          <center>
            <strong>Component Testing</strong>
          </center>
        </h1>
        <Marquee>
          <></>
        </Marquee>
        <MarqueeDemoVertical />
        <h1>
          <strong>
            <center>Expetise</center>
          </strong>
        </h1>
        <Pointer />

        <h1>
          <strong>
            <center>Our Technologies</center>
          </strong>
        </h1>
        <IconCloudDemo />
        <ParticlesDemo />
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default pages;
