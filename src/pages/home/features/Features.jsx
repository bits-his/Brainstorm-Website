import "./features.css";

function Features(props) {
  return (
    <div class="col-lg-4  data-aos=">
      <div class="feature text-center">
        <div class="icon">{props.icon}</div>
        <h3>{props.title}</h3>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.{" "}
        </p>
      </div>
    </div>
  );
}

export default Features;
