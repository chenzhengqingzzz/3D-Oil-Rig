import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import  LandRIGSHOW  from "../pages/landRIG";

const Root = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route path="LandRIGSHOW" element={<LandRIGSHOW />} />
                   </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Root
