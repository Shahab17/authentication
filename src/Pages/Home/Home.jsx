import { useContext } from "react";
import   { AuthContext } from "../../ContextApi/AuthProvider";

 

const Home = () => {

    const info = useContext(AuthContext)
    console.log(info)

    return (
        <div>
            <h2 className="text-xl">Home   </h2>
        </div>
    );
};

export default Home;