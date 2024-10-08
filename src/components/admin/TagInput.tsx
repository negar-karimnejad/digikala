import { X } from "lucide-react";
import React, { ChangeEvent, KeyboardEvent, useState } from "react";

interface TagInputProps {
  tags: string[];
  onTagsChange: (tags: string[]) => void;
  placeholder?: string;
}

const TagInput: React.FC<TagInputProps> = ({
  tags,
  onTagsChange,
  placeholder,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(inputValue);
    }
  };

  const addTag = (tag: string) => {
    if (tag && !tags.includes(tag)) {
      onTagsChange([...tags, tag]);
      setInputValue("");
    }
  };

  const removeTag = (tag: string) => {
    onTagsChange(tags.filter((t) => t !== tag));
  };

  return (
    <div className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-neutral-300 bg-neutral-50 px-2.5 pb-2.5 pt-5 text-sm text-neutral-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:bg-neutral-900 dark:text-white dark:focus:border-blue-500">
      <div className="flex flex-wrap items-center gap-2">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="bg-neutral-200 dark:bg-neutral-700 rounded-md p-2 flex items-center"
          >
            {tag}
            <button
              type="button"
              onClick={() => removeTag(tag)}
              className="mr-4 cursor-pointer text-red-500 bg-none border-none font-irsansb"
            >
              <X size={13} />
            </button>
          </div>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="border-none bg-transparent outline-none p-3"
        />
      </div>
    </div>
  );
};

export default TagInput;
