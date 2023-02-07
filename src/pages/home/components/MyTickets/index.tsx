import Separator from "../../../../components/utils/Line";
import Space from "../../../../components/utils/Space";
import Body from "../../../../components/utils/BoxPrimary/Body";
import HeaderTickets from "./components/noTickets/HeaderTickets";
import TableTickets from "./components/table";
import { useEffect, useState } from "react";

const MyTickets = () => {
  const [laoding, setLoading] = useState(true);

  useEffect(() => {
    if (laoding) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [laoding]);

  return (
    <Body>
      <HeaderTickets laoding={laoding} />
      <Space height="30px" />

      <Separator />
      <Space height="20px" />

      <TableTickets laoding={laoding} />
      <Space height="80px" />
    </Body>
  );
};

export default MyTickets;
