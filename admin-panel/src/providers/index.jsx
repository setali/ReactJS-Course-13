import { BrowserRouter as Router } from "react-router-dom";
import AntdProvider from "./antd";
import ReduxProvider from "./redux";

export default function Providers({ children }) {
  return (
    <Router>
      <AntdProvider>
        <ReduxProvider>{children}</ReduxProvider>
      </AntdProvider>
    </Router>
  );
}
