import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Lock, Phone, MapPin, Facebook, Chrome } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AuthDialogProps {
  children: React.ReactNode;
}

const AuthDialog = ({ children }: AuthDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (type: 'signin' | 'signup', userType: 'customer' | 'provider') => {
    toast({
      title: "Demo Mode",
      description: `${type === 'signin' ? 'Sign in' : 'Sign up'} as ${userType} - Connect to Supabase for full functionality`,
    });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Welcome to ServiceConnect</DialogTitle>
          <DialogDescription>
            Sign in to your account or create a new one to get started
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="signin" className="space-y-4">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="sm" className="gap-2">
                  <Chrome className="h-4 w-4" />
                  Google
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Facebook className="h-4 w-4" />
                  Facebook
                </Button>
              </div>
              
              <div className="flex items-center gap-3">
                <Separator className="flex-1" />
                <span className="text-xs text-muted-foreground">OR</span>
                <Separator className="flex-1" />
              </div>

              <div className="space-y-3">
                <div className="space-y-2">
                  <Label htmlFor="signin-email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="signin-email" placeholder="Enter your email" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signin-password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="signin-password" type="password" placeholder="Enter your password" className="pl-10" />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Button variant="link" className="px-0 text-sm">
                  Forgot password?
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline" 
                  onClick={() => handleSubmit('signin', 'customer')}
                  className="gap-2"
                >
                  <User className="h-4 w-4" />
                  Customer
                </Button>
                <Button 
                  variant="hero" 
                  onClick={() => handleSubmit('signin', 'provider')}
                  className="gap-2"
                >
                  Sign In as Provider
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="signup" className="space-y-4">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="sm" className="gap-2">
                  <Chrome className="h-4 w-4" />
                  Google
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Facebook className="h-4 w-4" />
                  Facebook
                </Button>
              </div>
              
              <div className="flex items-center gap-3">
                <Separator className="flex-1" />
                <span className="text-xs text-muted-foreground">OR</span>
                <Separator className="flex-1" />
              </div>

              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="firstname">First Name</Label>
                    <Input id="firstname" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastname">Last Name</Label>
                    <Input id="lastname" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="signup-email" placeholder="john@example.com" className="pl-10" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="phone" placeholder="+1 (555) 123-4567" className="pl-10" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="signup-password" type="password" placeholder="Create a password" className="pl-10" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline" 
                  onClick={() => handleSubmit('signup', 'customer')}
                  className="gap-2"
                >
                  <User className="h-4 w-4" />
                  Join as Customer
                </Button>
                <Button 
                  variant="hero" 
                  onClick={() => handleSubmit('signup', 'provider')}
                  className="gap-2"
                >
                  Become Provider
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                By signing up, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center pt-4">
          <Badge variant="secondary" className="text-xs">
            Demo Mode - Connect Supabase for full auth
          </Badge>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;