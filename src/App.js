import { Info1, Info2, Info3, Info4 } from "./Components/Info";
import { Interests1, Interests2 } from "./Components/Interests";
import { Footer1, Footer2 } from "./Components/Footer";
import { About1, About2 } from "./Components/About";
import "./App.css";

export default function App() {
  return (
    <main className="app">
      {/* First column */}
      <div>
        <div className="card">
          <section className="layout">
            <Info1 />
            <About1 />
            <Interests1 />
          </section>
          <Footer1 />
        </div>
        <div className="card">
          <section className="layout-1">
            <Info2 />
            <About2 />
            <Interests2 />
          </section>
          <Footer2 />
        </div>
      </div>
      {/* Second column */}
      <div>
        <div className="card">
          <section className="layout">
            <Info3 />
            <About1 />
            <Interests1 />
          </section>
          <Footer1 />
        </div>
        <div className="card">
          <section className="layout-1">
            <Info4 />
            <About2 />
            <Interests2 />
          </section>
          <Footer2 />
        </div>
      </div>
    </main>
  );
}
