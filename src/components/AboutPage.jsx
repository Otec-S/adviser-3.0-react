import "./AboutFirm.css";
import AboutFirm from "./AboutFirm";
import AboutGrigorash from "./AboutGrigorash";
import AboutKuznetsov from "./AboutKuznetsov";

export default function AboutPage() {
  return (
    <section className="about">
      <AboutFirm />
      <AboutGrigorash />
      <AboutKuznetsov />
    </section>
  );
}
