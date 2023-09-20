import { Repo } from "@/components/Repo";
import { User } from "@/components/User";
import { useRouter } from "next/router";

export default function Dashboard() {
  return (
    <div>
      <User />
      <Repo />
    </div>
  );
}
