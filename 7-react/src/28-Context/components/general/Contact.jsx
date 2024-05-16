import useTheme from "../../hooks/useTheme";

export default function Contact() {
  const theme = useTheme();

  return (
    <div className="content box" style={theme}>
      <h2>Contact Page</h2>
      <p>
        Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam
        suscipit neque ratione maiores accusamus beatae, debitis, exercitationem
        est nesciunt necessitatibus animi sint itaque ex veniam officia ut
        nostrum pariatur! ius veniam nemo. Dignissimos a explicabo quis!
      </p>
    </div>
  );
}
