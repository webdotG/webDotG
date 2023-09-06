import MainAbout from "./main-about/main-about";
import MainFeedback from "./main-feedback/main-feedback";
import MainOrder from "./main-order/main-order";
import MainPortfolio from "./main-portfolio/main-portfolio";
import MainPrice from "./main-price/main-price";
import MainTitle from "./main-title/main-title";

function IndexMain() {

  return (
    <main>
      <MainTitle />
      <MainPrice />
      <MainPortfolio />
      <MainAbout />
      <MainFeedback />
      <MainOrder />
    </main>
  )
}

export default IndexMain;