import { Button } from "@/components/ui/button";

export default function IssuesPage() {
  return (
    <div className="flex flex-col gap-8">
      <header className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight">Issues</h1>
        <p className="text-muted-foreground mt-2">
          All project issues are listed here.
        </p>
      </header>
      <section className="flex flex-col items-center justify-center border bg-background/70 rounded-xl py-20">
        <span className="text-xl text-muted-foreground mb-4">
          No issues found. Create your first issue to start tracking.
        </span>
        <Button size="lg" asChild>
          <a href="#">Create Issue</a>
        </Button>
      </section>
    </div>
  );
}