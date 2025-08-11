import displayPicture from "../Assets/DP.png"

function Home() {
    return(
        <div>
            <div>
                <p></p>
            </div>

            <div className="w-[400px] h-[500px]">
                <img className="rounded-full" src = {displayPicture} alt="display picture"/>
            </div>
        </div>
    )
}

export default Home;