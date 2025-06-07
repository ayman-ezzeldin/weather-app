import Sidebar from "./_components/Sidebar";;

export default function Home() {
  return (
    <div className=" max-h-screen overflow-hidden font-semibold selection:bg-gray-200 selection:text-gray-900 dark:bg-gray-900/40 text-gray-100 dark:text-gray-300">
      <Sidebar />
    </div>
  );
}
