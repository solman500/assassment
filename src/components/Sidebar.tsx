import { Button } from "@/components/ui/button";
import asidelinks from "@/constent/asideLinks";

export default function Sidebar() {
  return (
    <aside className="w-72 h-full p-4 md:p-6 bg-[#F2F6FF] rounded-lg my-2 ">
      <nav>
        <div className="flex flex-col gap-2 lg:gap-6">
          {asidelinks.map((link) => (
            <Button
              key={link.translationKey}
              variant={"secondary"}
              className="w-full justify-start hover:bg-gray-300 cursor-pointer 
                py-3 lg:py-6 text-sm md:text-base lg:text-lg font-semibold"
            >
              {link.translationKey}
            </Button>
          ))}
        </div>
      </nav>
    </aside>
  );
}
