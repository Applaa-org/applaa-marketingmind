import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Download } from 'lucide-react';
import { userData } from '@/data/marketmind-data';

const CertificationsPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">My Certifications</h1>
      <p className="text-muted-foreground">
        Showcase your expertise with official MarketMind certifications.
      </p>
      
      {userData.certifications.length === 0 ? (
        <Card className="mt-4">
          <CardContent className="p-10 flex flex-col items-center justify-center text-center">
            <Award className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold">No Certifications Yet</h3>
            <p className="text-muted-foreground mt-2">
              Complete a course to earn your first certification and see it appear here.
            </p>
            <Button className="mt-6">Explore Courses</Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* This part will be empty for now, but is ready for when certifications are added */}
        </div>
      )}
    </div>
  );
};

export default CertificationsPage;