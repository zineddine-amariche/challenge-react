import { useState } from "react";
import { NoActiveTicket } from "../../../../../../assets/supportIcon";
import Column from "../../../../../../components/utils/BoxColumn";
import Space from "../../../../../../components/utils/Space";
import PrimaryText from "../../../../../../components/utils/typography";
import { useTheme } from "@mui/material";
import BasicTable from "../../../../../../components/utils/Table";
import { useQuery } from "react-query";
import axios from "axios";


interface IApiError {
  message: string;
  description: string;
  statusCode: string | number;
  code:string
}
const TableTickets = () => {
  const fetchTickets = () => {
    return axios.get(" http://localhost:3500/items");
  };

  const { isLoading, data, isError, error } = useQuery(
    "Tickets",
    fetchTickets,
    {
      onError: (err: IApiError) => err,
    }
  );

  const [Data, setData] = useState([]);
  if (isLoading) {
    return <h2>Loading ...</h2>;
  }
  if (isError) {
    return <h2>{error.code}</h2>;
  }

  return (
    <Column>
      {!data?.data.length ? <NoData /> : <BasicTable data={data.data} />}
    </Column>
  );
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
