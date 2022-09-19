import { Typography } from "@mui/material";
import { Box } from "@mui/system";

interface IProps {
  name: string;
  jobs: number | string;
}

export const ProjectSpaceItem = (props: IProps) => {
  const { name, jobs } = props;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        paddingBottom: "5px",
      }}
    >
      <Typography
        sx={{
          fontSize: "14px",
          paddingLeft: "20px",
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          fontSize: "14px",
          color: "#999",
          paddingRight: "5px",
        }}
      >
          {jobs}
      </Typography>
    </Box>
  );
};
