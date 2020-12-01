import Head from "next/head";
import Link from "next/link";
import MenuItem from "../components/menu-item";
import DemoReel from "../components/demo-reel";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Kevin K Gomez - voice over</title>
        <link rel="icon" href="/images/favicon-96.png" />
      </Head>

      <div className="flex flex-row-reverse justify-between">
        <div className="header fixed flex right-0 p-6">
          <div className="flex-col">
            <div className="shadow-title text-white">
              <div className="text-6xl font-black phosphate-pro-solid leading-12.5">
                Kevin K <br /> Gomez
              </div>
              <div className="myriad-pro-bold text-3xl tracking-even-widest -mt-1">
                voice over
              </div>
            </div>
            <div className="menu flex-col">
              <MenuItem>Demos</MenuItem>
              <MenuItem>About</MenuItem>
              <MenuItem>Resume</MenuItem>
              <MenuItem>Contact</MenuItem>
            </div>
          </div>
          <div className="headshot"></div>
        </div>

        <main className="w-screen flex flex-col items-center py-4">
          <div className="w-2/5">
            <div id="demos" className="mb-16">
              <DemoReel title="Commercial"></DemoReel>

              <DemoReel title="Character"></DemoReel>
            </div>

            <div id="about" className="mb-16">
              <div className="body-title">About Me</div>
              <div>
                <p className="mb-5">
                  Represented by{" "}
                  <a href="https://www.stewarttalent.com/profile/kevin-gomez-chicago-voiceover-commercial-men">
                    Stewart Talent
                  </a>
                  .
                </p>
                <p className="mb-5">
                  Kevin K Gomez is a Chicago-based voice actor with years of
                  experience in voice over, theater, improv comedy, and film. In
                  the realm of voice over, Kevin has specialized experience in
                  ADR and commercial work. Clients include Aniplex of America, Sunrights Inc, and Illinois Lottery.
                </p>
                <p>
                  When he's not doing all that, he can be found doodling in
                  every margin of his notebooks, playing exercise video games,
                  and/or attempting{" "}
                  <a href="https://www.bingingwithbabish.com/recipes/spinachpuffs">
                    Binging with Babish recipes
                  </a>{" "}
                  with moderate success.
                </p>
              </div>
            </div>

            <div id="resume" className="mb-16">
              <div className="body-title">Resume</div>
              <div>
                Animation/ADR MARCH COMES IN LIKE A LION SHOGI PLAYER,
                ADDITIONAL VOICES ANIPLEX OF AMERICA BEYBLADE BURST TURBO
                ADDITIONAL VOICES DISNEY XD, SUNRIGHTS INC. EDUCATIONAL MATERIAL
                STUDENTS, ADDITIONAL VOICES UNIVERSITY OF ILLINOIS Interactive
                ANGELIC WAVES NATHAN BROOKS BUS ARROWS STUDIOS IN BLOOD BRENTON
                JAIME SCRIBBLES GAMES WINDS OF CHANGE VIVIEN TAIL TAIL STUDIOS
                EASTSHADE FEDIR EASTSHADE STUDIOS A BLOODY PARTY WILLIAM
                MICHAELA LAWS CALADRIA CHRONICLES KYUUTAROU STARLIGHT VISUAL
                MAGICAL WARRIOR DIAMOND HEART OPAL PYONKOTCHI THE BRAGGER’S CLUB
                JOSEPH MICHAELA LAWS CRYING IS NOT ENOUGH THE GENERAL STORYLINE
                TEAM OVERLOAD BAI LI REVIVAL PRODUCTIONS BLOODY CHRONICLES XEI,
                KIMFU, DUSTIN EVANS, TERRORIST IGRASIL STUDIO Commercial IL
                LOTTERY MARCH INSTANTS RADIO ADVERTISEMENTS WHISKEY & BANANAS
                STUDIOS ILLINOIS CHOSE ME PROMOTIONAL MATERIAL UNIVERSITY OF
                ILLINOIS BARCHIEF APP LAUNCH WEB ADVERTISEMENT BARCHIEF
                Audio/Podcast PRIMORDIAL DEEP KIRAN FLINT NO SUCH THING
                PRODUCTIONS NYM’S NEBULOUS NOTIONS TYLER RICHARDS PASSER VULPES
                PRODUCTIONS
              </div>
            </div>

            <div id="contact" className="mb-16">
              <div className="body-title">Contact</div>
            </div>

            <div id="fuckyou" className="mb-16">
              <div className="body-title">Fuck You</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
