import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";

export default function DesignSystemPage() {
  return (
    <div className="container mx-auto p-8 space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-heading text-primary">Tunisian Hoops - Design System</h1>
        <p className="text-muted-foreground text-lg">Preview of tokens, typography, and base components.</p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-heading border-b pb-2">Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-background border rounded-lg shadow-sm">Background</div>
          <div className="p-4 bg-card text-card-foreground border rounded-lg shadow-sm">Card (Surface)</div>
          <div className="p-4 bg-primary text-primary-foreground rounded-lg shadow-sm">Primary</div>
          <div className="p-4 bg-secondary text-secondary-foreground rounded-lg shadow-sm">Secondary</div>
          <div className="p-4 bg-muted text-muted-foreground rounded-lg shadow-sm">Muted</div>
          <div className="p-4 bg-accent text-accent-foreground rounded-lg shadow-sm">Accent</div>
          <div className="p-4 bg-destructive text-destructive-foreground rounded-lg shadow-sm">Destructive</div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-heading border-b pb-2">Typography</h2>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground">Heading (Barlow Condensed)</p>
            <h1 className="text-4xl font-heading">The Quick Brown Fox</h1>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Body (Inter)</p>
            <p className="text-base font-sans">The quick brown fox jumps over the lazy dog.</p>
          </div>
          <div lang="ar" dir="rtl">
            <p className="text-sm text-muted-foreground">Arabic (Cairo)</p>
            <p className="text-xl font-arabic">الثعلب البني السريع يقفز فوق الكلب الكسول.</p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-heading border-b pb-2">Components</h2>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Buttons</h3>
            <div className="flex gap-4 flex-wrap">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Badges</h3>
            <div className="flex gap-4 flex-wrap">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Live</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Input</h3>
            <div className="max-w-sm">
              <Input placeholder="Search teams or players..." />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Card</h3>
            <Card className="max-w-md">
              <CardHeader>
                <CardTitle>Match Overview</CardTitle>
                <CardDescription>Club Africain vs US Monastir</CardDescription>
              </CardHeader>
              <CardContent>
                <p>The match is currently ongoing in the 3rd quarter.</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View Details</Button>
              </CardFooter>
            </Card>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Tabs</h3>
            <Tabs defaultValue="stats" className="w-[400px]">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="stats">Stats</TabsTrigger>
                <TabsTrigger value="roster">Roster</TabsTrigger>
              </TabsList>
              <TabsContent value="stats">
                <Card>
                  <CardHeader>
                    <CardTitle>Team Statistics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>Stats content goes here...</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="roster">
                <Card>
                  <CardHeader>
                    <CardTitle>Team Roster</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>Roster content goes here...</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Skeleton</h3>
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
