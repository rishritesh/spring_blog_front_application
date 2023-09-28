import userContext from "../context/userContext";
import Base from "../components/Base";

const About = () => {
  return (
    <userContext.Consumer>
      {(object) => (
        <Base>

          {console.log(object)}
          <div className="container">
            <h1>Welcome : {object.user.login && object.user.data.name}</h1>
            <p>Welcome to our Blog Application!

              At our Blog Application, we strive to create a vibrant community where writers, enthusiasts, and knowledge seekers can come together to share their thoughts and ideas on a wide range of topics. Whether you're passionate about technology, fashion, food, travel, or anything else under the sun, this is the perfect platform for you to express yourself and engage in meaningful discussions with like-minded individuals.</p>
          </div>
        </Base>
      )}
    </userContext.Consumer>
  );
};

export default About;
