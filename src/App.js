import React from "react";
import Header from "./Components/Header/Header";
import NavbarMenu from "./Components/NavbarMenu/NavbarMenu";
import Home from "./Components/Pages/Home";
import WhiteFilling from "./Components/Pages/WhiteFilling";
import ScrollToTop from "./Components/ScrollToTop"
import FloatingWhatsApp from "./Components/FloatingWhatsappButton/FloatingWhatsappButton";
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import GeneralDentistry from "./Components/Pages/GeneralDentistry";
import CleaningandExam from "./Components/Pages/CleaningandExam";
import CleaningandPrevention from "./Components/Pages/CleaningandPrevention";
import EmergencyCare from "./Components/Pages/EmergencyCare";
import RootCanals from "./Components/Pages/RootCanals";
import PorcelainCrown from "./Components/Pages/PorcelainCrown";
import HolisticDentistry from "./Components/Pages/HolisticDentistry";
import COSMETIC from "./Components/Pages/Cosmetic"
import SURGICAL from "./Components/Pages/Surgical"
import KIDSDENTISTRY from "./Components/Pages/KidsDentistry"
import TeethWhitening from "./Components/Pages/TeethWhitening";
import DentalCrown from "./Components/Pages/DentalCrown";
import DentalVeneer from "./Components/Pages/DentalVeneer"
import DentalImplant from "./Components/Pages/DentalImplant";
import InlaysOnlays from "./Components/Pages/InlaysOnlays";
import DentalBonding from "./Components/Pages/DentalBonding";
import RootCanalTherapy from "./Components/Pages/RootCanalTherapy";
import WisdomToothExtraction from "./Components/Pages/WisdomToothExtraction";
import Reconstructive from "./Components/Pages/Reconstructive";
import ToothColoredFilling from "./Components/Pages/ToothColoredFilling";
import Extraction from './Components/Pages/Extraction';
import Sealant from './Components/Pages/Sealant';
import KidsEmergency from "./Components/Pages/KidsEmergency";
import Videos from "./Components/Pages/video";
import PhotoGallery from "./Components/Pages/PhotoGallery";
import BookOnline from './Components/BookOnline/BookOnline'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <NavbarMenu />
      <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/WhiteFilling' element={<WhiteFilling/>} />
      <Route path='/Cleaning-and-Exam-of-teeth' element={<CleaningandExam/>}/>
      <Route path='/dental-emergency-care' element={<EmergencyCare/>}/>
      <Route path='/root-canal-treatment-dentist' element={<RootCanals/>}/>
      <Route path='/ProcelainCrown-of-teeth' element={<PorcelainCrown/>}/>
      <Route path='/Holistic-dentistry-of-teeth' element={<HolisticDentistry/>}/>
      <Route path='/kids-dentist-teeth-cleaning' element={<CleaningandPrevention/>}/>
      <Route path="/General" element={<GeneralDentistry/>}/>
      <Route path='/Teeth-Whitening-dentist' element={<TeethWhitening/>}/>
      <Route path='/Dental-crown' element={<DentalCrown/>}/>
      <Route path='/Dental-veneer' element={<DentalVeneer/>}/>
      <Route path='/inlays-onlays-cosmetic-treatment' element={<InlaysOnlays/>}/>
      <Route path='/Dental-Implant-of-cosmetic-dentistry' element={<DentalImplant/>}/>
      <Route path='/dental-bonding-of-teeth' element={<DentalBonding/>}/>
      <Route path='/root-canal-therapy-of-teeth' element={<RootCanalTherapy/>}/>
      <Route path='/wisdom-tooth-extraction' element={<WisdomToothExtraction/>}/>
      <Route path='/reconstructive-procedure-of-surgical-dentist' element={<Reconstructive/>}/>
      <Route path='/tooth-color-filling-of-teeth' element={<ToothColoredFilling/>}/>
      <Route path='/kids-tooth-extraction' element={<Extraction/>}/>
      <Route path='/kids-sealant' element={<Sealant/>}/>
      <Route path='/Emergencies-of-kids' element={<KidsEmergency/>}/>
      <Route path="/Cosmetic" element={<COSMETIC/>}/>
      <Route path="/Surgical" element={<SURGICAL/>}/>
      <Route path="/KidsDentistry" element={<KIDSDENTISTRY/>}/>
      <Route path='/videos-of-maxillofacial-clinic' element={<Videos/>}/>
      <Route path='/photo-gallery' element={<PhotoGallery/>}/>
      <Route path='/Book-online' element={<BookOnline/>}/>
    </Routes>
  </BrowserRouter>,
  <FloatingWhatsApp />
    </div>
  );
}

export default App;
