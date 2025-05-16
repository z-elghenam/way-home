import { toast } from "sonner";

function SignOutLink() {
  const handleLogout = () => {
    toast("You have been signed out.");
  };

  return (
    <button className="w-full text-left" onClick={handleLogout}>
      logout
    </button>
  );
}

export default SignOutLink;
