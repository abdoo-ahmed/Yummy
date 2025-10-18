import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import IconArea from "../IconArea/IconArea";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Areacontext } from "../Contexts/AreaContext";

const Area = () => {
  const { setCountries } = useContext(Areacontext);
  const { data, isLoading } = useQuery({
    queryKey: ["Area"],
    queryFn: getAreas,
    refetchOnMount: 'always',
    refetchOnWindowFocus: false,
    staleTime: 0,
  });
  
  async function getAreas() {
    const DataArea = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    return DataArea.data.meals;
  }

  if (isLoading) {
    return <LoadingScreen />;
  }
  function catchArea(area){
    setCountries(area);
    localStorage.setItem('Country' , area);
  }


  return (
    <>
      <div className="grid grid-cols-1 h-auto sm:grid-cols-2 mb-5 lg:grid-cols-4 gap-7">
        {data?.map((Area, index) => {
          return (
            <Link to="/area/areaDetail" key={index} onClick={() => catchArea(Area.strArea)} className="text-center w-full m-auto font-bold">
              <IconArea />
              <p className="text-2xl">{Area.strArea}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Area;