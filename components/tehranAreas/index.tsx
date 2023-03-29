import { type FC, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import SearchBar from "./searchBar";
import TehranAreasList from "./list";
import axios from "axios";

const TehranAreas: FC = () => {
  const [selectedArea, setSelectedArea] = useState<string>("");
  const [area, setArea] = useState<string>("");
  const [areaList, setAreaList] = useState<string[]>([]);

  useEffect(() => {
    //debounce function
    const getAreas = setTimeout(() => {
      const params = area ? `?area=${area}` : "";
      axios.get(`/api/areas/${params}`).then((res) => {
        const { data } = res.data;
        setAreaList(data);
      });
    }, 500);
    return () => clearTimeout(getAreas);
  }, [area]);

  return (
    <Box display="flex" justifyContent="center" sx={{ direction: "rtl" }}>
      <SearchBar area={area} setArea={setArea} />
      <Box mt={10} px={2}>
        {areaList.map((area) => (
          <TehranAreasList
            key={area}
            area={area}
            selectedArea={selectedArea}
            setSelectedArea={setSelectedArea}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TehranAreas;
