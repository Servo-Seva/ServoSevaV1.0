// AccountPage.tsx
import { ThemeToggle } from "@/components/ThemeToggle";
import AuthDialog from "@/components/auth/AuthDialog";

const AccountPage = () => {
  return (
    <div className="min-h-screen bg-background p-4 pb-24">
      <h1 className="text-2xl font-semibold mb-6">Account</h1>

      {/* Login / Signup + Theme Toggle */}
      <div className="flex flex-row items-center gap-4 mb-6 flex-wrap">
        {/* Login / Signup button */}
        <AuthDialog defaultTab="signin">
          <button className="px-4 py-2 border rounded hover:bg-muted text-sm">
            Login / Signup
          </button>
        </AuthDialog>

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>

      {/* About Us */}
      <div className="max-w-md">
        <h2 className="font-medium mb-2">About Us</h2>
        <p className="text-sm text-muted-foreground">
          ServiceConnect connects users with service providers for all daily
          needs like AC repair, plumbing, home services, and more.
        </p>
      </div>
    </div>
  );
};

export default AccountPage;
