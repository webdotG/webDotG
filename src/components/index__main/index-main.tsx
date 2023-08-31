import MainPortfolio from "./main-portfolio/main-portfolio";
import MainPrice from "./main-price/main-price";
import MainTitle from "./main-title/main-title";

function IndexMain() {

  return (
    <main>
      <MainTitle />
      <MainPrice />
      <MainPortfolio />
    </main>
  )
}

export default IndexMain;