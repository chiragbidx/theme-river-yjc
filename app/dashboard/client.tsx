"use client";

type ClientProps = {
  greeting: string;
  firstName: string;
};

export default function Client({ greeting, firstName }: ClientProps) {
  return (
    <div className="flex flex-col items-start gap-6 py-8">
      <h1 className="text-3xl font-bold tracking-tight">Welcome to JiraBolt</h1>
      <p className="text-muted-foreground text-lg">
        Your projects, boards, and issues—all in one place.
      </p>
      <div className="mt-8">
        <span className="inline-block bg-primary/10 text-primary font-medium rounded-md px-4 py-2">
          {greeting}, {firstName}!
        </span>
      </div>
    </div>
  );
}