import SupportForums from "./components/SupportForums";
import Space from "../../components/utils/Space";
import MyTickets from "./components/MyTickets";
import Column from "../../components/utils/BoxColumn";

const Home = () => {
  return (
    <Column>
      <SupportForums />
      <MyTickets />
      <Space height="80px" />
    </Column>
  );
};

export default Home;
