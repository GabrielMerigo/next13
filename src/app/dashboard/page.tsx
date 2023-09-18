import Link from "next/link";

export const revalidate = 30;

export default async function Dashboard() {
  const response = await fetch("https://api.github.com/users/gabrielmerigo", {
    next: {
      revalidate: 30,
    },
  });

  const user = await response.json();

  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}
