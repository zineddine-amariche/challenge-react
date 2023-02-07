import { Box, useTheme } from "@mui/material";
import FlexBetween from "../../../../../../components/utils/FlexBetween";
import MainContainer from "../../../../../../components/utils/mainContainer";
import { SearchInput } from "../../../../../../components/utils/SearchInput";
import SelectList from "../../../../../../components/utils/SelectList";
import PrimaryText from "../../../../../../components/utils/typography";

const HeaderTickets = () => {
  const theme = useTheme();
  const onChange = () => {};

  return (
    <Box
      sx={{
        pl: "30px",
        pr: "30px",
      }}
    >
      <FlexBetween>
        <PrimaryText
          fontWeight={"700"}
          fontSize={"15px"}
          text={"My Tickets"}
          color={theme.palette.primary.dark}
        />
        <MainContainer>
          <SelectList />
          <SearchInput
            placeholder="Search Tickets"
            value=""
            onChange={onChange}
            width={"100%"}
          />
        </MainContainer>
      </FlexBetween>
    </Box>
  );
};

export default HeaderTickets;
