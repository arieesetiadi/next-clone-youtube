export default function SearchBar() {
    return (
        <form className="flex w-96">
            <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-full rounded-full rounded-br-none rounded-tr-none focus:border-blue-500"
            />

            <button type="button" className="btn rounded-full rounded-bl-none rounded-tl-none px-5">
                <img src="/images/icons/search.svg" alt="Search Icon" />
            </button>
        </form>
    );
}
