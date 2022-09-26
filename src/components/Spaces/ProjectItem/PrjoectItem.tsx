import { Typography, Box } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { ProjectSpaceItem } from "./ProjectSpaceItem/ProjectSpaceItem";
import { IProjectItem } from "../../../shared/interfaces/spaces";

interface IProps {
  name: string;
  spaces: IProjectItem[];
}

const ProjectItem = (props: IProps) => {
  const { name, spaces } = props;

  const projectItems = spaces.map((item) => (
    <ProjectSpaceItem name={item.name} key={item.id} jobs={item.jobs} />
  ));

  return (
    <Box
      sx={{
        width: "auto",
        backgroundColor: "rgba(88, 88, 88, 0.4)",
        padding: "10px 10px",
        color: "#000",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{ fontSize: "14px", fontWeight: "bold", paddingBottom: "15px" }}
        >
          {name}
        </Typography>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Typography
            sx={{
              cursor: "pointer",
              marginRight: "5px",
            }}
          >
            +
          </Typography>
          <MoreHorizIcon sx={{ cursor: "pointer" }} />
        </Box>
      </Box>
      {projectItems}
    </Box>
  );
};

export default ProjectItem;
