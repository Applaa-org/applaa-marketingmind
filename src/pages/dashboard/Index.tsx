import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { userData, courses } from '@/data/marketmind-data';
import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';

const DashboardPage = () => {
  const currentCourse = courses.find(c => c.id === userData.currentCourse);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Welcome back, {userData.name.split(' ')[0]}!</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Continue Learning</CardTitle>
            {currentCourse && <CardDescription>{currentCourse.title}</CardDescription>}
          </CardHeader>
          {currentCourse && (
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Your Progress</span>
                <span className="text-sm font-semibold">{currentCourse.progress}%</span>
              </div>
              <Progress value={currentCourse.progress} />
              <Button asChild className="w-full md:w-auto">
                <Link to="/courses/$courseId" params={{ courseId: currentCourse.id }}>
                  Go to Course <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          )}
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>My Achievements</CardTitle>
            <CardDescription>Your earned badges and certifications.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              {userData.badges.map(badge => (
                <div key={badge.id} className="flex flex-col items-center gap-2 text-center">
                  <div className="p-3 bg-muted rounded-full">
                    <badge.icon className={`h-8 w-8 ${badge.color}`} />
                  </div>
                  <span className="text-xs font-medium">{badge.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Explore Courses</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {courses.slice(0, 3).map(course => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${course.color}`}>
                    <course.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <CardDescription>{course.category}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{course.description}</p>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/courses/$courseId" params={{ courseId: course.id }}>View Course</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;