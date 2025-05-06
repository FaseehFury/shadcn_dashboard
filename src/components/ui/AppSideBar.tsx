"use client"
import {Home,Inbox,Calendar,Search,Settings, User2, ChevronUp, LogOut, Plus, CirclePlus, Circle, ChevronDown} from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarSeparator } from "./sidebar";
import Link from "next/link";
import Image from "next/image";
import { DropdownMenu, DropdownMenuTrigger } from "./dropdown-menu";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible";


const items = [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
    },
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ];

const AppSideBar = () => {
  const {theme} = useTheme();
  console.log(theme);
    return (
     
<Sidebar collapsible="icon">
  <SidebarHeader className="py-4">
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={20} height={20} />
          <span className="text-bold">Faseeh Dev</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem> 
     
    </SidebarMenu>
  </SidebarHeader>
  <SidebarSeparator className="!w-auto"/>
  <SidebarContent>
  <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.title === "Inbox" && (
                     <SidebarMenuBadge>24</SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel >Projects</SidebarGroupLabel>
          <SidebarGroupAction>
            <CirclePlus className="h-[10px]" /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <Circle />
                    <span>Bloomberg</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuBadge>2</SidebarMenuBadge>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <Circle />
                    <span>Samsung</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <Circle />
                    <span>Apple</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <Circle />
                    <span>Amazon</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

<Collapsible defaultOpen className="group/collapsible">
        <SidebarGroup>
        <SidebarGroupLabel asChild>
          <CollapsibleTrigger>
            Help
            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
  <SidebarMenu>
    
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link href="#">
            <Plus />
            <span>Documentation</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link href="#">
            <Plus />
            <span>Support</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link href="#">
            <Plus />
            <span>Contact Us</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>      
  
        </CollapsibleContent>
      </SidebarGroup>
</Collapsible>


{/* MenuSubGroup */}




<SidebarGroup>
          <SidebarGroupLabel >Nested Subs</SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <Circle />
                    <span>Bloomberg</span>
                  </Link>
                </SidebarMenuButton>

<SidebarMenuSub>
  <SidebarMenuSubItem>
    <SidebarMenuSubButton asChild>
      <Link href="#">
        <Circle />
        <span>Bloomberg</span>
      </Link>
    </SidebarMenuSubButton>
  </SidebarMenuSubItem>
</SidebarMenuSub>

            
              </SidebarMenuItem>
              
              
             
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>





  </SidebarContent>
  <SidebarFooter>
<SidebarMenu>
  <SidebarMenuItem>
    <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> John Doe <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
       <DropdownMenuContent align="end">
        <DropdownMenuItem>Account</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Sign Out</DropdownMenuItem>
       </DropdownMenuContent>
    </DropdownMenu>
    </SidebarMenuItem>
</SidebarMenu>
  </SidebarFooter>
</Sidebar>
       

    );
};

export default AppSideBar;