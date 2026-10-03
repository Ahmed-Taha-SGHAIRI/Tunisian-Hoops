import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export function SkeletonCard() {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4 gap-4 flex-row items-center">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-3 w-1/3" />
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <Skeleton className="h-24 w-full rounded-md" />
      </CardContent>
      <CardFooter className="p-4 bg-muted/50 border-t">
        <Skeleton className="h-8 w-full rounded-md" />
      </CardFooter>
    </Card>
  );
}
