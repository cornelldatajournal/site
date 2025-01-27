"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface TeamMember {
    name: string;
    role: string;
    class: string;
    major: string;
    image: string;
    color: string;
    bio?: string;
}

const execBoard: TeamMember[] = [
    {
        name: "Rishi Gurjar",
        role: "President",
        class: "2027",
        major: "Environment & Sustainability",
        image: "/images/wall.jpg",
        color: "bg-[#FFE5D9]",
        bio: "Passionate about using data to drive environmental change and sustainability initiatives."
    },
    {
        name: "Michael Rodriguez",
        role: "Executive Vice President",
        class: "2025",
        major: "Computer Science",
        image: "/images/wall.jpg",
        color: "bg-[#E5F6FF]",
        bio: "Exploring the intersection of technology and data-driven storytelling."
    },
    {
        name: "Emma Thompson",
        role: "VP of External Affairs",
        class: "2024",
        major: "Statistics",
        image: "/images/wall.jpg",
        color: "bg-[#F0E5FF]",
        bio: "Leveraging statistical analysis to uncover meaningful patterns in complex datasets."
    },
    {
        name: "David Liu",
        role: "VP of Internal Affairs",
        class: "2025",
        major: "Economics",
        image: "/images/wall.jpg",
        color: "bg-[#E5FFE9]",
        bio: "Interested in using economic data to understand market trends and social impact."
    },
    {
        name: "Priya Patel",
        role: "Social Coordinator",
        class: "2026",
        major: "Communication",
        image: "/images/wall.jpg",
        color: "bg-[#FFE8E5]",
        bio: "Creating engaging content that bridges data science and effective communication."
    },
    {
        name: "James Wilson",
        role: "Project Coordinator",
        class: "2025",
        major: "Data Science",
        image: "/images/wall.jpg",
        color: "bg-[#E5FFFA]",
        bio: "Managing data-driven projects that make complex information accessible to everyone."
    }
];

const projectLeads: TeamMember[] = Array(10).fill(null).map((_, i) => ({
    name: `Project Lead ${i + 1}`,
    role: "Project Lead",
    class: `${Math.floor(Math.random() * 4) + 24}`,
    major: "Various",
    image: "/images/wall.jpg",
    color: `bg-[${['#FFE5D9', '#E5F6FF', '#F0E5FF', '#E5FFE9', '#FFE8E5'][i % 5]}]`
}));

const analysts: TeamMember[] = Array(30).fill(null).map((_, i) => ({
    name: `Team Member ${i + 1}`,
    role: "Analyst",
    class: `${Math.floor(Math.random() * 4) + 24}`,
    major: "Various",
    image: "/images/wall.jpg",
    color: `bg-[${['#FFE5D9', '#E5F6FF', '#F0E5FF', '#E5FFE9', '#FFE8E5'][i % 5]}]`
}));

function TeamMemberCard({ member }: { member: TeamMember }) {
    const bioRef = useRef<HTMLDivElement>(null);
    const avatarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const bioElement = bioRef.current;
        const avatarElement = avatarRef.current;
        const container = bioElement?.parentElement;

        if (!bioElement || !container || !avatarElement) return;

        // Initial state
        gsap.set(bioElement, { opacity: 0, zIndex: 0 });
        gsap.set(avatarElement, { zIndex: 10 });

        // Create hover animations
        const timeline = gsap.timeline({ paused: true });
        timeline
            .to(avatarElement, {
                opacity: 0,
                duration: 0.2,
                ease: "power2.out"
            })
            .to(bioElement, {
                opacity: 1,
                zIndex: 20,
                duration: 0.2,
                ease: "power2.out"
            }, "<");

        const handleEnter = () => timeline.play();
        const handleLeave = () => timeline.reverse();

        container.addEventListener("mouseenter", handleEnter);
        container.addEventListener("mouseleave", handleLeave);

        return () => {
            container.removeEventListener("mouseenter", handleEnter);
            container.removeEventListener("mouseleave", handleLeave);
            timeline.kill();
        };
    }, []);

    return (
        <div className="flex flex-col items-center">
            <div className={`relative w-full aspect-square rounded-lg mb-3 ${member.color} flex items-center justify-center overflow-hidden`}>
                <div ref={avatarRef}>
                    <Avatar className="w-20 h-20">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                </div>
                <div
                    ref={bioRef}
                    className="absolute inset-0 flex items-center justify-center p-4 bg-black/70"
                >
                    <p className="text-white text-xs text-center font-space-grotesk">
                        {member.bio}
                    </p>
                </div>
            </div>
            <h3 className="font-space-grotesk font-medium text-sm text-center">{member.name}</h3>
            <p className="font-space-grotesk text-xs text-neutral-600 text-center">{member.role}</p>
            <p className="font-space-grotesk text-xs text-neutral-600 text-center">'{member.class.slice(-2)}</p>
            <p className="font-space-grotesk text-xs text-neutral-600 text-center">{member.major}</p>
        </div>
    );
}

export default function MastheadPage() {
    return (
        <main className="container py-12 max-w-6xl mx-auto">
            <div className="space-y-12">
                {/* Executive Board */}
                <div>
                    <h2 className="text-2xl font-eb-garamond mb-6">Executive Board</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                        {execBoard.map((member) => (
                            <TeamMemberCard key={member.name} member={member} />
                        ))}
                    </div>
                </div>

                {/* Project Leads */}
                <div>
                    <h2 className="text-2xl font-eb-garamond mb-6">Project Leads</h2>
                    <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 gap-4">
                        {projectLeads.map((member) => (
                            <div key={member.name} className="flex flex-col items-center">
                                <h3 className="font-space-grotesk font-medium text-xs text-center">{member.name}</h3>
                                <p className="font-space-grotesk text-[10px] text-neutral-600 text-center">'{member.class}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Analysts */}
                <div>
                    <h2 className="text-2xl font-eb-garamond mb-6">Team Members</h2>
                    <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-10 gap-3">
                        {analysts.map((member) => (
                            <div key={member.name} className="flex flex-col items-center">
                                <h3 className="font-space-grotesk font-medium text-[10px] text-center">{member.name}</h3>
                                <p className="font-space-grotesk text-[8px] text-neutral-600 text-center">'{member.class}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
} 