import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { HolidayContextProvider } from "./context/holidayContext";
import { ImgContextProvider } from "./context/imgContext";
import { TextContextProvider } from "./context/textContext";

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
};

const App = () => {
  return (
    <div style={wrapper}>
      <HolidayContextProvider>
        <ImgContextProvider>
          <TextContextProvider>
              <Header />
              <Card />
              <Footer />
          </TextContextProvider>
        </ImgContextProvider>
      </HolidayContextProvider>
    </div>
  );
}

export default App;
