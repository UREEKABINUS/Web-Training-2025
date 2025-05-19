import { NavbarDemo } from "@/components/ui/navbar";
export default function contact() {
  return (
    <div className="bg-neutral-700 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <NavbarDemo />
      <h1 className="mt-50 text-grey-300 text-4xl font-bold text-center">
        Contact <span className="text-blue-500">Sesi 2</span>
      </h1>
      <p className="text-gray-300 text-lg text-center">
        This is the contact page for Sesi 2. Here you can find information about
        the project and its features.
      </p>
    </div>
  );
}
