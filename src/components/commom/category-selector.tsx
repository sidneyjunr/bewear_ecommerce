import React from "react";

import { categoryTable } from "@/db/schema";

import { Button } from "../ui/button";

interface CategorySelectorProps {
  categories: (typeof categoryTable.$inferSelect)[];
}

const CategorySelector = ({ categories }: CategorySelectorProps) => {
  return (
    <div className="rounded-3xl bg-[#f4EFFF] p-6">
      <div className="grid grid-cols-2 gap-3">
        {categories.map((category) => (
          <Button key={category.id} variant={"ghost"} className="bg-white font-semibold text-xs rounded-full">
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
