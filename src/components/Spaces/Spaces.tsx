import { Box, Typography } from "@mui/material";

import PrjoectItem from "./ProjectItem/PrjoectItem";
import { Projects } from "../../mock/Spaces";

export const Spaces: React.FC = () => {
  
  const projects = Projects.map((space) => (
    <PrjoectItem name={space.name} spaces={space.spaces} />
  ));

  return (
    <Box
      sx={{
        marginTop: "30px",
      }}
    >
      <Typography
        sx={{
          padding: "0px 10px",
          fontWeight: "bold",
        }}
      >
        Spaces
      </Typography>

      <Box
        sx={{
          marginTop: "15px",
        }}
      >
        {projects}
      </Box>
    </Box>
  );
};
