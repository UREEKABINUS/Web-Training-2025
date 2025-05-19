import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";

export default function about() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <h1 className="text-4xl font-bold text-center">
        About <span className="text-blue-500">Sesi 2</span>
      </h1>
      <p className="text-lg text-center">This is the about page for Sesi 2.</p>
      <Button variant="outline" className="w-1/2">
        Learn More
      </Button>
    </div>
  );
}
