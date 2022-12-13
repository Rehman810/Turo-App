import "./App.css";
import { Banner, Head, Image } from "./components/banner";
import { Search } from "./components/search";
import { Body } from "./components/body";
import { ACustomArrows } from "./components/slider";
import Slider from "react-slick";
import { Poster } from "./components/poster";
import { ImageToggleOnMouseOver, MeetHost } from "./components/destination";
import { Button } from "antd";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

function App() {
  return (
    <div className="App">
      <Banner />
      <Head />
      {/* <Image className="img" /> */}
      <div className="bg">
        <Search />
      </div>

      <Body />
      <ACustomArrows />
      <br />
      <br />
      <div className="sliderposter">
        <Slider {...settings}>
          <div>
            <Poster
              hh={"Find the perfect car "}
              span={"to conquer the great outdoors"}
              src={
                "https://resources.turo.com/f/81934/416x284/6e085cbe0e/image_outdoors_416x285.jpg"
              }
              para={
                "Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees."
              }
            ></Poster>
          </div>
          <div>
            <Poster
              hh={"Find the perfect car "}
              span={"to upgrade your vacation plans"}
              src={
                "https://resources.turo.com/f/81934/416x284/7c424a07d5/image_unwind_416x285.jpg"
              }
              para={
                "Skip the rental car counter and find the perfect car to complement your vacation vibe."
              }
            ></Poster>
          </div>
          <div>
            <Poster
              hh={"Find the perfect car "}
              span={"for scenic corners & curves"}
              src={
                "https://resources.turo.com/f/81934/416x284/1e828ae782/image_scenic_416x285.jpg"
              }
              para={
                "Get your fill of high-performance thrills, with the richest selection of luxury and exotic vehicles anywhere."
              }
            ></Poster>
          </div>
          <div>
            <Poster
              hh={"Find the perfect car "}
              span={"to try before you buy"}
              src={
                "https://resources.turo.com/f/81934/416x284/a3870434ac/image_try_416x285.jpg"
              }
              para={
                "Make sure your future wheels work well with your lifestyle by taking your time in the driver’s seat."
              }
            ></Poster>
          </div>
          <div>
            <Poster
              hh={"Find the perfect car "}
              span={"to make errand day easier"}
              src={
                "https://resources.turo.com/f/81934/416x284/fa43ee8e2b/image_errand_416x285.jpg"
              }
              para={
                "Book a roomy truck or SUV to ease your errand day stress, or to motivate your moving day."
              }
            ></Poster>
          </div>
        </Slider>
      </div>
      <div className="slider">
        <Slider {...detSettings}>
          <div className="ss">
            <ImageToggleOnMouseOver
              primaryImg={
                "https://resources.turo.com/f/81934/240x240/7825448638/illo_city_losangeles-2x.png"
              }
              secondaryImg={
                "https://resources.turo.com/f/81934/240x240/76b4007676/illo_city_losangeles_hover-2x.png"
              }
              alt="Los Angeles"
              named="Los Angeles"
            />
          </div>
          <div className="ss">
            <ImageToggleOnMouseOver
              primaryImg={
                "https://resources.turo.com/f/81934/240x240/dcae922a23/illo_city_miami-2x.png"
              }
              secondaryImg={
                "https://resources.turo.com/f/81934/240x240/ebf31d579f/illo_city_miami_hover-2x.png"
              }
              alt="Miami"
              named="Miami"
            />
          </div>
          <div className="ss">
            <ImageToggleOnMouseOver
              primaryImg={
                "https://resources.turo.com/f/81934/240x240/bbe188de38/illo_city_honolulu-2x.png"
              }
              secondaryImg={
                "https://resources.turo.com/f/81934/240x240/ee089eef85/illo_city_honolulu_hover-2x.png"
              }
              alt="Honolulu"
              named="Honolulu"
            />
          </div>
          <div className="ss">
            <ImageToggleOnMouseOver
              primaryImg={
                "https://resources.turo.com/f/81934/240x240/81f82e7068/illo_city_denver-2x.png"
              }
              secondaryImg={
                "https://resources.turo.com/f/81934/240x240/8b414f123e/illo_city_denver_hover-2x.png"
              }
              alt="Denver"
              named="Denver"
            />
          </div>
          <div className="ss">
            <ImageToggleOnMouseOver
              primaryImg={
                "https://resources.turo.com/f/81934/240x240/1442627566/illo_city_london-2x.png"
              }
              secondaryImg={
                "https://resources.turo.com/f/81934/240x240/957c774400/illo_city_london_hover-2x.png"
              }
              alt="London"
              named="London"
            />
          </div>
          <div className="ss">
            <ImageToggleOnMouseOver
              primaryImg={
                "https://resources.turo.com/f/81934/240x240/87ab56dd05/illo_city_toronto-2x.png"
              }
              secondaryImg={
                "https://resources.turo.com/f/81934/240x240/f40b3c1e95/illo_city_toronto_hover-2x.png"
              }
              alt="Toronto"
              named="Toronto"
            />
          </div>
          <div className="ss">
            <ImageToggleOnMouseOver
              primaryImg={
                "https://resources.turo.com/f/81934/240x240/101ea2791a/illo_city_jerseycity-2x.png"
              }
              secondaryImg={
                "https://resources.turo.com/f/81934/240x240/8a4598d799/illo_city_jerseycity_hover-2x.png"
              }
              alt="Jersey City"
              named="Jersey City"
            />
          </div>
          <div className="ss">
            <ImageToggleOnMouseOver
              primaryImg={
                "https://resources.turo.com/f/81934/240x240/c00858690e/illo_city_sanfrancisco-2x.png"
              }
              secondaryImg={
                "https://resources.turo.com/f/81934/240x240/3f9757ed81/illo_city_sanfrancisco_hover-2x.png"
              }
              alt="San Francisco"
              named="San Francisco"
            />
          </div>
          <div className="ss">
            <ImageToggleOnMouseOver
              primaryImg={
                "https://resources.turo.com/f/81934/240x240/a49b80f1ba/illo_city_atlanta-2x.png"
              }
              secondaryImg={
                "https://resources.turo.com/f/81934/240x240/1a1efd8d1e/illo_city_atlanta_hover-2x.png"
              }
              alt="Atlanta"
              named="Atlanta"
            />
          </div>
          <div className="ss">
            <ImageToggleOnMouseOver
              primaryImg={
                "https://resources.turo.com/f/81934/240x240/af92b78ef2/illo_city_phoenix-2x.png"
              }
              secondaryImg={
                "https://resources.turo.com/f/81934/240x240/b20a87cb5f/illo_city_phoenix_hover-2x.png"
              }
              alt="Phoenix"
              named="Phoenix"
            />
          </div>
          <div className="ss">
            <ImageToggleOnMouseOver
              primaryImg={
                "https://resources.turo.com/f/81934/240x240/fba7dae74f/illo_city_orlando-2x.png"
              }
              secondaryImg={
                "https://resources.turo.com/f/81934/240x240/48caa5117b/illo_city_orlando_hover-2x.png"
              }
              alt="Orlando"
              named="Orlando"
            />
          </div>
          <ImageToggleOnMouseOver
            primaryImg={
              "https://resources.turo.com/f/81934/240x240/184058bb96/illo_city_lasvegas-2x.png"
            }
            secondaryImg={
              "https://resources.turo.com/f/81934/240x240/c2abf3de26/illo_city_lasvegas_hover-2x.png"
            }
            alt="Las Vegas"
            named="Las Vegas"
          />
        </Slider>
      </div>
      <div className="picture">
        <p className="fuel">Fuel your daydreams</p>
        <p>
          Stoke your wanderlust with some dreamy photo chronicles of road trip
          adventures.
        </p>
        <Button type="primary">Exlpore Travelogues</Button>
        <div className="feature">
          <img
            src="https://blog.turo.com/blog/wp-content/uploads/2021/04/Kyle_Engman_21-copy-2_lesssmall.jpg"
            alt="lessmall"
            className="lessmall"
          />
          <div className="readmore">
            <p className="featureh">FEATURED TRAVELOGUE</p>
            <p className="featureh1">An Olympic experience in Washington</p>
            <p className="featurep">
              Discover the epic waterfalls, moody weather, and lush forests of
              coastal Washington.
            </p>
            <a className="featurea" href="#">
              Read more
            </a>
          </div>
        </div>
      </div>
      <div className="browsebyexperinence">
        <h1 className="browse">Browse by experience</h1>
        <Slider {...settingsexperience}>
          <div className="expdiv">
            <img
              className="slideImg"
              src="https://resources.turo.com/f/81934/328x262/8e60a37cc1/image_experience_electric.jpg"
            />
            <p className="browse-p">Electric</p>
          </div>
          <div className="expdiv">
            <img
              className="slideImg"
              src="https://resources.turo.com/f/81934/328x262/1d0c1a5bd7/image_experience_deluxesuperdeluxe.jpg"
            />
            <p className="browse-p">Deluxe and Super Deluxe</p>
          </div>
          <div className="expdiv">
            <img
              className="slideImg"
              src="https://resources.turo.com/f/81934/328x262/0d5b069ff2/image_experience_petfriendly.jpg"
            />
            <p className="browse-p">Pet-Friendly</p>
          </div>
          <div className="expdiv">
            <img
              className="slideImg"
              src="https://resources.turo.com/f/81934/328x262/61e1aebed5/image_experience_convertibles.jpg"
            />
            <p className="browse-p">Convertibles</p>
          </div>
          <div className="expdiv">
            <img
              className="slideImg"
              src="https://resources.turo.com/f/81934/328x262/6a22a954a4/image_experience_allwheeldrive.jpg"
            />
            <p className="browse-p">All-wheel drive</p>
          </div>
          <div className="expdiv">
            <img
              className="slideImg"
              src="https://resources.turo.com/f/81934/328x262/294b8f8aec/image_experience_classiccars.jpg"
            />
            <p className="browse-p">Classic cars</p>
          </div>
        </Slider>
      </div>
      <div className="Host">
        <p className="fuel">Meet the hosts</p>
        <h1 className="browse">Top hosts on Turo</h1>
        <Slider {...settingsexperience}>
          <div className="expdiv">
            <MeetHost
              src={
                "https://images.turo.com/media/driver/edc4lzlWTHGwKOpT3WF4Og.160x160.jpg"
              }
              nameh={"Kelvin M."}
              trip={"492 trips"}
              joined={"2014"}
              review={
                "He came thru for us at the last minute(I was literally on the plane when I got a call that my car from a rental agency was cancelled."
              }
            ></MeetHost>
          </div>
          <div className="expdiv">
            <MeetHost
              src={
                "https://images.turo.com/media/driver/ilzDqc7oT7mtsDWlsxeKlQ.160x160.jpg"
              }
              nameh={"Phu L."}
              trip={"116 trips"}
              joined={"2022"}
              review={"Awesome car and host!!!"}
            ></MeetHost>
          </div>
          <div className="expdiv">
            <MeetHost
              src={
                "https://images.turo.com/media/driver/kFR_K6gDQ4ivXlIQXyaC-w.160x160.jpg"
              }
              nameh={"Mohammad A."}
              trip={"1085 trips"}
              joined={"2015"}
              review={"The car was in great condition and drove very well."}
            ></MeetHost>
          </div>
          <div className="expdiv">
            <MeetHost
              src={
                "https://images.turo.com/media/driver/f_VkwIWpQ-WIMrha_oRisQ.160x160.jpg"
              }
              nameh={"Derrick H."}
              trip={"1132 trips"}
              joined={"2017"}
              review={"Best Service!"}
            ></MeetHost>
          </div>
        </Slider>
      </div>
      <div className="footer">
        <div className="services">
          <div className="first">
            <div className="c1">
              <ul>
                <h1 className="footerh1">Turo</h1>
                <li>About</li>
                <li>Team</li>
                <li>Policies</li>
                <li>Carrers</li>
                <li>Press</li>
                <li>Open Road</li>
                <li>Turo Shop</li>
              </ul>
            </div>
            <div className="c1">
              <ul>
                <h1 className="footerh1">Locations</h1>
                <li>USA</li>
                <li>Canada</li>
                <li>UK</li>
                <li>Germany</li>
              </ul>
            </div>
            <div className="c1">
              <ul>
                <h1 className="footerh1">Explore</h1>
                <li>Book a car</li>
                <li>Weddings</li>
                <li>Trust</li>
                <li>Safety</li>
                <li>Get Help</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div className="c1">
              <ul>
                <h1 className="footerh1">Hosting</h1>
                <li>List your car</li>
                <li>Calculator</li>
                <li>All-Star Host</li>
                <li>Host Tools</li>
                <li>Insurance and Protection</li>
                <li>FAQs</li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="second">
            <div className="c1">
              <ul>
                <h1 className="footerh1">Vehicles Types</h1>
                <li>Trucks</li>
                <li>Vans</li>
                <li>Sports</li>
                <li>Classis</li>
                <li>Heavy</li>
              </ul>
            </div>
            <div className="c1">
              <ul>
                <h1 className="footerh1">Makes</h1>
                <li>Tesla</li>
                <li>Lamborghini</li>
                <li>Jeep</li>
                <li>Rolls-Royce</li>
                <li>Mercedes-Benz</li>
                <li>Ferrari</li>
                <li>BMW</li>
              </ul>
            </div>
            <div className="c1">
              <ul>
                <h1 className="footerh1">Top Cities</h1>
                <li>Atlanta</li>
                <li>Bostin</li>
                <li>Buston</li>
                <li>Charlotte</li>
                <li>Chicago</li>
                <li>Dallas</li>
                <li>DEnver</li>
              </ul>
            </div>
            <div className="c1">
              <ul>
                <h1 className="footerh1"></h1>
                <li>Jersey City</li>
                <li>Las Vegas</li>
                <li>London</li>
                <li>Los Angeles</li>
                <li>Miamai</li>
                <li>Toronto</li>
                <li>Washington DC</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="store">
          <BsFacebook />
          <BsInstagram />
          <BsTwitter />
          <BsYoutube />
        </div> */}
      </div>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const settingsexperience = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const settingshost = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const detSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default App;
