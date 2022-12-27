import Navbar from "../components/Layout/Navbar";
import Hero from "../components/Home/Hero";
import GameList from "../components/Home/GameList";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>8 Bit Games</title>
      </Head>
      <Navbar />
      <Hero />
      <GameList />
    </>
  );
}
