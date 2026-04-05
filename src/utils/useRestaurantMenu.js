import { useEffect, useState } from "react"

const useRestaurantMenu = (resId) => {

    const [resInfo, setresInfo] = useState(null);

    useEffect(() => {
        fetchData();
    },[resId]);

    const fetchData = async () => {
        const data = await fetch("http://localhost:3001/menu2");
        const json = await data.json();

        setresInfo(json.data);

    }

    return resInfo;

}

export default useRestaurantMenu;