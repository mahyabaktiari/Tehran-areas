import { type FC, useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import SearchBar from "./searchBar";
import TehranAreasList from "./list";

const TehranAreas: FC = () => {
  const [selectedArea, setSelectedArea] = useState<string>("");
  const [area, setArea] = useState<string>("");
  const [areaList, setAreaList] = useState<string[]>([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    //debounce function
    setIsloading(true);
    const getAreas = setTimeout(() => {
      const params = area ? `?area=${area}` : "";
      axios
        .get(`/api/areas/${params}`)
        .then((res) => {
          const { data } = res.data;
          setAreaList(data);
          setIsloading(false);
        })
        .catch(() => {
          setIsloading(false);
        });
    }, 500);
    return () => clearTimeout(getAreas);
  }, [area]);

  return (
    <Box display="flex" justifyContent="center" sx={{ direction: "rtl" }}>
      <SearchBar area={area} setArea={setArea} />
      <Box mt={17} px={2}>
        {isLoading ? (
          <Box height={500} display="flex" alignItems="center">
            <CircularProgress color="secondary" />
          </Box>
        ) : (
          areaList.map((area) => (
            <TehranAreasList
              key={area}
              area={area}
              selectedArea={selectedArea}
              setSelectedArea={setSelectedArea}
            />
          ))
        )}
      </Box>
    </Box>
  );
};

export default TehranAreas;
