import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import  LandRIGSHOW  from "../pages/landRIG";
import OceanRIGSHOW from "../pages/OceanRIG";

const Root = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route path="LandRIGSHOW" element={<LandRIGSHOW />} />
                        <Route path="OceanRIGSHOW" element={<OceanRIGSHOW />} />
                   </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Root
