import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SwiperComponent from "./SwiperComponent";
const queryClient = new QueryClient();
function Projects() {
    return(
        <div>
            <QueryClientProvider client={queryClient}>
                <SwiperComponent></SwiperComponent>
            </QueryClientProvider>
            
        </div>
    )
}

export default Projects;