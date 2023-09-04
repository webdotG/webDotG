import MainAbout from "./main-about/main-about";
import MainFeedback from "./main-feedback/main-feedback";
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
    </main>
  )
}

export default IndexMain;