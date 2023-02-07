import Separator from "../../../../components/utils/Line";
import Space from "../../../../components/utils/Space";
import Body from "../../../../components/utils/BoxPrimary/Body";
import HeaderTickets from "./components/noTickets/HeaderTickets";
import TableTickets from "./components/table";

const MyTickets = () => {
  return (
    <Body>
      <HeaderTickets />
      <Space height="30px" />

      <Separator />
      <Space height="20px" />

      <TableTickets />
      <Space height="80px" />
    </Body>
  );
};

export default MyTickets;
