import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import CourseDetails from "./pages/CourseDetails.js/CourseDetails";
import ScrollToTop from "./global/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/courses/:slug" component={CourseDetails} />
          <Route path="/404" component={PageNotFound} />
          <Route component={PageNotFound} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
};

export default App;
