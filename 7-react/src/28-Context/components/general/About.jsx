import useTheme from "../../hooks/useTheme";

export default function About() {
  const theme = useTheme();

  return (
    <div className="content box" style={theme}>
      <h2>About Page</h2>
      <p>
        Lore Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam,
        ipsa quis itaque, vero blanditiis dolore molestias, minima id porro
        deserunt vel tempora ut ipsum libero eius cupiditate repellat magnam at.
        m Lors veniam nemo. Dignissimos a explicabo quis!
      </p>
    </div>
  );
}
