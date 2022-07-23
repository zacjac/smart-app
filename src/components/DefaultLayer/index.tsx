import { Footer } from "./Footer";
import { Header } from "./Header";

const index = ({ children }: any) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default index;
