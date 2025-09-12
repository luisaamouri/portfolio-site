import Hero from '@/components/hero';
import About from '@/components/about';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import Head from 'next/head';
import Experience from '@/components/experience';
import Gallery from '@/components/photo_gallery';

const Home = () => {
  return (
    <>
      <Head>
        <title>Luisa's Portfolio</title>
        <meta name="description" content="Luisa's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="gallery"><Gallery /></section>
        <section id="contact"><Contact /></section>
      </div>
    </>
  );
};

export default Home;