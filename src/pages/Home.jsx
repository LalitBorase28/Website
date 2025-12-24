import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import FrontComponent from "../component/FrontComponent";
import AboutTabs from "../component/AboutTabs";
import Video from "../component/Video";
import VocoXpVidForm from "../component/VocoXpVidForm";
import UseCards from "../component/UseCards";

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <FrontComponent />
        </section>
        <section>
          <UseCards />
        </section>
        <section id="about">
          <AboutTabs />
        </section>
        <section id="usecases">
          <Video />
        </section>
        <section id="contact">
          <VocoXpVidForm />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
