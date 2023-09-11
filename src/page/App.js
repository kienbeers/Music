import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import '../style/App.css';
import { publicRoutes } from '../routes/router';
import Home from './page-home/Home';
import { Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <>
    <Router>
          <div className="App">
            <Routes>
              {publicRoutes.map((route, index) => {
                const Layout = route.Layout === null ? Fragment : Home; 
                const Page = route.component;
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  />
                );
              })}
            </Routes>
          </div>
        </Router>
    </>
  );
}

export default App;
