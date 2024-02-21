import SavedShows from "../components/SavedShows";

function Account(){
    return (
        <>
        <div className="w-full text-white">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/46a51291-77f4-4941-ba0d-d93912a9d6fd/IT-it-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
                 alt="/"
                 className="w-full h-[400px] object-cover" 
            />
            <div className="bg-black/60 fixed
                            top-0 left-0 w-full
                            h-[550px]"
            >
                <div className="absolute top-[20%] p-4 md:p-8">
                    <h1 className="text-3xl md:text-5xl font-bold">
                        My Shows
                    </h1>
                </div>
            </div>
        </div>
        <SavedShows/>
        </>
    )
}

export default Account;