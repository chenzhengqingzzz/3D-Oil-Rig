import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import  LandRIGSHOW  from "../pages/landRIG";
import OceanRIGSHOW from "../pages/OceanRIG";
import CubeShow from "../pages/cube";
import KeyShow from "../pages/key";

const Root = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route path="LandRIGSHOW" element={<LandRIGSHOW />} />
                        <Route path="OceanRIGSHOW" element={<OceanRIGSHOW />} />
                        <Route path="CubeShow" element={<CubeShow />} />
                        <Route path="KeyShow" element={<KeyShow />} />
                   </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Root
