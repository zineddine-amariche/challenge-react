import   { FC } from "react";
import { Button, useTheme } from "@mui/material";
import PrimaryText from "../typography";

interface Props {
  text: string;
  Icon:FC
}

const PrimaryButton = ({ text , Icon }: Props) => {
  const theme = useTheme();

  return (
    <Button
      variant="contained"
      sx={{ backgroundColor: theme.palette.primary.main }}
      startIcon={<Icon />}
    >
      <PrimaryText
        fontWeight={"700"}
        fontSize={"13px"}
        text={text}
        color={theme.palette.primary.light}
      />
    </Button>
  );
};

export default PrimaryButton;


