import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SliderP from './slider/slider';
import Header from './header/header';
import Grid from './grid/grid';
import Checking from './scandinavian/scandinavian';
import GridInfo from './choose/gridInfo';
import Form from './form/form';

function App() {
    return (
      <><header>
        <Header />
      </header><main>
          <section>
            <div className="App">
              <SliderP />
            </div>
          </section>
          <section>
            <Grid />
          </section>
          <section>
            <Checking />
          </section>
          <section>
            <GridInfo />
          </section>
          <section>
              <Form />
          </section>
        </main>
        <footer>
          <p>By Natallia Rak</p>
          </footer></>
  );
}

export default App;
