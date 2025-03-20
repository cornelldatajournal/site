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
        major: "Information Science & Applied Economics",
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
        bio: "He usually drinks ~200% the daily water intake of the average American male"
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
        image: "/team/Jenny_Williams.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Steven Zhou",
        role: "Emeritus Analyst",
        class: "2026",
        major: "Environment & Sustainability & Information Science",
        image: "/team/Steven_Zhou.jpg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Grace Chen",
        role: "Analyst",
        class: "2028",
        major: "Biometry & Statistics",
        image: "/team/Grace_Chen.jpeg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Sarah Swee",
        role: "Project Lead",
        class: "2027",
        major: "ILR",
        image: "/team/Sarah_Swee.jpeg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Ellie Cha",
        role: "Project Lead",
        class: "2027",
        major: "Biometry & Statistics",
        image: "/team/Ellie_Cha.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Melody Qian",
        role: "Analyst",
        class: "2028",
        major: "Public Policy",
        image: "/team/Melody_Qian.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "William Rhee",
        role: "Analyst",
        class: "2026",
        major: "Mathematics & Computer Science",
        image: "/team/William_Rhee.jpg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Remi Ladia",
        role: "Analyst",
        class: "2028",
        major: "Computer Science",
        image: "/team/Remi_Ladia.jpg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Michael Chen",
        role: "Analyst",
        class: "2028",
        major: "Mathematics & Computer Science",
        image: "/team/Michael_Chen.JPG",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Mei Knight",
        role: "Analyst",
        class: "2028",
        major: "Statistical Science",
        image: "/team/Mei_Knight.jpeg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Tianyi Chen",
        role: "Project Lead",
        class: "2028",
        major: "Biometry & Statistics",
        image: "/team/Tianyi_Chen.JPG",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Ellen Foreman",
        role: "Project Lead",
        class: "2027",
        major: "Computer Science",
        image: "/team/Ellen_Foreman.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Stella Zhang",
        role: "Analyst",
        class: "2026",
        major: "Information Science",
        image: "/team/Stella_Zhang.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Vivian Guo",
        role: "Analyst",
        class: "2028",
        major: "Biometry & Statistics",
        image: "/team/Vivian_Guo.jpeg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Natalie Miller",
        role: "Project Lead",
        class: "2028",
        major: "Economics & Statistics",
        image: "/team/Natalie_Miller.jpeg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Eden Maynard",
        role: "Project Lead",
        class: "2028",
        major: "Statistics",
        image: "/team/Eden_Maynard.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Deborah Biru",
        role: "Analyst",
        class: "2028",
        major: "Biometry & Statistics",
        image: "/team/Deborah_Biru.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Omowunmi Akingbola",
        role: "Analyst",
        class: "2026",
        major: "Information Science",
        image: "/team/Omowunmi_Akingbola.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Kayla Amkraut",
        role: "Analyst",
        class: "2028",
        major: "Statistical Science",
        image: "/team/Kayla_Amkraut.jpeg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Ella Sanchez",
        role: "Analyst",
        class: "2028",
        major: "Communication",
        image: "/team/Ella_Sanchez.jpg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Marianna Ruggiero",
        role: "Analyst",
        class: "2028",
        major: "Government",
        image: "/team/Marianna_Ruggiero.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Arjun Maitra",
        role: "Project Lead",
        class: "2028",
        major: "Mathematics & Statistics",
        image: "/team/Arjun_Maitra.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Benjamin Beer",
        role: "Analyst",
        class: "2028",
        major: "Biological Science",
        image: "/team/Benjamin_Beer.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Gemie Sonamai",
        role: "Analyst",
        class: "2028",
        major: "Statistical Science",
        image: "/team/Gemie_Sonamai.jpeg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Orion Hoch",
        role: "Analyst",
        class: "2028",
        major: "Computer Science",
        image: "/team/Orion_Hoch.jpg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Emily Fu",
        role: "Analyst",
        class: "2027",
        major: "Statistical Science",
        image: "/team/Emily_Fu.jpg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Milo Schilittgen-Li",
        role: "Analyst",
        class: "2027",
        major: "Mathematics",
        image: "/team/Milo_Schilittgen-Li.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Cooper Davis",
        role: "Analyst",
        class: "2027",
        major: "Statistical Science",
        image: "/team/Cooper_Davis.jpg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Ojas Bharadwaj",
        role: "Analyst",
        class: "2028",
        major: "Mathematics",
        image: "/team/Ojas_Bharadwaj.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Aakshay Gupta",
        role: "Analyst",
        class: "2026",
        major: "Operations Research & Information Engineering",
        image: "/team/Aakshay_Gupta.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Claron Wang",
        role: "Analyst",
        class: "2028",
        major: "Statistical Science",
        image: "/team/Claron_Wang.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Arnav Shah",
        role: "Analyst",
        class: "2028",
        major: "Computer Science",
        image: "/team/Arnav_Shah.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Aryan Shah",
        role: "Analyst",
        class: "2028",
        major: "Public Policy",
        image: "/team/Aryan_Shah.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Salena Tang",
        role: "Analyst",
        class: "2027",
        major: "Computer Science & Mathematics",
        image: "/team/Salena_Tang.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Emi Labbe",
        role: "Analyst",
        class: "2026",
        major: "Cognitive & Information Science",
        image: "/team/Emi_Labbe.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "David Suarez",
        role: "Analyst",
        class: "2027",
        major: "American Studies",
        image: "/team/David_Suarez.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Lillian Wang",
        role: "Analyst",
        class: "2028",
        major: "Computer Science & Linguistics",
        image: "/team/Lillian_Wang.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Isabella Wang",
        role: "Analyst",
        class: "2028",
        major: "Agricultura Sciences & Environment & Sustainability",
        image: "/team/Isabella_Wang.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Jaithra Nagindas",
        role: "Analyst",
        class: "2028",
        major: "Mathematics & Computer Science",
        image: "/team/Jaithra_Nagindas.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Ricky Cheng",
        role: "Analyst",
        class: "2027",
        major: "Biometry & Statistics",
        image: "/team/Ricky_Cheng.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Stella Ma",
        role: "Analyst",
        class: "2028",
        major: "Biometry & Statistics",
        image: "/team/Stella_Ma.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Cindy Weng",
        role: "Analyst",
        class: "2027",
        major: "Economics & Statistics",
        image: "/team/Cindy_Weng.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Kyleena Xin",
        role: "Project Lead",
        class: "2027",
        major: "Information Science",
        image: "/team/Kyleena_Xin.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Dora Zhang",
        role: "Project Lead",
        class: "2028",
        major: "Computer Science",
        image: "/team/Dora_Zhang.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Rishik Gowrishetti",
        role: "Project Lead",
        class: "2028",
        major: "Statistical Science",
        image: "/team/Rishik_Gowrishetti.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
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
    const execBoard = teamMembers.filter(member => member.role !== "Editor" && !member.role.includes("Analyst") && member.role !== "Project Lead");
    
    // Filter project leads from both teamMembers and include additional project leads
    const editorialteamLeads = [
        ...teamMembers.filter(member => member.role === "Editor")
    ];

    const projectTeamLeads = [
        ...teamMembers.filter(member => member.role === "Project Lead")
    ];

    // Include anyone with "Analyst" in their title
    const analysts = [...teamMembers.filter(member => member.role.includes("Analyst"))];

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
                    <h2 className="text-2xl font-eb-garamond mb-6">Project Leads</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 gap-6">
                        {projectTeamLeads.map((member) => (
                            <TeamMemberCard key={member.name} member={member} />
                        ))}
                    </div>
                </div>

                {/* Editorial Team */}
                <div>
                    <h2 className="text-2xl font-eb-garamond mb-6">Editorial Team</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 gap-6">
                        {editorialteamLeads.map((member) => (
                            <TeamMemberCard key={member.name} member={member} />
                        ))}
                    </div>
                </div>

                {/* Analysts */}
                <div>
                    <h2 className="text-2xl font-eb-garamond mb-6">Analysts</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-6">
                        {analysts.map((member) => (
                            <TeamMemberCard key={member.name} member={member} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
