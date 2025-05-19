type SearchFormProps = {
  searchText: string;
  setSearchText: (searchText: string) => void;
  // setSearchText: React.Dispatch<React.SetStateAction<string>>;
};
export default function SearchForm({
  searchText,
  setSearchText,
}: SearchFormProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      action='#'
      className='search'
    >
      <button type='submit'>
        <i className='fa-solid fa-magnifying-glass'></i>
      </button>

      <input
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        spellCheck='false'
        type='text'
        required
        placeholder='Find remote developer jobs...'
      />
    </form>
  );
}
