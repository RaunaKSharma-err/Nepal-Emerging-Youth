import { Mail, Linkedin, Twitter } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { TeamMember } from "@/types";
import { cn } from "@/lib/utils";

interface TeamMemberCardProps {
  member: TeamMember;
  className?: string;
}

function getInitials(name: string): string {
  const cleaned = name.replace(/[[\]]/g, "").trim();
  const parts = cleaned.split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return cleaned.slice(0, 2).toUpperCase();
}

export function TeamMemberCard({ member, className }: TeamMemberCardProps) {
  return (
    <div
      className={cn(
        "group flex flex-col items-center rounded-lg border border-border/60 bg-card p-6 text-center transition-all duration-300 hover:border-border hover:shadow-lg hover:shadow-primary/5",
        className,
      )}
    >
      <Avatar className="h-30 w-30 rounded-full border border-border transition-transform group-hover:scale-105">
        <AvatarImage src={member.image} alt={member.name} />
        <AvatarFallback className="rounded-full bg-secondary text-base font-bold text-secondary-foreground">
          {getInitials(member.name)}
        </AvatarFallback>
      </Avatar>
      <h3 className="mt-4 text-[25px] font-bold leading-tight tracking-tight">
        {member.name}
      </h3>
      <p className="mt-1 text-sm font-medium text-accent">{member.position}</p>
      <p className="mt-0.5 text-xs text-muted-foreground">
        {member.department}
      </p>
      <p className="mt-3 line-clamp-3 text-[13px] leading-relaxed text-muted-foreground">
        {member.bio}
      </p>
      <div className="mt-4 flex items-center gap-1.5">
        {member.social.linkedin && (
          <a
            href={member.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label={`${member.name} on LinkedIn`}
          >
            <Linkedin className="h-4 w-4" />
          </a>
        )}
        {member.social.twitter && (
          <a
            href={member.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label={`${member.name} on Twitter`}
          >
            <Twitter className="h-4 w-4" />
          </a>
        )}
        {member.social.email && (
          <a
            href={`mailto:${member.social.email}`}
            className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label={`Email ${member.name}`}
          >
            <Mail className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
}
