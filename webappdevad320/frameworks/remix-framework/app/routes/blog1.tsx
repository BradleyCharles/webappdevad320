import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function blog1() {
  return (
    <div>
      <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus condimentum lectus ut blandit. Nulla hendrerit felis quis dignissim ultrices. Nam eros risus, aliquet at ex vel, efficitur aliquam mauris. Cras tincidunt elit in varius semper. Nulla eu velit libero. Aenean quis laoreet ligula. Vestibulum eget neque eu lacus venenatis aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam pharetra erat neque, in dictum sem ultricies vel.
        </p><br></br>
        <p>
            Quisque et sollicitudin nisl. Morbi consectetur, orci at ultricies maximus, eros tellus iaculis sapien, vitae sagittis erat odio facilisis eros. Suspendisse auctor sem eu sapien iaculis vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam a urna mi. Pellentesque pretium lacus nunc, quis volutpat lectus convallis pellentesque. Integer commodo consequat ullamcorper.
        </p><br></br>
        <p>
            Nunc vestibulum luctus mi vel cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce dapibus tincidunt ante posuere posuere. Fusce accumsan ipsum a mauris sagittis egestas. Ut ut tempus lacus. Integer pellentesque pharetra facilisis. Proin sagittis et erat sit amet dictum. Curabitur dolor arcu, lacinia eget consequat eget, dapibus sit amet erat. Maecenas varius molestie turpis, vel egestas nulla vulputate et. Duis vitae mi aliquet, suscipit lectus vel, ullamcorper lorem.
        </p><br></br>
        <p>
            Pellentesque gravida massa non felis imperdiet efficitur. Sed a vehicula tortor. Quisque non nisl sed lorem consectetur porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut lorem urna, auctor ut ornare eu, porta vitae mauris. Curabitur vitae metus ut dolor facilisis lobortis non a lacus. Vivamus a felis nec est lacinia finibus. In et fringilla eros. Suspendisse potenti. Aenean mauris massa, interdum ut justo eu, ultricies finibus dolor. Vivamus tristique justo quis congue facilisis. Suspendisse et egestas eros, eu dapibus ligula.
        </p><br></br>
        <p>
            Aenean vel erat quis lectus rutrum posuere. Aenean nec metus sed nulla lobortis fermentum et sit amet risus. Nam non pretium felis. Donec at justo et risus egestas fermentum. Pellentesque consectetur erat quis mi iaculis euismod. Etiam nec pharetra diam, in volutpat velit. Donec vitae tortor varius, sollicitudin lacus semper, fermentum risus. Integer euismod mi varius erat lobortis tempus. Suspendisse faucibus sollicitudin lacinia. Phasellus consectetur vel metus et commodo. Aliquam sollicitudin erat in ipsum mattis, non tempor tortor vestibulum. Curabitur consectetur ante purus, at suscipit purus tincidunt vitae. Maecenas non blandit diam, quis feugiat enim. Aenean feugiat sollicitudin urna, a vehicula enim. Etiam tincidunt augue nibh, et tristique augue vehicula quis. Fusce tellus est, suscipit maximus leo eget, commodo luctus lorem. 
        </p><br></br>
    </div>
  );
}