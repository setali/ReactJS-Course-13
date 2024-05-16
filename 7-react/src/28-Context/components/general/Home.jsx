import useUser from "../../hooks/useUser";
import useTheme from "../../hooks/useTheme";

export default function Home() {
  const theme = useTheme();
  const { isLoggedIn, user } = useUser();

  return (
    <div className="content box" style={theme}>
      <h2>HomePage</h2>
      {isLoggedIn && <p>Welcome {user.name}</p>}
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem quis
        obcaecati a sint sequi neque, alias amet modi odio id reiciendis quo
        porro eius veniam nemo. Dignissimos a explicabo quis!
      </p>
    </div>
  );
}
