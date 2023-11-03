import { Button } from "react-bootstrap";
import Generics from "./Generics";
import classes from "./Header.module.css";
const Home = () => {
  const tours = [
    {
      id: 1,
      date: "JUL16",
      Name: "DETROIT,MI",
      title: "DTE ENERGY MUSIC THEATRE",
    },
    {
      id: 2,
      date: "JUL19",
      Name: "TORONTO,ON",
      title: "BUDWEISER STAGE",
    },
    {
      id: 3,
      date: "JUL 22",
      Name: "BRISTOW, VA",
      title: "JIGGY LUBE LIVE",
    },
    {
      id: 4,
      date: "JUL 29",
      Name: "PHOENIX, AZ",
      title: "AK-CHIN PAVILION",
    },
    {
      id: 5,
      date: "AUG 2",
      Name: "LAS VEGAS, NV",
      title: "T-MOBILE ARENA",
    },
    {
      id: 5,
      date: "AUG 7",
      Name: "CONCORD, CA",
      title: "CONCORD PAVILION",
    },
  ];

  const showTours = tours.map((item) => {
    return (
      <div key={item.id} className={classes.showToursDiv}>
        <div>{item.date}</div>
        <div>{item.Name}</div>
        <div>{item.title}</div>
        <Button>BUY TICKET</Button>
        <hr />
      </div>
    );
  });
  return (
    <>
      <Generics />
      <div className={classes.home}>
        <div className={classes.homediv}>
          <span className={classes.homeAlbum}>Get Our Latest Album</span>
        </div>
        <span className={classes.play}>play</span>
      </div>
      <h1>TOURS</h1>
      <div>{showTours}</div>
      <div className={classes.homeGeneric}>The Generics</div>
    </>
  );
};
export default Home;
