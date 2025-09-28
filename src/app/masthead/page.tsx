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
        name: "Nikhil Chinchalkar",
        role: "President",
        class: "2027",
        major: "Economics",
        image: "/team/Nikhil_Chinchalkar.jpeg",
        color: "bg-[#E5F6FF]",
        bio: "He listed to 79,578 minutes of music last year."
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
        name: "Jenny Williams",
        role: "Editor-in-Chief",
        specialized_role: "Content Editor",
        class: "2027",
        major: "English",
        image: "/team/Jenny_Williams.png",
        color: "bg-[#FFE5D9]",
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
        name: "Melody Qian",
        role: "Project Lead",
        class: "2028",
        major: "Public Policy",
        image: "/team/Melody_Qian.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Remi Ladia",
        role: "Project Lead",
        class: "2028",
        major: "Computer Science",
        image: "/team/Remi_Ladia.jpg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Mei Knight",
        role: "Project Lead",
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
        name: "Vivian Guo",
        role: "Project Lead",
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
        image: "/team/Eden_Maynard.jpeg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Kayla Amkraut",
        role: "Project Lead",
        class: "2028",
        major: "Statistical Science",
        image: "/team/Kayla_Amkraut.jpeg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Marianna Ruggiero",
        role: "Analyst",
        class: "2028",
        major: "Government",
        image: "/team/Marianna_Ruggiero.jpeg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Arjun Maitra",
        role: "Analyst",
        class: "2028",
        major: "Mathematics & Statistics",
        image: "/team/Arjun_Maitra.jpeg",
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
        role: "Project Lead",
        class: "2027",
        major: "Mathematics",
        image: "/team/Milo_Schlittgen-Li.jpeg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Aryan Shah",
        role: "Analyst",
        class: "2028",
        major: "Public Policy",
        image: "/team/Aryan_Shah.jpeg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Emi Labbe",
        role: "Analyst",
        class: "2026",
        major: "Cognitive & Information Science",
        image: "/team/Emiline_Labbe.jpeg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    // {
    //     name: "Stella Ma",
    //     role: "Analyst",
    //     class: "2028",
    //     major: "Biometry & Statistics",
    //     image: "/team/Stella_Ma.png",
    //     color: "bg-[#E5E7FF]",
    //     bio: ""
    // },
    {
        name: "Arianna Hsu",
        role: "Analyst",
        class: "2028",
        major: "Information Science, Systems, & Technology",
        image: "/team/Arianna_Hsu.jpg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Adam Azevedo",
        role: "Analyst",
        class: "2028",
        major: "Urban & Regional Studies",
        image: "/team/Adam_Azevedo.jpg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Anna Kim",
        role: "Analyst",
        class: "2028",
        major: "Biometry & Statistics",
        image: "/team/Anna_Kim.JPG",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Elinor Tu",
        role: "Analyst",
        class: "2028",
        major: "Computer Science, Mathematics",
        image: "/team/Elinor_Tu.jpg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Eric Zhu",
        role: "Analyst",
        class: "2029",
        major: "Biometry & Statistics",
        image: "/team/Eric_Zhu.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Ethan Yang",
        role: "Analyst",
        class: "2028",
        major: "Information Science",
        image: "/team/Ethan_Yang.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Isabella Reyes-Famous",
        role: "Analyst",
        class: "2028",
        major: "Information Science",
        image: "/team/Isabella Reyes_Famous.jpeg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Isha Nagireddy",
        role: "Analyst",
        class: "2029",
        major: "Biometry & Statistics",
        image: "/team/Isha_Nagireddy.jpg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Ivy Liu",
        role: "Analyst",
        class: "2028",
        major: "Information Science",
        image: "/team/Ivy_Liu.jpg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Karl Fadel",
        role: "Analyst",
        class: "2028",
        major: "Information Science",
        image: "/team/Karl_Fadel.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Maia Forssman",
        role: "Analyst",
        class: "2027",
        major: "Computer Science",
        image: "/team/Maia_Forssman.JPEG",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Manya Pradeep Narayan",
        role: "Analyst",
        class: "2029",
        major: "Computer Science",
        image: "/team/Manya_Pradeep_Narayan.jpg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Natan Kramskiy",
        role: "Analyst",
        class: "2029",
        major: "Bioengineering",
        image: "/team/Natan_Kramskiy.jpg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Olivia Yu",
        role: "Analyst",
        class: "2029",
        major: "Computer Science & Math",
        image: "/team/Olivia_Yu.jpg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Rhea Barot",
        role: "Analyst",
        class: "2029",
        major: "Economics",
        image: "/team/Rhea_Barot.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Steven Xu",
        role: "Analyst",
        class: "2028",
        major: "Biometry & Statistics",
        image: "/team/Steven_Xu.jpg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Suchit Basineni",
        role: "Analyst",
        class: "2029",
        major: "Computer Science",
        image: "/team/Suchit_Basineni.jpg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Tristan Albano",
        role: "Analyst",
        class: "2029",
        major: "Information Science",
        image: "/team/Tristan_Albano.jpeg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Winifred Agyei",
        role: "Analyst",
        class: "2027",
        major: "Information Science",
        image: "/team/Winifred_Agyei.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Wonjin Eum",
        role: "Analyst",
        class: "2029",
        major: "Information Science",
        image: "/team/Wonjin_Eum.JPG",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Isabella Guan",
        role: "Analyst",
        class: "2027",
        major: "Mathematics & Computer Science",
        image: "/team/Isabella_Guan.jpeg",
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
                    <Avatar className="z-10 w-20 h-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <AvatarImage className="object-contain" src={`${member.image}`} alt={member.name} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <Avatar className="z-5 w-20 h-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <AvatarImage className="blur-sm" src={`${member.image}`} alt={member.name} />
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
                    <h2 className="text-2xl font-eb-garamond mb-6">Leadership</h2>
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
                {/*<div>
                    <h2 className="text-2xl font-eb-garamond mb-6">Editorial Team</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 gap-6">
                        {editorialteamLeads.map((member) => (
                            <TeamMemberCard key={member.name} member={member} />
                        ))}
                    </div>
                </div>*/}

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
