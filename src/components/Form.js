import FormGroup from "./Bootstrap/FormGroup";
import AwardList from "./Form/Awards/AwardList";
import EducationList from "./Form/Education/EducationList";
import ExperienceList from "./Form/Experience/ExperienceList";
import InterestList from "./Form/Interests/InterestList";
import SkillsList from "./Form/Skills/SkillsList";
import '../styles/App.scss'

const Form = ({ FormData, onChange }) => {
  const Desc = {
    FullName: [
      "text",
      <h4 className="text-primary">Full Name</h4>,
      
    ],
    FirstName: [
      "text",
      <h5 className="text-primary">First Name</h5>,
      "Enter Your First Name"
    ],
    LastName: ["text", <h5 className="text-primary">Last Name</h5>, "Enter Your Last-Name or Sur-name"],
    Thubmnail: [
      "text",
      <h5 className="text-primary">Your Photo</h5>,
      "upload your photo in a CDN(Ex. Imgur) and paste the direct image URL here."
    ],
    URL: [
      "text",
      <h5 className="text-primary">Website link</h5>,
      "Enter the URL of your website"
    ],
    Description: ["text", <h5 className="text-primary">About you</h5>, "Write something about you."],
    Keywords: [
      "text",
      <h5 className="text-primary">Keywords</h5>,
      "If someone wants to search for you, what keywords should they use?"
    ],
    Address: [
      "text",
      <h5 className="text-primary">Your Full Address</h5>,
      "Enter your Full Address"
    ],
    Phone: [
      "text",
      <h5 className="text-primary">Phone Number</h5>,
      "Enter your phone number"
    ],
    Email: ["text", <h5 className="text-primary">Email Address</h5>, "Enter your Email-Address"],
    Colour: [
      "color",
      "Theme Colour",
      "Please choose the colour for your portfolio"
    ]
  };
  return (
    <div className="Form">
      <h1 style={{color:'#143b64'}} className="mb-4">Basic Info</h1>
      {Object.keys(FormData).map(
        fd =>
          Object.keys(Desc).includes(fd) && (
            <FormGroup
              key={fd}
              Label={Desc[fd][1]}
              Type={Desc[fd][0]}
              Id={fd}
              Desc={Desc[fd][2]}
              Value={FormData[fd]}
              Placeholder={`Enter the details`}
              onChange={fd === "FullName" ? () => {} : onChange}
              readOnly={fd === "FullName" ? true : undefined}
              className='shadow'
            />
          )
      )}
      <h3 className="text-primary">Experience</h3>
      <ExperienceList />
      <h3 className="text-primary">Education</h3>
      <EducationList />
      <h3 className="text-primary">Skills</h3>
      <SkillsList />
      <h3 className="text-primary">Interests</h3>
      <InterestList />
      <h3 className="text-primary">Awards</h3>
      <AwardList />
    </div>
  );
};

export default Form;
