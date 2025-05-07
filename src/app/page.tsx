import AppBarChart from "@/components/AppBarChart";





export default function Home() {



  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground rounded-md p-4 lg:col-span-2 xl:col-span-1 2xl:col-span-2"><AppBarChart /></div>
      <div className="bg-primary-foreground rounded-md p-4">Box 2</div>
      <div className="bg-primary-foreground rounded-md p-4">Box 3</div>
      <div className="bg-primary-foreground rounded-md p-4">Box 4</div>
      <div className="bg-primary-foreground rounded-md p-4 lg:col-span-2 xl:col-span-1 2xl:col-span-2">Box 5</div>
      <div className="bg-primary-foreground rounded-md p-4">Box 6</div>
      
    </div>
  );
}
