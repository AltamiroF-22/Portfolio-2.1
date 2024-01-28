//styles
import "./Loading.sass";

//componets
import TextEffect from "../textEffect/TextEffect";

const Loading = () => {
  return (
    <div className="loading">
      <TextEffect
        text1="loading..."
        fontSize="Size16"
        fontWeigth="W700"
        color="lightGray"
        cursor="CN"
      />
      <TextEffect
        text1="Junior.rx22"
        fontSize="Size24"
        fontWeigth="W700"
        color="lightGray"
        cursor="CN"
      />
    </div>
  );
};

export default Loading;
