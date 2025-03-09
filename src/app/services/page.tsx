import { InsightsForm } from "@/components/insights-form";
import { Button } from "@/components/ui/button";
import { create } from "./actions";

export default function InsightsPage() {
  return (
    <div className="container mx-auto py-10">
      <InsightsForm />
      <Button type="submit" formAction={create}>
        Send Action
      </Button>
    </div>
  );
}
