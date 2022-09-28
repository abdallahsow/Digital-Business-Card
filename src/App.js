import { Info1, Info2, Info3, Info4 } from "./Components/Info/Info";
import Interests from "./Components/Description/Interests";
import Footer from "./Components/Footer/Footer";
import About from "./Components/Description/About";
import "./App.css";

export default function App() {
  return (
    <main className="app">
      {/* First column */}
      <div>
        <div className="card">
          <section className="layout">
            <Info1 />
            <About
              information="information"
              typography="typography"
              sideTypography="typography-p"
            />
            <Interests
              information="information"
              typography="typography"
              sideTypography="typography-p"
            />
          </section>
          <Footer footer="dark-footer" />
        </div>
        <div className="card">
          <section className="layout-1">
            <Info2 />
            <About
              information="information"
              typograhy="typography-wh typography"
              sideTypography="typography-p-wh typography-p"
            />
            <Interests
              information="information"
              typograhy="typography-wh typography"
              sideTypography="typography-p-wh typography-p"
            />
          </section>
          <Footer footer="dark-footer footer" />
        </div>
      </div>
      {/* Second column */}
      <div>
        <div className="card">
          <section className="layout">
            <Info3 />
            <About
              information="information"
              typography="typography"
              sideTypography="typography-p"
            />
            <Interests
              information="information"
              typography="typography"
              sideTypography="typography-p"
            />
          </section>
          <Footer footer="dark-footer" />
        </div>
        <div className="card">
          <section className="layout-1">
            <Info4 />
            <About
              information="information"
              typograhy="typography-wh typography"
              sideTypography="typography-p-wh typography-p"
            />
            <Interests
              information="information"
              typograhy="typography-wh typography"
              sideTypography="typography-p-wh typography-p"
            />
          </section>
          <Footer footer="dark-footer footer" />
        </div>
      </div>
    </main>
  );
}
