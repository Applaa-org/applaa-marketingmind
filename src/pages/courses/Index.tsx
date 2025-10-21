import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { courses } from '@/data/marketmind-data';
import { Link } from '@tanstack/react-router';
import { Star, Clock, BookOpen } from 'lucide-react';

const CoursesPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">All Courses</h1>
      <p className="text-muted-foreground">
        Expand your marketing knowledge with our expert-led courses.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courses.map(course => (
          <Card key={course.id} className="flex flex-col hover:border-primary transition-colors">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${course.color}`}>
                  <course.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
              </div>
              <CardDescription className="line-clamp-3">{course.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <div className="flex justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {course.duration}</div>
                <div className="flex items-center gap-1.5"><BookOpen className="h-4 w-4" /> {course.lessons} Lessons</div>
              </div>
              <div className="flex items-center gap-1 text-amber-500">
                <Star className="h-4 w-4 fill-current" />
                <span className="font-semibold">{course.rating}</span>
                <span className="text-xs text-muted-foreground">({course.reviews} reviews)</span>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-2">
              {course.progress > 0 && (
                <>
                  <span className="text-xs text-muted-foreground">Progress: {course.progress}%</span>
                  <Progress value={course.progress} className="w-full h-2" />
                </>
              )}
              <Button asChild className="w-full mt-2">
                <Link to="/courses/$courseId" params={{ courseId: course.id }}>
                  {course.progress > 0 ? 'Continue Course' : 'View Course'}
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;