// import { useState, useEffect } from "react";
// import ClipLoader from "react-spinners/ClipLoader";
import { FaCheck } from "react-icons/fa6";
import style from '../../styles/loading.module.css';


function Loading() {
    /*const [loading, setLoading] = useState(true);
    const [delayTime, setDelayTime] = useState(2000);

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };
    

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, delayTime - 1200);

        return () => clearTimeout(timeout);

    }, [setDelayTime]); 

    return (
        <div className="sweet-loading">

            <ClipLoader
                // color={color}
                loading={loading}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );*/

    return (
        <div className={style.LoadingBar}>
            <div className={style.LoadingWrap}>
                <FaCheck className={style.loadingIcon} />
            </div>
        </div>

    );
    
}

export default Loading;