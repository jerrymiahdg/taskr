import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex justify-between p-5 gap-5 items-center">
      <Link className="font-bold text-7xl" href="/">
        taskr
      </Link>
      <div className="flex gap-5">
        <Link href="create-task">create a task</Link>
      </div>
    </div>
  );
}
