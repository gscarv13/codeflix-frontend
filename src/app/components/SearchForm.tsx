import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';

type SearchFormProps = {
  searchTerm: string;
  onSearchTermChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (event: React.FormEvent<HTMLFormElement>) => void;
};

export const SearchForm: React.FC<SearchFormProps> = ({
  searchTerm,
  onSearchTermChange,
  onSearch,
}) => {
  return (
    <form onSubmit={onSearch} className='flex items-center space-x-2'>
      <button type='submit' className='hidden cursor-pointer md:inline'>
        <MagnifyingGlassIcon className='h-6 w-6 text-gray-400' />
      </button>

      <input
        type='search'
        name='search'
        id='search'
        placeholder='Search...'
        value={searchTerm}
        onChange={onSearchTermChange}
        className='bg-transparent text-white placeholder-white outline-none'
      />
    </form>
  );
};
