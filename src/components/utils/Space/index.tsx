import { Box, height } from "@mui/system";

interface Props {
  height?: string;
}

const Space = ({ height }: Props) => {
  return <Box sx={{ height: height ? height : "10px" }}></Box>;
};

export default Space;
