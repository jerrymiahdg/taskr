"use client";

export default function Home() {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="p-5">
      <form
        className="flex p-5 w-full shadow-xl rounded bg-blue-900 flex-col gap-10"
        onSubmit={submitHandler}
      >
        <h1 className="font-bold text-3xl">create task</h1>
        <div className="flex flex-col gap-5">
          <input className="p-2 rounded " placeholder="name" />
          <input className="p-2 rounded " placeholder="description" />
          <button
            type="submit"
            className="text-left border border-white/50 p-2 rounded bg-white/10"
          >
            create
          </button>
        </div>
      </form>
    </div>
  );
}
