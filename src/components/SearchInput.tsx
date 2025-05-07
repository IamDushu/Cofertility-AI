import { redirect } from "next/navigation";

function SearchInput() {
  async function searchAction(formData: FormData) {
    "use server";

    const searchTerm = formData.get("searchTerm") as string;

    redirect(`/search/${searchTerm}`);
  }

  return (
    <form
      action={searchAction}
      className="w-full flex items-center px-5 rounded-full shadow-lg"
    >
      <input
        type="text"
        className="flex-1 p-5 outline-none"
        name="searchTerm"
        placeholder="What type of donors are you looking for? e.g. Donors who like hiking and have wavy hair"
      />
    </form>
  );
}

export default SearchInput;
