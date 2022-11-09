import React from "react";
import AboutPhoto from "../assets/images/about.jpg";

export default function About() {
  return (
    <div>
      <div>
        <img src={AboutPhoto} width={250} height={250} alt="Amanda So" />
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sapien
          elit, vehicula vitae facilisis bibendum, rutrum ut nunc. Curabitur
          eget augue sollicitudin, consequat enim vitae, cursus tellus. Proin
          mattis ipsum id magna efficitur, ac ornare sapien fringilla. Vivamus
          ullamcorper leo sapien, ultricies pharetra elit aliquam eget. Donec
          purus ex, faucibus eget consequat in, pharetra sed purus. Quisque at
          urna pretium, pulvinar ligula in, euismod eros. Aenean tempus tortor
          eget massa finibus, fermentum ultrices purus congue. Duis in elementum
          massa. Praesent quis sodales enim, ut fringilla tellus. Aliquam
          lobortis, tortor condimentum faucibus pulvinar, tellus leo venenatis
          ex, a mattis nisl diam et ex.
        </p>
      </div>
    </div>
  );
}
