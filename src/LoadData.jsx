import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";

export const MyContext = createContext(null)
function LoadData({children}) {
    const { data, isPending, isError, error } = useQuery({
        queryKey: ["todos"],
        queryFn: async () => {
            const res = await fetch("./personal.json");
            return res.json();
        }
    })

    if (isPending) {
        return <p className="bg-red-400">Loading....</p>
    }

    if (isError) {
        return <p>{error.message}</p>
    }
    console.log(data);
    return(
        <MyContext value = {data}>
            {children}
        </MyContext>
    )
}
export default LoadData;