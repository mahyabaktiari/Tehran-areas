import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import type { FC } from "react";

interface TehranAreasListProps {
  area: string;
  selectedArea: string;
  setSelectedArea: (value: string) => void;
}

const TehranAreasList: FC<TehranAreasListProps> = ({
  area,
  selectedArea,
  setSelectedArea,
}) => {
  return (
    <Box
      width={400}
      py={1}
      boxSizing="border-box"
      display="flex"
      justifyContent="space-between"
      borderBottom="1px solid #bebebe5e"
      alignItems="center"
    >
      <Typography color="steelblue">{area}</Typography>
      <Radio
        value={area}
        checked={selectedArea === area}
        onChange={() => setSelectedArea(area)}
        color="secondary"
      />
    </Box>
  );
};

export default TehranAreasList;
