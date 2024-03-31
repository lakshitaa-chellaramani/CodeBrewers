import {
  Activity,
  ArrowUpRight,
  CircleUser,
  Computer,
  CreditCard,
  DollarSign,
  Menu,
  MoveUpRight,
  Package2,
  Search,
  Users,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";

export function Dashboard() {
  return (
    <div className="flex min-h-screen max-w-[85%] mx-auto w-full  flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            to="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link
            to="#"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Dashboard
          </Link>
          <Link
            to="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Orders
          </Link>
          <Link
            to="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Products
          </Link>
          <Link
            to="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Customers
          </Link>
          <Link
            to="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Analytics
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                to="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link to="#" className="hover:text-foreground">
                Dashboard
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Orders
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Products
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Customers
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Analytics
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8  lg:grid-cols-4">
          <Card className="pt-3">
            <CardContent className="flex items-center justify-center h-full">
              <div className="flex flex-col items-start h-full mt-2 max-w-[80%] mx-auto justify-center">
                <div className="text-2xl font-bold">467</div>
                <p className="text-xs text-muted-foreground">
                  Interview Schedules
                </p>
              </div>
              <div className="bg-gray-200 p-3 rounded-md">
                <MoveUpRight />
              </div>
            </CardContent>
          </Card>
          <Card className="pt-3">
            <CardContent className="flex items-center justify-center h-full">
              <div className="flex flex-col items-start h-full mt-2 max-w-[80%] mx-auto justify-center">
                <div className="text-2xl font-bold">100</div>
                <p className="text-xs text-muted-foreground">
                  Application Sent
                </p>
              </div>
              <div className="bg-gray-200 p-3 rounded-md">
                <MoveUpRight />
              </div>
            </CardContent>
          </Card>
          <Card className="pt-3">
            <CardContent className="flex items-center justify-center h-full">
              <div className="flex flex-col items-start h-full mt-2 max-w-[80%] mx-auto justify-center">
                <div className="text-2xl font-bold">500</div>
                <p className="text-xs text-muted-foreground">Profile View</p>
              </div>
              <div className="bg-gray-200 p-3 rounded-md">
                <MoveUpRight />
              </div>
            </CardContent>
          </Card>
          <Card className="pt-3">
            <CardContent className="flex items-center justify-center h-full">
              <div className="flex flex-col items-start h-full mt-2 max-w-[80%] mx-auto justify-center">
                <div className="text-2xl font-bold">20</div>
                <p className="text-xs text-muted-foreground">Job Posts</p>
              </div>
              <div className="bg-gray-200 p-3 rounded-md">
                <MoveUpRight />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="xl:col-span-1 p-5">
            <div className="flex items-center justify-start gap-5 max-w-[80%] mx-auto">
              <img
                src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png"
                alt=""
                className="w-[60px]"
              />
              <div className="flex flex-col items-start">
                <h1 className="font-bold  text-xl">Aditya Rai</h1>
                <h1 className="text-sm text-gray-500">Web Developer</h1>
                <h1 className="text-xs text-gray-500">Mumbai</h1>
              </div>
            </div>
          </Card>
          <Card className="xl:col-span-2 p-5">
        
            <h1>Vacancy Status</h1>
          </Card>
       
        </div>
        
        
        <Card className="flex flex-col items-start p-5  w-full">
            <h1 className="text-xl font-medium ">Available Jobs for you</h1>
            <div className="flex items-center  justify-between max-w-[90%] space-x-10 mx-auto">
              <Card className="flex my-10 p-5 flex-col items-center justify-center">
               <div className="p-5 bg-gray-200 rounded-full">
               <Computer size="100px"/>
               </div>
                <h1 className="font-bold text-xl my-2">Web Developer</h1>
                <h1 className="text-blue-800 ">$10000 - $15000</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Nulla molestiae reiciendis suscipit dignissimos dicta ducimus?</p>
              </Card>
               <Card className="flex my-10 p-5 flex-col items-center justify-center">
               <div className="p-5 bg-gray-200 rounded-full">
               <Computer size="100px"/>
               </div>
                <h1 className="font-bold text-xl my-2">Web Developer</h1>
                <h1 className="text-blue-800 ">$10000 - $15000</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Nulla molestiae reiciendis suscipit dignissimos dicta ducimus?</p>
              </Card>
               <Card className="flex my-10 p-5 flex-col items-center justify-center">
               <div className="p-5 bg-gray-200 rounded-full">
               <Computer size="100px"/>
               </div>
                <h1 className="font-bold text-xl my-2">Web Developer</h1>
                <h1 className="text-blue-800 ">$10000 - $15000</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Nulla molestiae reiciendis suscipit dignissimos dicta ducimus?</p>
              </Card>
            </div>
        </Card>
        
        
{/*         
        <Card className="grid gap-4 md:gap-8 p-5">
         <h1 className="text-start font-medium text-xl">Available Jobs For You</h1>
         <div className="flex items-center justify-between   gap-5">

         <div className="p-5 ">
            <Card className="flex flex-col gap-2">
            <Computer className="w-[100px]"/>
              <h2>Senior Web Developer</h2>
              <h2>$10000 - $15000</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Mollitia autem consectetur aliquam blanditiis, eligendi nemo?</p>
            </Card>
          </div>
          <Card className="p-5">
            <Card className="flex flex-col gap-2">
            <Computer className="w-[100px]"/>
              <h2>Senior Web Developer</h2>
              <h2>$10000 - $15000</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Mollitia autem consectetur aliquam blanditiis, eligendi nemo?</p>
            </Card>
          </Card>
          <Card className="p-5">
            <Card className="flex flex-col gap-2">
            <Computer className="w-[100px]"/>
              <h2>Senior Web Developer</h2>
              <h2>$10000 - $15000</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Mollitia autem consectetur aliquam blanditiis, eligendi nemo?</p>
            </Card>
          </Card>
         </div>
         <div>
          asfd
         </div>
        </Card>
         */}
        
        
        
        
        
        
        
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="xl:col-span-2">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Transactions</CardTitle>
                <CardDescription>
                  Recent transactions from your store.
                </CardDescription>
              </div>
              <Button asChild size="sm" className="ml-auto gap-1">
                <Link to="#">
                  View All
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead className="hidden xl:table-column">
                      Type
                    </TableHead>
                    <TableHead className="hidden xl:table-column">
                      Status
                    </TableHead>
                    <TableHead className="hidden xl:table-column">
                      Date
                    </TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Liam Johnson</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        liam@example.com
                      </div>
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      Sale
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      <Badge className="text-xs" variant="outline">
                        Approved
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                      2023-06-23
                    </TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Olivia Smith</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        olivia@example.com
                      </div>
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      Refund
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      <Badge className="text-xs" variant="outline">
                        Declined
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                      2023-06-24
                    </TableCell>
                    <TableCell className="text-right">$150.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Noah Williams</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        noah@example.com
                      </div>
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      Subscription
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      <Badge className="text-xs" variant="outline">
                        Approved
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                      2023-06-25
                    </TableCell>
                    <TableCell className="text-right">$350.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Emma Brown</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        emma@example.com
                      </div>
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      Sale
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      <Badge className="text-xs" variant="outline">
                        Approved
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                      2023-06-26
                    </TableCell>
                    <TableCell className="text-right">$450.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Liam Johnson</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        liam@example.com
                      </div>
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      Sale
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      <Badge className="text-xs" variant="outline">
                        Approved
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                      2023-06-27
                    </TableCell>
                    <TableCell className="text-right">$550.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card className="pt-3">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/01.png" alt="Avatar" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Olivia Martin
                  </p>
                  <p className="text-sm text-muted-foreground">
                    olivia.martin@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$1,999.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/02.png" alt="Avatar" />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Jackson Lee
                  </p>
                  <p className="text-sm text-muted-foreground">
                    jackson.lee@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$39.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/03.png" alt="Avatar" />
                  <AvatarFallback>IN</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Isabella Nguyen
                  </p>
                  <p className="text-sm text-muted-foreground">
                    isabella.nguyen@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$299.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/04.png" alt="Avatar" />
                  <AvatarFallback>WK</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    William Kim
                  </p>
                  <p className="text-sm text-muted-foreground">
                    will@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$99.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/05.png" alt="Avatar" />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Sofia Davis
                  </p>
                  <p className="text-sm text-muted-foreground">
                    sofia.davis@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$39.00</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}