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

// paused members are commented
const teamMembers: TeamMember[] = [
    // LEADERSHIP

    {
        name: "Nikhil Chinchalkar",
        role: "President",
        class: "2027",
        major: "Economics",
        image: "/team/SP26/Nikhil_Chinchalkar.jpeg",
        color: "bg-[#E5F6FF]",
        bio: "He listed to 75,835 minutes of music last year."
    },
    {
        name: "Tianyi Chen",
        role: "Executive Vice President",
        class: "2028",
        major: "Biometry & Statistics",
        image: "/team/SP26/Tianyi_Chen.JPG",
        color: "bg-[#E5E7FF]",
        bio: "She has three 6's in her birthday."
    },
    {
        name: "Jenny Williams",
        role: "Editor-in-Chief",
        specialized_role: "Content Editor",
        class: "2027",
        major: "English",
        image: "/team/SP26/Jenny_Williams.png",
        color: "bg-[#FFE5D9]",
        bio: ""
    },
    {
        name: "Eden Maynard",
        role: "VP of Internal Affairs",
        class: "2028",
        major: "Statistics",
        image: "/team/SP26/Eden_Maynard.jpeg",
        color: "bg-[#E5FFE9]",
        bio: "She is in the top 0.1% of Solange listeners on Spotify."
    },
    {
        name: "Melody Qian",
        role: "VP of External Affairs",
        class: "2028",
        major: "Public Policy",
        image: "/team/SP26/Melody_Qian.png",
        color: "bg-[#E5F6FF]",
        bio: "She is in the top 0.69% of monkeytype users in WPM."
    },
    {
        name: "Remi Ladia",
        role: "Project Coordinator",
        class: "2028",
        major: "Computer Science",
        image: "/team/SP26/Remi_Ladia.jpg",
        color: "bg-[#E5E7FF]",
        bio: "She has 1,605 unread iMessages."
    },
    {
        name: "Dana Yang",
        role: "Faculty Mentor",
        class: "",
        major: "",
        image: "/team/SP26/Dana_Yang.png",
        color: "bg-[#FFE5D9]",
        bio: "Dana is an assistant professor at Cornell in the department of statistics and data science."
    },

    // PROJECT LEADS

    {
        name: "Vivian Guo",
        role: "Project Lead",
        class: "2028",
        major: "Biometry & Statistics",
        image: "/team/SP26/Vivian_Guo.jpeg",
        color: "bg-[#F0E5FF]",
        bio: "She has 821 notes on her phone."
    },
    {
        name: "Kayla Amkraut",
        role: "Project Lead",
        class: "2028",
        major: "Statistical Science",
        image: "/team/SP26/Kayla_Amkraut.jpeg",
        color: "bg-[#F0E5FF]",
        bio: "She has lived in 4 states."
    },
    {
        name: "Maia Forssman",
        role: "Project Lead",
        class: "2027",
        major: "Computer Science",
        image: "/team/SP26/Maia_Forssman.JPEG",
        color: "bg-[#F0E5FF]",
        bio: "She visits CTB 9 times a week on average."
    },
    {
        name: "Tristan Albano",
        role: "Project Lead",
        class: "2029",
        major: "Information Science",
        image: "/team/SP26/Tristan_Albano.jpeg",
        color: "bg-[#F0E5FF]",
        bio: "He has 3 dogs."
    },
    {
        name: "Benjamin Beer",
        role: "Project Lead",
        class: "2028",
        major: "Biology",
        image: "/team/SP26/Benjamin_Beer.jpg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Suchit Basineni",
        role: "Project Lead",
        class: "2029",
        major: "Computer Science",
        image: "/team/SP26/Suchit_Basineni.jpg",
        color: "bg-[#E5E7FF]",
        bio: "He has 1,594 hours on Brawl Stars."
    },
    {
        name: "Mei Knight",
        role: "Project Lead",
        class: "2028",
        major: "Statistical Science",
        image: "/team/SP26/Mei_Knight.jpeg",
        color: "bg-[#E5E7FF]",
        bio: "She has literally traveled around the globe."
    },
    // ANALYSTS

    // {
    //     name: "Marianna Ruggiero",
    //     role: "Analyst",
    //     class: "2028",
    //     major: "Government",
    //     image: "/team/SP26/Marianna_Ruggiero.jpeg",
    //     color: "bg-[#E5E7FF]",
    //     bio: ""
    // },
    {
        name: "Steven Xu",
        role: "Analyst",
        class: "2028",
        major: "Biometry & Statistics",
        image: "/team/SP26/Steven_Xu.jpg",
        color: "bg-[#F0E5FF]",
        bio: "His basketball jersey number is 15."
    },
    // {
    //     name: "Ivy Liu",
    //     role: "Analyst",
    //     class: "2028",
    //     major: "Information Science",
    //     image: "/team/SP26/Ivy_Liu.jpg",
    //     color: "bg-[#E5E7FF]",
    //     bio: "Her favorite number is 2."
    // },
    {
        name: "Emily Fu",
        role: "Analyst",
        class: "2027",
        major: "Statistical Science",
        image: "/team/SP26/Emily_Fu.jpg",
        color: "bg-[#E5E7FF]",
        bio: "She watched 37 movies last year."
    },
    // {
    //     name: "Milo Schilittgen-Li",
    //     role: "Project Lead",
    //     class: "2027",
    //     major: "Mathematics",
    //     image: "/team/SP26/Milo_Schlittgen-Li.jpeg",
    //     color: "bg-[#E5E7FF]",
    //     bio: ""
    // },
    // {
    //     name: "Adam Azevedo",
    //     role: "Analyst",
    //     class: "2028",
    //     major: "Urban & Regional Studies",
    //     image: "/team/SP26/Adam_Azevedo.jpg",
    //     color: "bg-[#E5E7FF]",
    //     bio: ""
    // }, 
    {
        name: "Manya Pradeep Narayan",
        role: "Analyst",
        class: "2029",
        major: "Computer Science",
        image: "/team/SP26/Manya_Pradeep_Narayan.jpg",
        color: "bg-[#E5E7FF]",
        bio: "Her step count increased by 151.9% at Cornell."
    },
    // {
    //     name: "Stella Ma",
    //     role: "Analyst",
    //     class: "2028",
    //     major: "Biometry & Statistics",
    //     image: "/team/SP26/Stella_Ma.png",
    //     color: "bg-[#E5E7FF]",
    //     bio: ""
    // },
    {
        name: "Anna Kim",
        role: "Analyst",
        class: "2028",
        major: "Biometry & Statistics",
        image: "/team/SP26/Anna_Kim.JPG",
        color: "bg-[#E5E7FF]",
        bio: "Her average typing speed is 140 words per minute."
    },
    {
        name: "Deborah Biru",
        role: "Analyst",
        class: "2028",
        major: "Biometry & Statistics",
        image: "/team/SP26/Deborah_Biru.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Elinor Tu",
        role: "Analyst",
        class: "2028",
        major: "Computer Science, Mathematics",
        image: "/team/SP26/Elinor_Tu.jpg",
        color: "bg-[#E5E7FF]",
        bio: "She has traveled to 10 different countries."
    },
    {
        name: "Eric Zhu",
        role: "Analyst",
        class: "2029",
        major: "Biometry & Statistics",
        image: "/team/SP26/Eric_Zhu.png",
        color: "bg-[#E5E7FF]",
        bio: "He studied 30,000 flashcards last year."
    },
    // {
    //     name: "Ethan Yang",
    //     role: "Analyst",
    //     class: "2028",
    //     major: "Information Science",
    //     image: "/team/SP26/Ethan_Yang.png",
    //     color: "bg-[#E5E7FF]",
    //     bio: ""
    // },
    {
        name: "Isabella Reyes-Famous",
        role: "Analyst",
        class: "2028",
        major: "Information Science",
        image: "/team/SP26/Isabella Reyes_Famous.jpeg",
        color: "bg-[#E5E7FF]",
        bio: "She has a 4.93 rating on Uber."
    },
    // {
    //     name: "Isha Nagireddy",
    //     role: "Analyst",
    //     class: "2029",
    //     major: "Biometry & Statistics",
    //     image: "/team/SP26/Isha_Nagireddy.jpg",
    //     color: "bg-[#E5E7FF]",
    //     bio: "She hates the number 3."
    // },
    {
        name: "Natan Kramskiy",
        role: "Analyst",
        class: "2029",
        major: "Bioengineering",
        image: "/team/SP26/Natan_Kramskiy.jpg",
        color: "bg-[#E5E7FF]",
        bio: "He has watched the Lord of the Rings trilogy 8 times."
    },
    // {
    //     name: "Olivia Yu",
    //     role: "Analyst",
    //     class: "2029",
    //     major: "Computer Science & Math",
    //     image: "/team/SP26/Olivia_Yu.jpg",
    //     color: "bg-[#E5E7FF]",
    //     bio: "She has lost her water bottle 38 times this year."
    // },
    {
        name: "Rhea Barot",
        role: "Analyst",
        class: "2029",
        major: "Economics",
        image: "/team/SP26/Rhea_Barot.png",
        color: "bg-[#E5E7FF]",
        bio: "She has been to 15 countries."
    },
    // {
    //     name: "Ellie Cha",
    //     role: "Analyst",
    //     class: "2027",
    //     major: "Biometry and Statistics",
    //     image: "/team/SP26/Ellie_Cha.jpg",
    //     color: "bg-[#E5E7FF]",
    //     bio: ""
    // },
    {
        name: "Chloe Kritas",
        role: "Analyst",
        class: "2027",
        major: "Hotel Administration",
        image: "/team/SP26/Chloe_Kritas.jpeg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Rishik Gowrishetti",
        role: "Analyst",
        class: "2028",
        major: "Statistical Science",
        image: "/team/SP26/Rishik_Gowrishetti.jpg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Jason Wang",
        role: "Analyst",
        class: "2027",
        major: "Computer Science",
        image: "/team/SP26/Jason_Wang.jpeg",
        color: "bg-[#E5E7FF]",
        bio: "He drinks 200% the daily water intake of the average American."
    },
    {
        name: "Cindy Weng",
        role: "Analyst",
        class: "2027",
        major: "Economics and Statistics",
        image: "/team/SP26/Cindy_Weng.jpg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    // {
    //     name: "Winifred Agyei",
    //     role: "Analyst",
    //     class: "2027",
    //     major: "Information Science",
    //     image: "/team/SP26/Winifred_Agyei.png",
    //     color: "bg-[#E5E7FF]",
    //     bio: ""
    // }
    {
        name: "Charlie Graham",
        role: "Analyst",
        class: "2029",
        major: "Information Science",
        image: "/team/SP26/Charlie_Graham.jpg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Maylani Lee",
        role: "Analyst",
        class: "2028",
        major: "Biometry & Statistics",
        image: "/team/SP26/Maylani_Lee.jpg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Graco Rossanigo",
        role: "Analyst",
        class: "2029",
        major: "Economics",
        image: "/team/SP26/Graco_Rossanigo.jpg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Jason Kim",
        role: "Analyst",
        class: "2028",
        major: "ORIE",
        image: "/team/SP26/Jason_Kim.jpeg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Jarmin Weng",
        role: "Analyst",
        class: "2029",
        major: "Computer Science and Math",
        image: "/team/SP26/Jarmin_Weng.jpg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Emily Fang",
        role: "Analyst",
        class: "2029",
        major: "Statistical Science",
        image: "/team/SP26/Emily_Fang.jpeg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Shivani Anand",
        role: "Analyst",
        class: "2029",
        major: "Statistical Science",
        image: "/team/SP26/Shivani_Anand.jpg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Roma Rangaswamy",
        role: "Analyst",
        class: "2029",
        major: "Computer Science",
        image: "/team/SP26/Roma_Rangaswamy.jpeg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Sanjana Bajaj",
        role: "Analyst",
        class: "2028",
        major: "Biometry and Statistics",
        image: "/team/SP26/Sanjana_Bajaj.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Elom Eskender",
        role: "Analyst",
        class: "2029",
        major: "Computer Science",
        image: "/team/SP26/Elom_Eskender.JPG",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Caitlin Bochere",
        role: "Analyst",
        class: "2028",
        major: "Statistics",
        image: "/team/SP26/Caitlin_Bochere.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Veronica Ma",
        role: "Analyst",
        class: "2028",
        major: "Comparative Literature",
        image: "/team/SP26/Veronica_Ma.jpg",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Alannah Dennis",
        role: "Analyst",
        class: "2027",
        major: "Statistics",
        image: "/team/SP26/Alannah_Dennis.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Himashi Balasuriya",
        role: "Analyst",
        class: "2029",
        major: "Earth and Atmospheric Science",
        image: "/team/SP26/Himashi_Balasuriya.png",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Chris Jeong",
        role: "Analyst",
        class: "2028",
        major: "Environment and Sustainability",
        image: "/team/SP26/Chris_Jeong.png",
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
