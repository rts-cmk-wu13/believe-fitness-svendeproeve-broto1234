import BelieveHeader from "@/components/ui/believeHeader";

export default function WithHeaderLayout({ children }) {
  return (
    <div className="relative flex flex-col min-h-screen mt-12">
      <BelieveHeader textColor="black"/>
      <main className=""> 
        {children}
      </main>
    </div>
  );
}