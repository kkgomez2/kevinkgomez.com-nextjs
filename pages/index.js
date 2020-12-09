import Head from "next/head";
import Menu from "../components/menu";
import DemoReel from "../components/demo-reel";
import Credits from "../components/credits";

import AnimationResume from "../public/resumes/animation";
import InteractiveResume from "../public/resumes/interactive";

import { useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";

export default function Home() {
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <div className="">
      <Head>
        <title>Kevin K Gomez - voice over</title>
        <link rel="icon" href="/images/favicon-96.png" />
      </Head>

      <div className="flex flex-col-reverse lg:flex-row justify-between">
        <div className="headshot-container">
          <div className="headshot-image"></div>
        </div>

        <main className="flex flex-col items-center py-4 z-0">
          <div className="w-4/5">
            <div id="demos" className="pb-10">
              <DemoReel title="Commercial" />

              <DemoReel title="Character" />
            </div>

            <div id="about" className="pb-10">
              <div className="body-title">About Me</div>
              <div>
                <div>
                  <img
                    className="aboutme-image mb-5"
                    src="images/me_baby.jpg"
                  />
                </div>
                <p className="mb-5">
                  Represented by{" "}
                  <a href="https://www.stewarttalent.com/profile/kevin-gomez-chicago-voiceover-commercial-men" target="_blank">
                    Stewart Talent
                  </a>
                  .
                </p>
                <p className="mb-5">
                  Kevin K Gomez is a Chicago-based voice actor of Filipino
                  descent with years of experience in voice over, theater,
                  improv comedy, and film. In the realm of voice over, Kevin has
                  specialized experience in ADR and commercial work. Clients
                  include Aniplex of America, Sunrights Inc, and Illinois
                  Lottery.
                </p>
                <p>
                  When he's not doing all that, he can be found doodling in
                  every margin of his notebooks, playing exercise video games,
                  and/or attempting{" "}
                  <a href="https://www.bingingwithbabish.com/recipes/spinachpuffs" target="_blank">
                    Binging with Babish recipes
                  </a>{" "}
                  with moderate success.
                </p>
              </div>
            </div>

            <div id="resume" className="pb-10">
              <div className="body-title">Resume</div>
              <div>
                <Credits resume={AnimationResume} />
                <Credits resume={InteractiveResume} />
                <div className="font-bold lowercase text-crimson-c myriad-pro-bold text-lg pb-2">
                  Training
                </div>
                <div className="pb-4 flex flex-col lg:flex-row">
                  <div className="flex flex-col pb-2 lg:pb-0 lg:w-1/3">
                    <div className="font-bold lowercase text-crimson-c myriad-pro-bold">
                      Animation
                    </div>
                    <ul>
                      <li>Charlie Adler</li>
                      <li>David Sobolov</li>
                      <li>Julie Maddalena</li>
                      <li>Tony Oliver</li>
                      <li>Crispin Freeman</li>
                    </ul>
                  </div>
                  <div className="flex flex-col pb-2 lg:pb-0 lg:w-1/3">
                    <div className="font-bold lowercase text-crimson-c myriad-pro-bold">
                      Commercial
                    </div>
                    <ul>
                      <li>Bill Holmes</li>
                      <li>Jeff Lupetin</li>
                    </ul>
                  </div>
                  <div className="flex flex-col pb-2 lg:pb-0 lg:w-1/3">
                    <div className="font-bold lowercase text-crimson-c myriad-pro-bold">
                      Skills
                    </div>
                    <ul>
                      <li>iO Chicago - Improv</li>
                      <li>
                        Kate DeVore - Dialects (RP English, Estuary English,
                        rhotic and non-rhotic American Southern)
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  Full resume can be found{" "}
                  <a href="/resumes/Kevin Gomez Actors Resume (2020).pdf" target="_blank">
                    here
                  </a>
                  .
                </div>
              </div>
            </div>

            <div id="homespec" className="pb-10">
              <div className="body-title">Home Studio Spec</div>
              <ul>
                <li>Neumann TLM 103 XLR Microphone</li>
                <li>Focusrite Scarlett Solo (2nd Gen) USB Audio Interface</li>
                <li>Adobe Audition CC</li>
                <li>Available for remote recording (Source-Connect ready).</li>
              </ul>
            </div>

            <div id="contact" className="pb-10">
              <div className="body-title">Contact</div>
              <div className="pb-4">
                <div className="font-bold lowercase text-crimson-c myriad-pro-bold text-lg pb-4">
                  Representation
                </div>
                <div className="flex flex-col">
                  <div className="w-2/3 pb-4">
                    <a href="https://www.stewarttalent.com/" target="_blank">
                      <img
                        src="/images/stewart.png"
                        title="Stewart Talent"
                        alt="Stewart Talent"
                      />
                    </a>
                  </div>
                  <a href="mailto:vo@stewarttalent.com">vo@stewarttalent.com</a>
                  <div>312.943.3131</div>
                </div>
              </div>
              <div className="pb-4">
                If you'd like to get in touch with me directly, please don't
                hesitate to send me an{" "}
                <a href="mailto:kevinkgomezvo@gmail.com">email</a>.
              </div>
              <div className="flex flex-col">
                <div className="flex items-center pb-2">
                  <a href="mailto:kevinkgomezvo@gmail.com">
                    <img
                      src="/images/icons/iconfinder_email-letter-inbox-send_2203552.svg"
                      className="fill-crimson w-6"
                      title="email"
                      alt="email icon"
                    ></img>
                  </a>
                  <div className="pl-3">
                    <a href="mailto:kevinkgomezvo@gmail.com">
                      kevinkgomezvo@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center pb-2">
                  <a href="https://twitter.com/kevinkgomez" target="_blank">
                    <img
                      src="/images/icons/iconfinder_BW_Twitter_glyph_svg_5305170.svg"
                      className="fill-crimson w-6"
                      title="Twitter"
                      alt="Twitter icon"
                    ></img>
                  </a>
                  <div className="pl-3">
                    <a href="https://twitter.com/kevinkgomez" target="_blank">
                      @kevinkgomez
                    </a>
                  </div>
                </div>
                <div className="flex items-center pb-2">
                  <a
                    href="https://instagram.com/kevinkgomez.mp3"
                    target="_blank"
                  >
                    <img
                      src="/images/icons/iconfinder_Instagram_glyph_svg_5335781.svg"
                      className="fill-crimson w-6"
                      title="Instagram"
                      alt="Instagram icon"
                    ></img>
                  </a>
                  <div className="pl-3">
                    <a
                      href="https://instagram.com/kevinkgomez.mp3"
                      target="_blank"
                    >
                      kevinkgomez.mp3
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="header-container">
          <div id="header" className="header">
            <div className="flex flex-row justify-between p-3 lg:flex-col lg:p-6 z-10">
              <div className="p-4 lg:p-0 shadow-title text-white whitespace-nowrap">
                <div className="text-2xl leading-5 lg:text-6xl lg:leading-12.5 phosphate-pro-solid">
                  Kevin K <br /> Gomez
                </div>
                <div className="text-md tracking-widest lg:text-3xl lg:tracking-even-widest myriad-pro-bold -mt-1">
                  voice over
                </div>
              </div>
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
