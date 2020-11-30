import Head from "next/head";
import Link from "next/link";
import MenuItem from "../components/menu-item";
import DemoReel from "../components/demo-reel"

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Kevin K Gomez - Voice Over</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-row-reverse justify-between">
        <div className="header fixed flex right-0 p-6">
          <div className="flex-col">
            <div className="logo text-white">
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

        <main className="w-screen flex flex-col items-center">
          <div className="w-1/2">
            <DemoReel title="commercial">
            </DemoReel>

            <DemoReel title="character">
            </DemoReel>
            <h1 className="title">
              THANK GOD{" "}
              <Link href="/posts/first-post">
                <a>Next.js!</a>
              </Link>
            </h1>

            <p className="description">
              Get started by editing <code>pages/index.js</code>
            </p>
            <p className="description">
              Get started by editing <code>pages/index.js</code>
            </p>
            <p className="description">
              Get started by editing <code>pages/index.js</code>
            </p>
            <p className="description">
              Get started by editing <code>pages/index.js</code>
            </p>
            <p className="description">
              Get started by editing <code>pages/index.js</code>
            </p>
            <p className="description">
              Get started by editing <code>pages/index.js</code>
            </p>
            <p className="description">
              Get started by editing <code>pages/index.js</code>
            </p>
            <p className="description">
              Get started by editing <code>pages/index.js</code>
            </p>
            <p className="description">
              Get started by editing <code>pages/index.js</code>
            </p>
            <p className="description">
              Get started by editing <code>pages/index.js</code>
            </p>
            <p className="description">
              Get started by editing <code>pages/index.js</code>
            </p>
            <p className="description">
              Get started by editing <code>pages/index.js</code>
            </p>
            <p className="description">
              Get started by editing <code>pages/index.js</code>
            </p>
            <p className="description">
              Get started by editing <code>pages/index.js</code>
            </p>
            <p className="description">
              Get started by editing <code>pages/index.js</code>
            </p>
            <p className="description">
              Get started by editing <code>pages/index.js</code>
            </p>
            <p className="description">
              Get started by editing <code>pages/index.js</code>
            </p>
            <p className="description">
              Get started by editing <code>pages/index.js</code>
            </p>
            <p className="description">
              Get started by editing <code>pages/index.js</code>
            </p>
            <p className="description">
              Get started by editing <code>pages/index.js</code>
            </p>
            <p className="description">
              Get started by editing <code>pages/index.js</code>
            </p>
            <p className="description">
              Get started by editing <code>pages/index.js</code>
            </p>
            <p className="description">
              Get started by editing <code>pages/index.js</code>
            </p>
            <p className="description">
              Get started by editing <code>pages/index.js</code>
            </p>
            <p className="description">
              Get started by editing <code>pages/index.js</code>
            </p>
            <p className="description">
              Get started by editing <code>pages/index.js</code>
            </p>
            <p className="description">
              Get started by editing <code>pages/index.js</code>
            </p>
            <p className="description">
              Get started by editing <code>pages/index.js</code>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
