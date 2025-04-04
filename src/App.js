import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from './Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import PrepaidRecharge from './Pages/PrePaid/PrepaidRecharge';
import Footer1 from './Conponent/Footer1';

import HeaderPay from './Conponent/HeaderPay';
import NewPrepaidSim from './Pages/PrePaid/NewPrePaidSim';
import ViewPlans from './Pages/PrePaid/ViewPlans';
import SwitchPrepaidToPostpaid from './Pages/PrePaid/SwitchPrepaidToPostpaid';
import PayBill from './Pages/postpaid/PayBill';
import DisplayImage from './Pages/postpaid/DisplayImage';
import NewPostpaidConnection from './Pages/postpaid/NewPostpaidConnection';
import ViewPostpaidPlans from './Pages/postpaid/ViewPostpaidPlans';
import PrepaidtoPostpaid from './Pages/postpaid/PrepaidtoPostpaid';
import PayBroadband from './Pages/Broadband/PayBroadband';
import Availablepack from './Pages/PrePaid/AvailablePack';
import Payment from './Pages/PaymentGateWay/Payment';
import BillSummary from './Pages/PrePaid/BillSummary/BillSummary';
import BroadbandNewConnection from './Pages/Broadband/BroadbandNewConnection';
import ViewBroadBandPlan from './Pages/Broadband/ViewBroadBandPlan';
import Login from './Pages/Login/Login';
import Header2 from './Conponent/Header2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Prepaid from './Pages/PrePaid/Prepaid';
import Postpaid from './Pages/postpaid/Postpaid';
import Roaming from './Pages/Roaming/Roaming';
import Topup from './Pages/Topup/Topup';
import DataBundles from './Pages/DataBundles/DataBundles';
import SpecialAndOffer from './Pages/SpecialAndOffer/SpecialAndOffer';
import MyNeotel from './Pages/MyNeotel/MyNeotel';
import MyAccountSection from './Pages/MYAccountSection/MyAccountSection';
import ConnectUS from './Pages/Connect Us/ConnectUS';
import PostpaidRecharge from './Pages/postpaid/PostpaidRecharge';
import NewDatabundles from './Pages/DataBundles/NewDatabundles';
import InternationalRoaming from './Pages/Roaming/InternationalRoaming';
import PacificRoaming from './Pages/Roaming/PacificRoming';
import DataPromotions from './Pages/SpecialAndOffer/DataPromotions';
import Promotions from './Pages/SpecialAndOffer/Promotions';
import DeviceSpecials from './Pages/SpecialAndOffer/DeviceSpecials';
import Specials from './Pages/SpecialAndOffer/Specials';
import NeotelBussiness from './Pages/Neotel Bussiness/NeotelBussiness';
import ManagesSDWAN from './Pages/Neotel Bussiness/ManagesSDWAN';
import ISOC from './Pages/Neotel Bussiness/ISOC';
import IPLC from './Pages/Neotel Bussiness/IPLC';
import Colocation from './Pages/Neotel Bussiness/Colocation';
import CorporatePostpaid from './Pages/Neotel Bussiness/CorporatePostpaid';
import DedicatedIternate from './Pages/Neotel Bussiness/DedicatedInternate';
import StoreLocatore from './Pages/Store Locator/StoreLocator';
import PrepaidFaq from './Pages/FAQ/PrepaidFaq';
import PostpaidFaq from './Pages/FAQ/PostpaidFaq';
import DataBundlesFaq from './Pages/FAQ/DataBundlesFaq';
import RoamingFaq from './Pages/FAQ/RoamingFaq';
import Brand from './Pages/Brand/Brand';
import Partners from './Pages/Partners/Partners';
import ManagemntTeam from './Pages/Management Team/ManagementTeam';
import Career from './Pages/Career/Career';
import PressRelease from './Pages/Press Release/PressRelease';
import WhoWeAre from './Pages/Who we are/WhoWeAre';
import CorporateResponsibility from './Pages/Coroprate Resonsibity/CorporateResponsiblity';
import TermsAndConditions from './Pages/T & C/TermsAndConditon';
import PrivacyPolicy from './Pages/Privacy Policy/PrivacyPolicy';
import ManageAccount from './Pages/ManageAccount/ManageAccount';
import JobForm from './Pages/Career/JobForm';
import CardDetails from './Pages/Topup/CardDetails';
import Test from './Pages/Sitemap';
import Sitemap from './Pages/Sitemap';
import Broadband from './Pages/Broadband/Broadband';
import Esim from './Pages/Esim/Esim';
import TouristSim from './Pages/Esim/TouristSIM';
import GeneralFaq from './Pages/FAQ/GeneralFaq';
import AboutUs from './Pages/AboutUs/AboutUs';
import ValuePlan from "./Pages/ValuePlans/Valueplan";
import Services from './Pages/Services/Services';
import Finalpaymnet from './Pages/Payment/Finalpayment';
import CallBackPage from './Pages/Payment/CallBackPage';
// import Services from './Pages/Services/Services';

function App() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/Voip/Neotel_1.2.59_IMS.apk') {
      handleDownload();
    }
  }, [location]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Neotel_1.2.59_IMS.apk'; // File should be in the public folder
    link.download = 'Neotel_1.2.59_IMS.apk'; // File name to save as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  const noHeaderFooterPaths = [
    '/postpaid/display-image',
    '/billSummary'
  ];

  // List of paths where only footer should not be displayed
  const noFooterPaths = [
    '/postpaid/pay-bill',
    '/postpaid/display-image',
    '/broadband/pay-bill-/-recharge',
    '/availablePack',
    '/billSummary',
    '/broadband/buy-new-connection',
  ];

  return (
    <>
      {location.pathname === '/topup' ? (
        <HeaderPay cart={[]} />  // Pass the cart prop as needed
      ) : (
        !noHeaderFooterPaths.includes(location.pathname) && <Header2 />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/help-at-hand/contact-us" element={<Contact />} />
        <Route path="/quick-access/site-map" element={<Sitemap />} />

        <Route path="/quick-access/prepaid" element={<Prepaid />} />
        <Route path="/prepaid/recharge" element={<PrepaidRecharge />} />
        <Route path="/prepaid/new-prepaid-sim" element={<NewPrepaidSim />} />
        <Route path="/prepaid/view-plans" element={<ViewPlans />} />
        <Route path="/prepaid/switch-prepaid-to-postpaid" element={<SwitchPrepaidToPostpaid />} />
        <Route path="/postpaid/pay-bill" element={<PayBill />} />
        <Route path="/postpaid/display-image" element={<DisplayImage />} />
        <Route path="/quick-access/postpaid" element={<Postpaid />} />
        <Route path="/postpaid/buy-new-connection" element={<NewPostpaidConnection />} />
        <Route path="/postpaid/view-plans" element={<ViewPostpaidPlans />} />
        <Route path="/postpaid/recharge" element={<PostpaidRecharge />} />
        <Route path="/databundles/payandRecharge" element={<NewDatabundles />} />
        <Route path="/broadband" element={<Broadband />} />
        <Route path="/Esim" element={<Esim />} />
        <Route path="/touristSim" element={<TouristSim />} />
        <Route path="/postpaid/port-to-neotel" element={<NewPostpaidConnection />} />
        <Route path="/postpaid/switch-prepaid-to-postpaid" element={<PrepaidtoPostpaid />} />
        <Route path="/broadband/pay-bill-/-recharge" element={<PayBroadband />} />
        <Route path="/broadband/buy-new-connection" element={<BroadbandNewConnection />} />
        <Route path="/availablePack" element={<Availablepack />} />
        <Route path="/finalPayment" element={<Payment />} />
        <Route path="/broadband/view-plans" element={<ViewBroadBandPlan />} />
        <Route path="/register" element={<Login />} />
        <Route path="/quick-access/my-neotel" element={<Login />} />
        <Route path="/cardDetails" element={<CardDetails />} />
        <Route path="/roaming" element={<Roaming />} />
        <Route path="/topup" element={<Topup />} />
        <Route path="/prepaid" element={<Prepaid />} />
        <Route path="/postpaid" element={<Postpaid />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/deviceSpecials" element={<DeviceSpecials />} />
        <Route path="/about-company/partners" element={<Partners />} />
        <Route path="/quick-access/neotel-business" element={<NeotelBussiness />} />
        <Route path="/about-company/aboutus" element={<AboutUs />} />
        <Route path="about-company/management-team" element={<ManagemntTeam />} />
        <Route path="/about-company/careers" element={<Career />} />
        <Route path="/about-company/careers/jobForm" element={<JobForm />} />
        <Route path="/about-company/press-release" element={<PressRelease />} />
        <Route path="/about-company/who-we-are" element={<WhoWeAre />} />
        <Route path="/about-company/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/help-at-hand/manage-your-account" element={<ManageAccount />} />
        <Route path="/about-company/corporate-responsibility" element={<CorporateResponsibility />} />
        <Route path="/neotelBussiness" element={<NeotelBussiness />} />
        <Route path="/mangesSDWAN" element={<ManagesSDWAN />} />
        <Route path="/isoc" element={<ISOC />} />
        <Route path="/iplc" element={<IPLC />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/help-at-hand/post-paid-faq's" element={<PostpaidFaq />} />
        <Route path="/help-at-hand/general-faq's" element={<GeneralFaq />} />
        <Route path="/help-at-hand/data-bundles-faq's" element={<DataBundlesFaq />} />
        <Route path="/help-at-hand/roaming-faq's" element={<RoamingFaq />} />
        <Route path="/about-company/brand" element={<Brand />} />
        <Route path="/help-at-hand/prepaid-faq's" element={<PrepaidFaq />} />
        <Route path="/help-at-hand/store-locator" element={<StoreLocatore />} />
        <Route path="/colocation" element={<Colocation />} />
        <Route path="/corporatePostpaid" element={<CorporatePostpaid />} />
        <Route path="/dedicatedInternate" element={<DedicatedIternate />} />
        <Route path="/dataPromotions" element={<DataPromotions />} />
        <Route path="/quick-access/roaming" element={<PacificRoaming />} />
        <Route path="/internationalRoaming" element={<InternationalRoaming />} />
        <Route path="/quick-access/data-bundles" element={<DataBundles />} />
        <Route path="/quick-access/special-offers" element={<SpecialAndOffer />} />
        <Route path="/myNeotel" element={<MyNeotel />} />
        <Route path="/connectUS" element={<ConnectUS />} />
        {/* <Route path="/services" element={< Services/>} /> */}
        <Route path="/myAccountSection" element={<MyAccountSection />} />
        <Route path="/about-company/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/Voip/Neotel_1.2.59_IMS.apk" element={<Navigate to="/" replace />} />
        <Route path="/services" element={<Services />} />
        <Route path="/buy" element={<Finalpaymnet />} />
        <Route path="/callbackstatus/topup" element={<CallBackPage />} />
        <Route path="/callbackstatus/bundle" element={<CallBackPage />} />
      </Routes>
      {!noFooterPaths.includes(location.pathname) && <Footer1 />}
    </>
  );
}

export default App;
