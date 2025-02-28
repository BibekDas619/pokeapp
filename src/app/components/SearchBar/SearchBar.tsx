import { ISearchBar } from "@/app/utils/interfaces";

const SearchBar: React.FC<ISearchBar> = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search Pokémon..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full p-2 mb-4 text-black rounded-md"
    />
  );
};

export default SearchBar;
