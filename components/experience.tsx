import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";
import Image from "next/image";

interface ExperienceItemProps {
  logo?: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const ExperienceItem = ({
  logo,
  title,
  company,
  period,
  description,
  technologies,
}: ExperienceItemProps) => {
  return (
    <div className="relative pl-8 not-last:pb-12">
      {/* Timeline line */}
      <div className="absolute left-0 top-4.5 h-full w-[2px] bg-muted group-first:h-[calc(100%-24px)] group-first:top-6">
        <div className="absolute h-3 w-3 -left-[5px] top-0 rounded-full border-2 border-primary bg-background" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 size-12 flex items-center justify-center">
            {logo ? (
              <Image
                src={`/companies/${logo}.png`}
                alt={`${company} logo`}
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
            ) : (
              <div className="rounded-full bg-accent">
                <Building2 className="size-5 text-muted-foreground" />
              </div>
            )}
          </div>
          <span className="text-lg font-semibold">{company}</span>
        </div>
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          <div className="flex items-center gap-2 mt-1 text-sm">
            <Calendar className="size-4" />
            <span>{period}</span>
          </div>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      logo: "pisopay",
      title: "Frontend Web Developer",
      company: "Pisopay.com",
      period: "2021 - 2023",
      description:
        "Developed and maintained frontend features for fintech web applications, transforming business requirements into responsive user interfaces. Collaborated with cross-functional teams, created UI designs in Figma, and improved development workflows by helping distribute tasks within the frontend team. Ensured high-quality code through consistent refinement and adherence to best practices.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "Figma"],
    },
    {
      title: "Co-Founder and CTO",
      company: "Hero Innovations",
      period: "2017 - 2021",
      description:
        "Led end-to-end development of mobile applications and backend systems, overseeing product planning, UX design, API development, and infrastructure setup. Built Android and iOS apps, implemented secure authentication and payment integrations, and deployed scalable server environments on AWS Lightsail. Managed feature delivery, resolved production issues, and guided the team through multiple award-winning hackathons.",
      technologies: ["Android (Java)", "iOS (Swift)", "Node.js", "MySQL", "AWS Lightsail", "Vue.js"],
    },
    {
      logo: "ralp-games",
      title: "Game Programmer",
      company: "Ralp Games",
      period: "2015 - 2017",
      description:
        "Designed and developed mobile game features using Unity3D and C#, including level design, UI flows, and game logic. Collaborated closely with artists to bring concepts to life, optimized performance for mobile platforms, and published games for Android and iOS. Contributed to brainstorming and prototyping new game ideas from the ground up.",
      technologies: ["Unity3D", "C#", "Java", "Photoshop"],
    },
    {
      logo: "hcl",
      title: "Network Engineer Intern",
      company: "HCLTech",
      period: "2015",
      description:
        "Assisted in network configuration, troubleshooting, and monitoring tasks while gaining hands-on experience with enterprise IT infrastructure. Supported engineers in documenting processes, validating connectivity, and maintaining stable network operations.",
      technologies: ["Networking", "Troubleshooting", "Documentation"],
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Experience
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Professional Journey
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            A timeline of my professional growth and key achievements
          </p>
        </div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
