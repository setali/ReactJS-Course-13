export default async function User ({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  )
  const user = await res.json()

  return (
    <div>
      <h2>{user.name}</h2>
    </div>
  )
}
