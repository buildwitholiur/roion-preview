import HomeAlertBlock from "./HomeAlertBlock";
import HomeStatBlock from "./HomeStatBlock";

const HomeAlertStatBlock = () => {
  return (
    <section className="flex flex-col xl:flex-row xl:items-start gap-7.5">
      <HomeStatBlock />

      <HomeAlertBlock />
    </section>
  );
};

export default HomeAlertStatBlock;
