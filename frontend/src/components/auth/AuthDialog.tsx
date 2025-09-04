import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { User, Mail, Lock, Phone, Chrome } from "lucide-react";
import { toast } from "sonner";

interface AuthDialogProps {
  children: React.ReactNode;
  defaultTab?: "signin" | "signup";
  /** 🔥 Add this line */
  onOpenChange?: (open: boolean) => void;
}

const AuthDialog = ({
  children,
  defaultTab = "signin",
  onOpenChange,
}: AuthDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tab, setTab] = useState<"signin" | "signup">(defaultTab);

  // Reset tab whenever dialog opens
  useEffect(() => {
    if (isOpen) {
      setTab(defaultTab);
    }
  }, [isOpen, defaultTab]);

  // Wrap setIsOpen to also call parent onOpenChange
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (onOpenChange) {
      onOpenChange(open);
    }
  };

  // Sign In state
  const [signinEmail, setSigninEmail] = useState("");
  const [signinPassword, setSigninPassword] = useState("");

  // Sign Up state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const handleSignin = (userType: "customer" | "provider") => {
    const form = document.getElementById("signin-form") as HTMLFormElement;
    if (form.checkValidity()) {
      toast.success(`Signed in as ${userType}`);
      handleOpenChange(false);
    } else {
      form.reportValidity();
    }
  };

  const handleSignup = (userType: "customer" | "provider") => {
    const form = document.getElementById("signup-form") as HTMLFormElement;
    if (form.checkValidity()) {
      toast.success(`Signed up as ${userType}`);
      handleOpenChange(false);
    } else {
      form.reportValidity();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Welcome to ServiceConnect</DialogTitle>
        </DialogHeader>

        <Tabs
          value={tab}
          onValueChange={(val) => setTab(val as "signin" | "signup")}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          {/* --- Sign In --- */}
          <TabsContent value="signin" className="space-y-4">
            <form id="signin-form" className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="signin-email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="signin-email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10"
                    value={signinEmail}
                    onChange={(e) => setSigninEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="signin-password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="signin-password"
                    type="password"
                    placeholder="Enter your password"
                    className="pl-10"
                    value={signinPassword}
                    onChange={(e) => setSigninPassword(e.target.value)}
                    required
                    minLength={6}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  onClick={() => handleSignin("customer")}
                  className="gap-2"
                >
                  <User className="h-4 w-4" />
                  Customer
                </Button>
                <Button
                  variant="hero"
                  onClick={() => handleSignin("provider")}
                  className="gap-2"
                >
                  Sign In as Provider
                </Button>
              </div>

              <p className="text-sm text-center text-muted-foreground">
                Don’t have an account?{" "}
                <button
                  type="button"
                  onClick={() => setTab("signup")}
                  className="text-primary hover:underline"
                >
                  Sign Up
                </button>
              </p>
            </form>

            <Separator className="my-4" />
            <Button variant="outline" className="w-full gap-2">
              <Chrome className="h-4 w-4" />
              Continue with Google
            </Button>
          </TabsContent>

          {/* --- Sign Up --- */}
          <TabsContent value="signup" className="space-y-4">
            <form id="signup-form" className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="firstname">First Name</Label>
                  <Input
                    id="firstname"
                    placeholder="John"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastname">Last Name</Label>
                  <Input
                    id="lastname"
                    placeholder="Doe"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="john@example.com"
                    className="pl-10"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    placeholder="+1 (555) 123-4567"
                    className="pl-10"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="Create a password"
                    className="pl-10"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    required
                    minLength={6}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  onClick={() => handleSignup("customer")}
                  className="gap-2"
                >
                  <User className="h-4 w-4" />
                  Join as Customer
                </Button>
                <Button
                  variant="hero"
                  onClick={() => handleSignup("provider")}
                  className="gap-2"
                >
                  Become Provider
                </Button>
              </div>

              <p className="text-sm text-center text-muted-foreground">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setTab("signin")}
                  className="text-primary hover:underline"
                >
                  Sign In
                </button>
              </p>
            </form>

            <Separator className="my-4" />
            <Button variant="outline" className="w-full gap-2">
              <Chrome className="h-4 w-4" />
              Continue with Google
            </Button>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
