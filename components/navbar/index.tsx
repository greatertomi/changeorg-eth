import Button from "@components/common/button";

const Navbar = () => {
  return (
    <nav className="flex justify-between border-gray-200 p-3 border-b-2">
      <div className="text-3xl font-bold text-red-700">change.org</div>
      <div>
        <Button>Connect</Button>
      </div>
    </nav>
  );
};

export default Navbar;
