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
        image: "/team/FA26/webp/Nikhil_Chinchalkar.webp",
        color: "bg-[#E5F6FF]",
        bio: "He listened to 75,835 minutes of music last year."
    },
    {
        name: "Tianyi Chen",
        role: "Executive Vice President",
        class: "2028",
        major: "Biometry & Statistics",
        image: "/team/FA26/webp/Tianyi_Chen.webp",
        color: "bg-[#E5E7FF]",
        bio: "She has three 6's in her birthday."
    },
    {
        name: "Jenny Williams",
        role: "Editor-in-Chief",
        specialized_role: "Content Editor",
        class: "2027",
        major: "English",
        image: "/team/FA26/webp/Jenny_Williams.webp",
        color: "bg-[#FFE5D9]",
        bio: "She has had 8 pets in her life."
    },
    {
        name: "Eden Maynard",
        role: "VP of Internal Affairs",
        class: "2028",
        major: "Statistics",
        image: "/team/FA26/webp/Eden_Maynard.webp",
        color: "bg-[#E5FFE9]",
        bio: "She is in the top 0.1% of Solange listeners on Spotify."
    },
    {
        name: "Melody Qian",
        role: "VP of External Affairs",
        class: "2028",
        major: "Public Policy",
        image: "/team/FA26/webp/Melody_Qian.webp",
        color: "bg-[#E5F6FF]",
        bio: "She is in the top 0.69% of monkeytype users in WPM."
    },
    {
        name: "Remi Ladia",
        role: "Project Coordinator",
        class: "2028",
        major: "Computer Science",
        image: "/team/FA26/webp/Remi_Ladia.webp",
        color: "bg-[#E5E7FF]",
        bio: "She has 1,605 unread iMessages."
    },
    {
        name: "Dana Yang",
        role: "Faculty Mentor",
        class: "",
        major: "",
        image: "/team/FA26/webp/Dana_Yang.webp",
        color: "bg-[#FFE5D9]",
        bio: "Dana is an assistant professor at Cornell in the department of statistics and data science."
    },

    // PROJECT LEADS

    {
        name: "Kayla Amkraut",
        role: "Project Lead",
        class: "2028",
        major: "Statistical Science",
        image: "/team/FA26/webp/Kayla_Amkraut.webp",
        color: "bg-[#F0E5FF]",
        bio: "She has lived in 4 states."
    },
    {
        name: "Tristan Albano",
        role: "Project Lead",
        class: "2029",
        major: "Information Science",
        image: "/team/FA26/webp/Tristan_Albano.webp",
        color: "bg-[#F0E5FF]",
        bio: "He has 3 dogs."
    },
    {
        name: "Suchit Basineni",
        role: "Project Lead",
        class: "2029",
        major: "Computer Science",
        image: "/team/FA26/webp/Suchit_Basineni.webp",
        color: "bg-[#E5E7FF]",
        bio: "He has 1,594 hours on Brawl Stars."
    },
    {
        name: "Elinor Tu",
        role: "Project Lead",
        class: "2028",
        major: "Computer Science, Mathematics",
        image: "/team/FA26/webp/Elinor_Tu.webp",
        color: "bg-[#E5E7FF]",
        bio: "She has traveled to 10 different countries."
    },
    {
        name: "Eric Zhu",
        role: "Project Lead",
        class: "2029",
        major: "Biometry & Statistics",
        image: "/team/FA26/webp/Eric_Zhu.webp",
        color: "bg-[#E5E7FF]",
        bio: "He studied 30,000 flashcards last year."
    },
    {
        name: "Rhea Barot",
        role: "Project Lead",
        class: "2029",
        major: "Economics",
        image: "/team/FA26/webp/Rhea_Barot.webp",
        color: "bg-[#E5E7FF]",
        bio: "She has been to 15 countries."
    },
    {
        name: "Jason Wang",
        role: "Project Lead",
        class: "2027",
        major: "Computer Science",
        image: "/team/FA26/webp/Jason_Wang.webp",
        color: "bg-[#E5E7FF]",
        bio: "He drinks 200% the daily water intake of the average American."
    },
    {
        name: "Maylani Lee",
        role: "Project Lead",
        class: "2028",
        major: "Biometry & Statistics",
        image: "/team/FA26/webp/Maylani_Lee.webp",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Alannah Dennis",
        role: "Project Lead",
        class: "2027",
        major: "Statistics",
        image: "/team/FA26/webp/Alannah_Dennis.webp",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    // ANALYSTS
    // {
    //     name: "Vivian Guo",
    //     role: "Project Lead",
    //     class: "2028",
    //     major: "Biometry & Statistics",
    //     image: "/team/SP26/webp/Vivian_Guo.webp",
    //     color: "bg-[#F0E5FF]",
    //     bio: "She has 821 notes on her phone."
    // },
    // {
    //     name: "Emily Fu",
    //     role: "Analyst",
    //     class: "2027",
    //     major: "Statistical Science",
    //     image: "/team/SP26/webp/Emily_Fu.webp",
    //     color: "bg-[#E5E7FF]",
    //     bio: "She watched 37 movies last year."
    // },
    // {
    //     name: "Manya Pradeep Narayan",
    //     role: "Analyst",
    //     class: "2029",
    //     major: "Computer Science",
    //     image: "/team/SP26/webp/Manya_Pradeep_Narayan.webp",
    //     color: "bg-[#E5E7FF]",
    //     bio: "Her step count increased by 151.9% at Cornell."
    // },
    {
        name: "Anna Kim",
        role: "Analyst",
        class: "2028",
        major: "Biometry & Statistics",
        image: "/team/FA26/webp/Anna_Kim.webp",
        color: "bg-[#E5E7FF]",
        bio: "Her average typing speed is 140 words per minute."
    },
    {
        name: "Deborah Biru",
        role: "Analyst",
        class: "2028",
        major: "Biometry & Statistics",
        image: "/team/FA26/webp/Deborah_Biru.webp",
        color: "bg-[#E5E7FF]",
        bio: "She can solve a Rubik's Cube in under 60 seconds."
    },
    // {
    //     name: "Isabella Reyes-Famous",
    //     role: "Analyst",
    //     class: "2028",
    //     major: "Information Science",
    //     image: "/team/SP26/webp/Isabella Reyes_Famous.webp",
    //     color: "bg-[#E5E7FF]",
    //     bio: "She has a 4.93 rating on Uber."
    // },
    {
        name: "Chloe Kritas",
        role: "Analyst",
        class: "2027",
        major: "Hotel Administration",
        image: "/team/FA26/webp/Chloe_Kritas.webp",
        color: "bg-[#E5E7FF]",
        bio: "She can juggle 4 balls."
    },
    // {
    //     name: "Cindy Weng",
    //     role: "Analyst",
    //     class: "2027",
    //     major: "Economics and Statistics",
    //     image: "/team/SP26/webp/Cindy_Weng.webp",
    //     color: "bg-[#E5E7FF]",
    //     bio: ""
    // },
    {
        name: "Graco Rossanigo",
        role: "Analyst",
        class: "2029",
        major: "Economics",
        image: "/team/FA26/webp/Graco_Rossanigo.webp",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Emily Fang",
        role: "Analyst",
        class: "2029",
        major: "Statistical Science",
        image: "/team/FA26/webp/Emily_Fang.webp",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Shivani Anand",
        role: "Analyst",
        class: "2029",
        major: "Statistical Science",
        image: "/team/FA26/webp/Shivani_Anand.webp",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Roma Rangaswamy",
        role: "Analyst",
        class: "2029",
        major: "Computer Science",
        image: "/team/FA26/webp/Roma_Rangaswamy.webp",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Sanjana Bajaj",
        role: "Analyst",
        class: "2028",
        major: "Biometry and Statistics",
        image: "/team/FA26/webp/Sanjana_Bajaj.webp",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    // {
    //     name: "Elom Eskender",
    //     role: "Analyst",
    //     class: "2029",
    //     major: "Computer Science",
    //     image: "/team/SP26/webp/Elom_Eskender.webp",
    //     color: "bg-[#E5E7FF]",
    //     bio: ""
    // },
    {
        name: "Veronica Ma",
        role: "Analyst",
        class: "2028",
        major: "Comparative Literature",
        image: "/team/FA26/webp/Veronica_Ma.webp",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    {
        name: "Himashi Balasuriya",
        role: "Analyst",
        class: "2029",
        major: "Earth and Atmospheric Science",
        image: "/team/FA26/webp/Himashi_Balasuriya.webp",
        color: "bg-[#E5E7FF]",
        bio: ""
    },
    // {
    //     name: "Chris Jeong",
    //     role: "Analyst",
    //     class: "2028",
    //     major: "Environment and Sustainability",
    //     image: "/team/SP26/webp/Chris_Jeong.webp",
    //     color: "bg-[#E5E7FF]",
    //     bio: ""
    // },
    {
        name: "Kynes Cabrera",
        role: "Analyst",
        class: "2029",
        major: "Industrial Labor Relations",
        image: "/team/FA26/webp/Kynes_Cabrera.webp",
        color: "bg-[#E5E7FF]",
        bio: "He is 5 inches shorter than his license claims."
    },
    {
        name: "Clare Gartz",
        role: "Analyst",
        class: "2030",
        major: "Operations Research and Engineering",
        image: "/team/FA26/webp/Clare_Gartz.webp",
        color: "bg-[#E5E7FF]",
        bio: "She has 613 screenshots on her phone from Summer 2026 alone."
    },
    {
        name: "Saanvi Movva",
        role: "Analyst",
        class: "2029",
        major: "ORIE and ISST",
        image: "/team/FA26/webp/Saanvi_Movva.webp",
        color: "bg-[#E5E7FF]",
        bio: "Her average daily step count is 11,718."
    },
    {
        name: "Ethan Gao",
        role: "Analyst",
        class: "2030",
        major: "Economics and Statistical Science",
        image: "/team/FA26/webp/Ethan_Gao.webp",
        color: "bg-[#E5E7FF]",
        bio: "He once drank 4 Red Bulls in one hour."
    },
    {
        name: "Landin Huang",
        role: "Analyst",
        class: "2029",
        major: "Statistical Science",
        image: "/team/FA26/webp/Landin_Huang.webp",
        color: "bg-[#E5E7FF]",
        bio: "He has lived in 3 states."
    },
    {
        name: "Maya Dixit",
        role: "Analyst",
        class: "2029",
        major: "Statistical Science",
        image: "/team/FA26/webp/Maya_Dixit.webp",
        color: "bg-[#E5E7FF]",
        bio: "She plays 3 instruments."
    },
    {
        name: "Abby Childs",
        role: "Analyst",
        class: "2029",
        major: "Environmental Engineering",
        image: "/team/FA26/webp/Abby_Childs.webp",
        color: "bg-[#E5E7FF]",
        bio: "She has collected over 15 nutcrackers."
    },
    {
        name: "Stephanie Bossolina",
        role: "Analyst",
        class: "2029",
        major: "Biometry and Statistics",
        image: "/team/FA26/webp/Stephanie_Bossolina.webp",
        color: "bg-[#E5E7FF]",
        bio: "She twisted her right ankle 3 times in the span of 2 years."
    },
    {
        name: "Rukma Chaudhury",
        role: "Analyst",
        class: "2029",
        major: "Public Policy",
        image: "/team/FA26/webp/Rukma_Chaudhury.webp",
        color: "bg-[#E5E7FF]",
        bio: "She has 162 playlists on Spotify."
    },
    {
        name: "Medha Singitham",
        role: "Analyst",
        class: "2030",
        major: "Cognitive Science + Computer Science",
        image: "/team/FA26/webp/Medha_Singitham.webp",
        color: "bg-[#E5E7FF]",
        bio: "She eats an average of 3 pickle spears per day."
    },
    {
        name: "Sophia Wang",
        role: "Analyst",
        class: "2030",
        major: "Computer Science",
        image: "/team/FA26/webp/Sophia_Wang.webp",
        color: "bg-[#E5E7FF]",
        bio: "Her average book rating on Goodreads is 3.83 stars."
    },
    {
        name: "Jayson Bhoorasingh",
        role: "Analyst",
        class: "2030",
        major: "Statistical Science",
        image: "/team/FA26/webp/Jayson_Bhoorasingh.webp",
        color: "bg-[#E5E7FF]",
        bio: "He has produced a song with over 4 million streams."
    },
    {
        name: "Sanithu Mohottige",
        role: "Analyst",
        class: "2028",
        major: "ORIE",
        image: "/team/FA26/webp/Sanithu_Kethaka_Parattu_Mohottige.webp",
        color: "bg-[#E5E7FF]",
        bio: "All the numbers in his birthday are divisible by 5."
    },
    // {
    //     name: "Conner McWilliams",
    //     role: "Analyst",
    //     class: "2030",
    //     major: "Computer Science",
    //     image: "/team/FA26/webp/Conner_McWilliams.webp",
    //     color: "bg-[#E5E7FF]",
    //     bio: "Last summer, he increased his continuous swim distance by 400%."
    // },
    {
        name: "Amanda Harmon",
        role: "Analyst",
        class: "2029",
        major: "Computer Science, Mathematics",
        image: "/team/FA26/webp/Amanda_Harmon.webp",
        color: "bg-[#E5E7FF]",
        bio: "She has 2 scuba diving certifications."
    },
    {
        name: "Emmett Ferguson",
        role: "Analyst",
        class: "2030",
        major: "Applied and Engineering Physics",
        image: "/team/FA26/webp/Emmett_Ferguson.webp",
        color: "bg-[#E5E7FF]",
        bio: "He has a minerals collection with 633 distinct specimens."
    },
    {
        name: "Katrina Lee",
        role: "Analyst",
        class: "2029",
        major: "Mathematics and Economics",
        image: "/team/FA26/webp/Katrina_Lee.webp",
        color: "bg-[#E5E7FF]",
        bio: "Her extreme sudoku best time is 3:03."
    },
    {
        name: "Jahnavi Singh",
        role: "Analyst",
        class: "2030",
        major: "Computer Science",
        image: "/team/FA26/webp/Jahnavi_Singh.webp",
        color: "bg-[#E5E7FF]",
        bio: "She has lived in 6 cities."
    },

];

// const additionalProjectLeads: TeamMember[] = Array(7).fill(null).map((_, i) => ({
//     name: `Project Lead ${i + 1}`,
//     role: "Project Lead",
//     class: `${Math.floor(Math.random() * 4) + 24}`,
//     major: "Various",
//     image: "/images/wall.webp",
//     color: `bg-[${['#FFE5D9', '#E5F6FF', '#F0E5FF', '#E5FFE9', '#FFE8E5'][i % 5]}]`
// }));

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
