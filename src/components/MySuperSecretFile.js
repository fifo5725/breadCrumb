import {withRouter} from "../hooks/with-router";
import {useLocation} from "react-router-dom";

const MySuperSecretFile = () =>{
    const location = useLocation();
    const to = location.pathname.split("/").filter(x => x);
    return(
        <section>
            <p>THIS IS {to[to.length-1]}</p>
        </section>
    )
}
export default withRouter(MySuperSecretFile);