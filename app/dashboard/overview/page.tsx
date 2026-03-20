import { Button } from "@/components/ui/button";

export default function OverviewPage() {
  return (
    <div className="flex flex-col gap-8">
      <header className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight">Project Overview</h1>
        <p className="text-muted-foreground mt-2">
          Get an overview of your team’s projects and progress.
        </p>
      </header>
      <section className="flex flex-col items-center justify-center border bg-background/70 rounded-xl py-20">
        <span className="text-xl text-muted-foreground mb-4">
          No projects yet.
        </span>
        <Button size="lg" asChild>
          <a href="/dashboard/projects">Create New Project</a>
        </Button>
      </section>
    </div>
  );
}