import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Home,
  Course,
  Contact,
  PageNotFound,
  SoftwareDevelopment,
  SoftwareTraining,
  Outsourcing,
} from "./pages";
import ScrollToTop from "./global/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/training/:slug" component={Course} />
          <Route path="/contact" component={Contact} />
          <Route
            path="/services/software-development"
            component={SoftwareDevelopment}
          />
          <Route
            path="/services/software-training"
            component={SoftwareTraining}
          />
          <Route path="/services/outsourcing" component={Outsourcing} />
          <Route path="/404" component={PageNotFound} />
          <Route component={PageNotFound} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
};

export default App;
