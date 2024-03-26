import { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa6";
import style from '../../styles/loading.module.css';

function Loading() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);  
        }, 2000);

        return () => clearTimeout(timeout);
    }, []); 

    useEffect(() => {
        if(loading){
            document.body.style.overflow = 'hidden';
        } 
        else{
            document.body.style.overflow = 'visible';
        }
    }, [loading]);

    return (
        <>
            {loading && (
                <div className={style.LoadingBar}>
                    <div className={style.LoadingWrap}>
                        <FaCheck className={style.loadingIcon} />
                    </div>
                </div>
            )}
        </>
    );
    
}

export default Loading;