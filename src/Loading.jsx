import Lottie from "lottie-react";
import loadingAnimation from "./Lotties/loading.json"

function Loading() {
    return(
        <div className="flex min-h-[100vh] justify-center">
            <Lottie animationData={loadingAnimation} loop={true} className="w-[300px]"></Lottie>
        </div>
    )
}

export default Loading;