import { Button } from "@/components/ui/button";

export default function BoardsPage() {
  return (
    <div className="flex flex-col gap-8">
      <header className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight">Boards</h1>
        <p className="text-muted-foreground mt-2">
          Organize tasks visually using boards.
        </p>
      </header>
      <section className="flex flex-col items-center justify-center border bg-background/70 rounded-xl py-20">
        <span className="text-xl text-muted-foreground mb-4">
          No boards yet. Create a board to organize tasks visually.
        </span>
        <Button size="lg" asChild>
          <a href="#">Create Board</a>
        </Button>
      </section>
    </div>
  );
}