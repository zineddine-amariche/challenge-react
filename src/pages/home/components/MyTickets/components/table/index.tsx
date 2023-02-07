import { NoActiveTicket } from "../../../../../../assets/supportIcon";
import Column from "../../../../../../components/utils/BoxColumn";
import Space from "../../../../../../components/utils/Space";
import PrimaryText from "../../../../../../components/utils/typography";
import { useTheme } from "@mui/material";
import BasicTable from "../../../../../../components/utils/Table";
import { items } from "../../../../data";

type Props = {
  laoding: boolean;
};
const TableTickets: React.FC<Props> = ({ laoding }) => {
  return <Column>{laoding ? <NoData /> : <BasicTable data={items} />}</Column>;
};

export default TableTickets;

const NoData = () => {
  const theme = useTheme();

  return (
    <>
      <Space height="20px" />
      <NoActiveTicket />
      <Space height="30px" />

      <PrimaryText
        fontWeight={"700"}
        fontSize={"24px"}
        text={"No Tickets Found!"}
        color={theme.palette.primary.dark}
      />
      <Space />
      <PrimaryText
        fontWeight={"400"}
        fontSize={"15px"}
        text={"Your support tickets or feature requests will appear here."}
        color={theme.palette.grey[600]}
      />
    </>
  );
};
