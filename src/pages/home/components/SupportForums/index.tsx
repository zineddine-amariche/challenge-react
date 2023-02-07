// import { useTheme } from "@emotion/react";
import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import {
  ArrowRight,
  SupportForumsIcon,
  SupportIcon,
} from "../../../../assets/supportIcon";
import PrimaryButton from "../../../../components/utils/Buttons";
import FlexBetween from "../../../../components/utils/FlexBetween";
import MainContainer from "../../../../components/utils/mainContainer";
import PrimaryText from "../../../../components/utils/typography";
import Separator from "../../../../components/utils/Line";
import Space from "../../../../components/utils/Space";
import { SearchInput } from "../../../../components/utils/SearchInput";
import Body from "../../../../components/utils/BoxPrimary/Body";
import Column from "../../../../components/utils/BoxColumn";

const SupportForums = () => {
  const theme = useTheme();

  const onChange = () => {};

  return (
    <Body>
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
            text={"Support  Resources"}
            color={theme.palette.primary.dark}
          />
          <MainContainer>
            <Box sx={{ marginRight: "20px" }}>
              <PrimaryText
                fontWeight={"400"}
                fontSize={"13px"}
                text={"Need Help?"}
                color={theme.palette.primary.dark}
              />
            </Box>
            <PrimaryButton
              text="Get Support"
              Icon={SupportIcon}
            ></PrimaryButton>
          </MainContainer>
        </FlexBetween>
      </Box>
      <Space height="30px" />

      <Separator />
      <Space height="80px" />

      <Column>
        <SupportForumsIcon />
        <Space height="15px" />

        <PrimaryText
          fontWeight={"700"}
          fontSize={"24px"}
          text={"Support Forums"}
          color={theme.palette.primary.dark}
        />
        <Space />

        <PrimaryText
          fontWeight={"400"}
          fontSize={"15px"}
          text={"Search the topic you need help with in our support forums."}
          color={theme.palette.grey[600]}
        />
        <Space />

        <FlexBetween>
          <Box sx={{ marginRight: "5px" }}>
            <PrimaryText
              fontWeight={"700"}
              fontSize={"11px"}
              text={"Browse Forums"}
              color={theme.palette.primary.main}
              cursor={true}
            />
          </Box>
          <ArrowRight />
        </FlexBetween>
        <Space height="15px" />
        <SearchInput
          placeholder="Search support forum"
          value=""
          onChange={onChange}
        />
      </Column>
    </Body>
  );
};

export default SupportForums;
