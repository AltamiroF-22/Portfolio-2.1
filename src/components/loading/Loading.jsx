//styles
import "./Loading.sass";

//componets
import TextEffect from "../textEffect/TextEffect";

const Loading = () => {
  return (
    <div className="loading">
      <TextEffect
        text1="loading..."
        fontSize="Size24"
        fontWeigth="W700"
        color="lightGray"
      />
      <TextEffect
        text1="Junior.rx22"
        fontSize="Size24"
        fontWeigth="W700"
        color="lightGray"
      />
    </div>
  );
};

export default Loading;
