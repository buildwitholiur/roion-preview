import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const Intro = () => {
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="space-y-5">
        <h1 className="text-4xl">Go to the Dashboard Page</h1>

        <Button asChild className="w-fit mx-auto block text-center">
          <Link to="/dashboard">Dashboard</Link>
        </Button>
      </div>
    </section>
  );
};

export default Intro;
