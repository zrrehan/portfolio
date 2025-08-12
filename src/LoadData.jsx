import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import Loading from "./Loading";

export const MyContext = createContext(null)
function LoadData({children}) {
    const { data, isPending, isError, error } = useQuery({
        queryKey: ["todos"],
        queryFn: async () => {
            const res = await fetch("/personal.json");
            return res.json();
        }
    })
    

    if (isPending) {
        return <Loading></Loading>
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