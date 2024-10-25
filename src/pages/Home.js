import Header from "../Components/Header";
import First from "../Components/Home/First";
import Services from "../Components/Home/Services";
import Unique from "../Components/Home/Uniqe";

export default function Home() {
  return (
    <div>
      <Header />
      <First />
      <div className="relative">
        <Services />
      </div>
      <Unique />
    </div>
  );
}
