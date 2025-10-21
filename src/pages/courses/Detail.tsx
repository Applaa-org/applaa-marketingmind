import React from 'react';
import { useParams } from '@tanstack/react-router';
import { courses } from '@/data/marketmind-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, PlayCircle, Star, Clock, BookOpen } from 'lucide-react';

const CourseDetailPage = () => {
  const { courseId } = useParams({ from: '/courses/$courseId' });
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2 space-y-6">
        <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">{course.title}</h1>
            <p className="text-lg text-muted-foreground">{course.description}</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5"><Star className="h-4 w-4 text-amber-500 fill-current" /> {course.rating} ({course.reviews} reviews)</div>
            <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {course.duration} total</div>
            <div className="flex items-center gap-1.5"><BookOpen className="h-4 w-4" /> {course.lessons} lessons</div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Course Content</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {course.modules.map((module, index) => (
                <AccordionItem value={`item-${index}`} key={module.id}>
                  <AccordionTrigger className="font-semibold">
                    <div className="flex flex-col text-left">
                        <span>Module {index + 1}: {module.title}</span>
                        <span className="text-xs font-normal text-muted-foreground">{module.lessons} lessons • {module.duration}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 pl-4">
                      {[...Array(module.lessons)].map((_, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm">
                          <PlayCircle className="h-4 w-4 text-muted-foreground" />
                          <span>Lesson {i + 1}: Placeholder Title</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>

      <div className="md:col-span-1 space-y-4">
        <Card className="sticky top-20">
          <CardHeader>
            <div className={`p-4 rounded-lg bg-gradient-to-br ${course.color} mb-4`}>
                <course.icon className="h-10 w-10 text-white mx-auto" />
            </div>
            <CardTitle className="text-center">Your Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Progress value={course.progress} className="w-full" />
            <p className="text-center text-sm text-muted-foreground">{course.progress}% complete</p>
            <Button size="lg" className="w-full">
              {course.progress > 0 ? 'Continue Learning' : 'Start Course'}
            </Button>
            <div className="text-xs text-muted-foreground space-y-2 pt-2">
                <p className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Full lifetime access</p>
                <p className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Certificate of completion</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CourseDetailPage;