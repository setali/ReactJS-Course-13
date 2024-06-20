import Main from '../layouts/Main'

export default function About () {
  const color = 'aqua'

  return (
    <Main>
      <h2>About Page</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam iste
        explicabo nisi delectus repellendus fugit est, accusantium
        necessitatibus quo, laborum neque officia dolores unde culpa error
        dolorem non vero qui!
      </p>
      <style jsx>{`
        h2 {
          color: red;
        }
        p {
          color: ${color};
          padding: 1rem;
        }
      `}</style>
    </Main>
  )
}
