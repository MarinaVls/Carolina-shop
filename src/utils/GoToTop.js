import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const GoToTop = () => {
    const routePath = useNavigate();
    
    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        onTop()
    }, [routePath]);

    return null;
}
