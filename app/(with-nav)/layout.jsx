import Nav from "@/components/nav";

export default function WithNavLayout({ children }) {
  return (
    <div className="">
      <Nav className=""/>
      <main>
        {children}
      </main>
    </div>
  );
}