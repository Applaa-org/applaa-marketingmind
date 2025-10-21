import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { pricingTiers } from '@/data/marketmind-data';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const PricingPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight">Find the perfect plan</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Start for free and scale up as you grow. All plans include access to our vibrant community.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8 max-w-5xl mx-auto">
        {pricingTiers.map((tier) => (
          <Card key={tier.name} className={cn("flex flex-col", tier.popular && "border-primary ring-2 ring-primary")}>
            {tier.popular && (
              <div className="bg-primary text-primary-foreground text-xs font-semibold py-1 px-3 rounded-t-lg text-center">
                Most Popular
              </div>
            )}
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{tier.name}</CardTitle>
              <p className="text-4xl font-bold">{tier.price}</p>
              <CardDescription>{tier.price.startsWith('$') ? 'per month' : ' '}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={tier.popular ? 'default' : 'outline'}>
                {tier.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;