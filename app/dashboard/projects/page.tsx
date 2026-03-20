import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-8">
      <header className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="text-muted-foreground mt-2">
          All your team’s projects are managed here.
        </p>
      </header>
      <section className="flex flex-col items-center justify-center border bg-background/70 rounded-xl py-20">
        <span className="text-xl text-muted-foreground mb-4">
          No projects available. Start by creating a new project.
        </span>
        <Button size="lg" asChild>
          <a href="#">Create Project</a>
        </Button>
      </section>
    </div>
  );
}