//styles
import "./Loading.sass";

//componets
import TextEffect from "../textEffect/TextEffect";

const Loading = () => {
  return (
    <main className="loading">
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
    </main>
  );
};

export default Loading;
