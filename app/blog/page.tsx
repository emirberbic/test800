"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

// Single blog post data
const blogPost = {
  id: 1,
  title: "Line-Up für Nations of Legends 2025 angekündigt",
  slug: "lineup-ankuendigung-2025",
  excerpt: "Wir freuen uns, unser spektakuläres Line-Up für die kommende Ausgabe des Nations of Legends Festival bekannt zu geben.",
  content: "Wir freuen uns, unser spektakuläres Line-Up für die kommende Ausgabe des Nations of Legends Festival bekannt zu geben. Mit internationalen Headlinern und aufstrebenden Talenten versprechen wir ein unvergessliches Festival-Erlebnis...",
  coverImage: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&auto=format&fit=crop&q=60",
  date: "15.01.2025",
  author: "Festival-Team",
  readTime: "4 min",
  tags: ["Line-Up", "Ankündigung", "2025"]
};

export default function BlogPage() {
  const [filter, setFilter] = useState("all");
  
  return (
    <div className="pt-24 pb-20">
      <div className="container px-4">
        <h1 className="font-rajdhani text-4xl md:text-5xl font-bold mb-6">
          FESTIVAL BLOG
        </h1>
        <p className="text-muted-foreground max-w-2xl mb-10">
          News, Updates und Stories rund um das Nations of Legends Festival. Entdecke exklusive Interviews, Hintergrundberichte und aktuelle Ankündigungen.
        </p>
        
        {/* Tag Filter - Only showing "Alle" button */}
        <div className="mb-10 overflow-x-auto">
          <div className="flex gap-2 pb-2">
            <Button 
              variant={filter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-chart-1 hover:bg-chart-1/80" : ""}
            >
              Alle
            </Button>
          </div>
        </div>
        
        {/* Featured Post */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 festive-border p-6 rounded-lg">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image 
                src={blogPost.coverImage}
                alt={blogPost.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{blogPost.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{blogPost.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{blogPost.readTime}</span>
                </div>
              </div>
              <h2 className="font-rajdhani text-3xl font-bold mb-4 text-chart-1">
                {blogPost.title}
              </h2>
              <p className="text-muted-foreground mb-6">
                {blogPost.excerpt}
              </p>
              <Link href={`/blog/${blogPost.slug}`}>
                <Button className="bg-chart-1 hover:bg-chart-1/80">
                  Weiterlesen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}