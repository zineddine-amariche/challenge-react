import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import PrimaryText from "../typography";
import { useTheme } from "@mui/material";
import { CardStaff, LogoStaff } from "../../../assets/supportIcon";
import Pagination from "./components/  Pagination";

type Props = {
  data: DProps[];
};
interface DProps {
  name: string;
  informations: string;
  Status: string;
  Created: string;
  Replies: string;
  staf: boolean;
  numStaff: string;
  Icon: string;
}

const BasicTable: React.FC<Props> = ({ data }) => {
  const theme = useTheme();

  return (
    <>
      <TableContainer component={Box} sx={{ width: "96%" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Ticket </TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Created On </TableCell>
              <TableCell align="left">Replies </TableCell>
              <TableCell align="left"> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(
              ({
                name,
                informations,
                Status,
                Created,
                Replies,
                staf,
                numStaff,
              }: DProps) => {
                return (
                  <TableRow
                    key={name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <PrimaryText
                        fontWeight={"700"}
                        fontSize={"15px"}
                        text={name}
                        color={theme.palette.primary.main}
                        lineHeight="25px"
                      />
                      <PrimaryText
                        fontWeight={"500"}
                        fontSize={"13px"}
                        text={informations}
                        color={theme.palette.primary.dark}
                        lineHeight="25px"
                      />
                    </TableCell>
                    <TableCell align="left">{Status}</TableCell>
                    <TableCell align="left">{Created}</TableCell>
                    <TableCell align="left">
                      <Box
                        sx={{
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {/* <row.Icon /> */}

                        <PrimaryText
                          fontWeight={"400"}
                          fontSize={"13px"}
                          text={Replies}
                          color={theme.palette.primary.dark}
                          lineHeight="20px"
                          mr={1}
                        />
                        <Box
                          sx={{
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Box sx={{ position: "absolute", left: "12px" }}>
                            <PrimaryText
                              fontWeight={"700"}
                              fontSize={"11px"}
                              text={numStaff}
                              color={theme.palette.primary.dark}
                              lineHeight="12px"
                            />
                          </Box>
                          <CardStaff />
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell align="left">
                      {staf && (
                        <Box
                          sx={{
                            width: "60px",
                            height: "18px",
                            borderRadius: "13px",
                            backgroundColor: theme.palette.grey[200],
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <LogoStaff mr={0.5} />
                          <PrimaryText
                            fontWeight={"500"}
                            fontSize={"10px"}
                            text={"STAFF"}
                            color={theme.palette.primary.dark}
                            lineHeight="12px"
                          />
                        </Box>
                      )}
                    </TableCell>
                  </TableRow>
                );
              }
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination />
    </>
  );
};

export default BasicTable;
