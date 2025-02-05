"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface TeamMember {
    name: string;
    role: string;
    specialized_role?: string;
    class: string;
    major: string;
    image: string;
    color: string;
    bio?: string;
}

const teamMembers: TeamMember[] = [
    {
        name: "Rishi Gurjar",
        role: "President",
        class: "2027",
        major: "Environment & Sustainability",
        image: "/team/Rishi_Gurjar.png",
        color: "bg-[#FFE5D9]",
        bio: "When he is home, he spends around 25% of his waking hours gardening."
    },
    {
        name: "Nikhil Chinchalkar",
        role: "Executive Vice President",
        class: "2027",
        major: "Economics & Computer Science",
        image: "/team/Nikhil_Chinchalkar.jpeg",
        color: "bg-[#E5F6FF]",
        bio: ""
    },
    {
        name: "Rahi Dasgupta",
        role: "VP of External Affairs",
        class: "2027",
        major: "Information Science	& Applied Economics",
        image: "/team/Rahi_Dasgupta.jpeg",
        color: "bg-[#F0E5FF]",
        bio: ""
    },
    {
        name: "Jason Wang",
        role: "VP of Internal Affairs",
        class: "2027",
        major: "Computer Science",
        image: "/team/Jason_Wang.jpeg",
        color: "bg-[#E5FFE9]",
        bio: ""
    },
    {
        name: "Carina Lau",
        role: "Social Coordinator",
        class: "2027",
        major: "Information Science and Communication & Computer Science and Business",
        image: "/team/Carina_Lau.jpeg",
        color: "bg-[#FFE8E5]",
        bio: "."
    },
    {
        name: "Rithya Sriram",
        role: "Project Coordinator",
        class: "2027",
        major: "ORIE & Astronomy/Statistics",
        image: "/team/Rithya_Sriram.jpeg",
        color: "bg-[#E5FFFA]",
        bio: ""
    },
    {
        name: "Dana Yang",
        role: "Faculty Mentor",
        class: "",
        major: "",
        image: "/team/Dana_Yang.png",
        color: "bg-[#E5E7FF]",
        bio: "Dana is an assistant professor at Cornell in the department of statistics and data science."
    },
    {
        name: "Rahul Ramarao",
        role: "Editor",
        specialized_role: "Website Editor",
        class: "2027",
        major: "Computer Science",
        image: "/team/Rahul_Ramarao.jpeg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Winston Ni",
        role: "Editor",
        specialized_role: "Technical Editor",
        class: "2027",
        major: "Computer Science & Statistical Science",
        image: "/team/Winston_Ni.jpeg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Jenny Williams",
        role: "Editor",
        specialized_role: "Content Editor",
        class: "2027",
        major: "English",
        image: "/images/wall.jpg",
        color: "bg-[#E5E7FF]",
        bio: ""
    }
];

const additionalProjectLeads: TeamMember[] = Array(7).fill(null).map((_, i) => ({
    name: `Project Lead ${i + 1}`,
    role: "Project Lead",
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

        gsap.set(bioElement, { opacity: 0, zIndex: 0 });
        gsap.set(avatarElement, { zIndex: 10 });

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
                        <AvatarImage src={`${member.image}`} alt={member.name} />
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
            <p className="font-space-grotesk text-xs text-neutral-600 text-center">{member.role ? member.role != "Editor" ? member.role : member.specialized_role : member.specialized_role}</p>
            {member.class && (
                <p className="font-space-grotesk text-xs text-neutral-600 text-center">&apos;{member.class.slice(-2)}</p>
            )}
            {member.major && (
                <p className="font-space-grotesk text-xs text-neutral-600 text-center">{member.major}</p>
            )}
        </div>
    );
}

export default function MastheadPage() {
    // Filter executive board members (excluding Project Leads)
    const execBoard = teamMembers.filter(member => member.role !== "Editor");
    
    // Filter project leads from both teamMembers and include additional project leads
    const editorialteamLeads = [
        ...teamMembers.filter(member => member.role === "Editor")
    ];

    return (
        <main className="container py-12 px-4 sm:px-6 max-w-6xl mx-auto overflow-x-hidden">
            <div className="space-y-12">
                {/* Executive Board */}
                <div>
                    <h2 className="text-2xl font-eb-garamond mb-6">Executive Board</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6">
                        {execBoard.map((member) => (
                            <TeamMemberCard key={member.name} member={member} />
                        ))}
                    </div>
                </div>

                {/* Project Leads */}
                <div>
                    <h2 className="text-2xl font-eb-garamond mb-6">Editorial Team</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 gap-6">
                        {editorialteamLeads.map((member) => (
                            <TeamMemberCard key={member.name} member={member} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}