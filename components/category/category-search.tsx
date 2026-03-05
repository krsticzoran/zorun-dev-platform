import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function CategorySearch() {
  return (
    <div className="relative w-full max-w-xs">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2  text-custom-dark-gray" />
      <Input
        type="search"
        placeholder="Pronadji članak..."
        className="pl-9 text-custom-dark-gray"
      />
    </div>
  );
}
