import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";





export default function Home() {



  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground rounded-md p-4 lg:col-span-2 xl:col-span-1 2xl:col-span-2"><AppBarChart /></div>
      <div className="bg-primary-foreground rounded-md p-4"><CardList title="popular Content"/></div>
      <div className="bg-primary-foreground rounded-md p-4"><AppPieChart /></div>
      <div className="bg-primary-foreground rounded-md p-4"><TodoList /></div>
      <div className="bg-primary-foreground rounded-md p-4 lg:col-span-2 xl:col-span-1 2xl:col-span-2"><AppAreaChart /></div>
      <div className="bg-primary-foreground rounded-md p-4"><CardList title="latest Transactions" /></div>
      
    </div>
  );
}
