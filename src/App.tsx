import React, { ReactElement } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/main/index";
import Signup from "./components/signup/Signup";
import Signin from "./components/signin/Signin";
import Mypage from "./components/mypage/index";
import ReadReview from "./components/readReview/ReadReview";
import PostReview from "./components/writeReview/ModalTest";
// import WriteReview from "./component/writeReview";

const App: React.FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/mypage" component={Mypage} />
        {/* <Route path="/writereview" component={} /> */}
        <Route path="/review/:id" component={ReadReview} />
        <Route path="/postreview" component={PostReview} />
        <Route path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
