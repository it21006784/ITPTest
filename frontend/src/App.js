import './App.css';
import { BrowserRouter as Router,Route, Routes, useNavigate, useLocation, useParams} from "react-router-dom";
import AddAdvertiser from './components/AddAdvertiser'
import AdPackages from './components/AdPackages';
import AddAdvertisement from './components/AddAdvertisement';
import AllAdvertisers from "./components/AllAdvertisers";
import UpdateAdvertiser from "./components/UpdateAdvertiser";
import ViewAdvertisements from './components/ViewAdvertisements';
import UserHeader from './components/UserHeader';
import ViewHotel from './components/ViewHotels';
import AddnewHotel from './components/AddnewHotel';
import InsuranceMain from './components/InsuranceMain'
import ViewRoom from './components/ViewRoom';
import CheckInInfo from './components/CheckInInfo';
import VehicleReserve from './components/VehicleReserve';
import AdminHeader from './components/AdminHeader';
import ViewReservedVehicles from './components/ViewReservedVehicles';
import AddDestinationmanager from './components/AddDestinationmanager';
import CreateDestination from './components/CreateDestination';
import ReserveDestination from './components/ReserveDestination';
import ViewDestinationmanagers from './components/ViewDestinationmanagers';
import VehicleReserveAdmin from './components/VehicleReserveAdmin';
import VehicleHomepage from './components/VehicleHomepage';
import AdvertiserHeader from './components/AdvertiserHeader';
import AdvertiserProfile from './components/AdvertiserProfile';

function App() {

  return (
    <Router>
    <div>   
      
      <UserHeader/>
   
      <Routes>
      <Route path="/hotels" exact element={<ViewHotel/>}/>
      <Route path="/hotels/view/:id" exact element ={<ViewRoom/>}/>
      <Route path="/hotels/reserve/:id" exact element={<CheckInInfo/>}/>
      <Route path="/newhotel" exact element={<AddnewHotel/>}/>

      <Route path="/InsuranceMain" exact element={<InsuranceMain/>}/>
      <Route path="/vehicleReservationForm" exact element={<VehicleReserve/>}/>
      <Route path="/AdminHeader" exact element={<AdminHeader/>}/>
      
      <Route path="/viewReservedVehicles" exact element={<ViewReservedVehicles/>}/>
      <Route path="/destinationmanagerform" exact element={<AddDestinationmanager/>}/>
      <Route path="/createdestinationform" exact element={<CreateDestination/>}/>
      <Route path="/reservedestinationform" exact element={<ReserveDestination/>}/>
      <Route path="/adminViewDestinationManager" exact element={<ViewDestinationmanagers/>}/>
   
      <Route path="/vehicleReserveAdmin" exact element={<VehicleReserveAdmin/>}/>
      <Route path="/vehicleHomepage" exact element={<VehicleHomepage/>}/>
      
      <Route path = "/register" exact element = {<AddAdvertiser/>} />
      <Route path = "/select" exact element = {<AdPackages/>} />
      <Route path = "/addAd" exact element = {<AddAdvertisement/>} />
      <Route path = "/getAdvertisers" element = {<AllAdvertisers/>} />
      <Route path = "/updateAdvertisers/:advertiserId" element = {<UpdateAdvertiser/>} />
      <Route path = "/getAdvertisements" element = {<ViewAdvertisements/>} />
      <Route path = "/advertiserHeader" element = {<AdvertiserHeader/>} />
      <Route path = "/advertiserProfile/:advertiserId" element = {<AdvertiserProfile/>} />

      </Routes>
    </div>
    </Router>
  );
}

export default App;

