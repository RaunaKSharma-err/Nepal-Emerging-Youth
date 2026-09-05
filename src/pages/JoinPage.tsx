import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle2, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  college: string;
  educationLevel: string;
  areaOfInterest: string;
  skills: string;
  whyJoin: string;
  preferredDepartment: string;
  portfolio: string;
  consent: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  location?: string;
  whyJoin?: string;
  consent?: string;
}

const initialData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  college: "",
  educationLevel: "",
  areaOfInterest: "",
  skills: "",
  whyJoin: "",
  preferredDepartment: "",
  portfolio: "",
  consent: false,
};

export default function JoinPage() {
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!data.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!data.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-\+()]{7,}$/.test(data.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!data.location.trim()) newErrors.location = "Location is required";
    if (!data.whyJoin.trim()) newErrors.whyJoin = "Please tell us why you want to join";
    else if (data.whyJoin.length > 500) newErrors.whyJoin = "Please keep your response under 500 characters";
    if (!data.consent) newErrors.consent = "Please agree to the terms to continue";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const update = (field: keyof FormData, value: string | boolean) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (submitted) {
    return (
      <>
        <PageHeader eyebrow="Join NEY" title="Application Submitted" />
        <section className="flex min-h-[50vh] items-center justify-center bg-background py-16">
          <div className="mx-auto max-w-md px-4 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
              <CheckCircle2 className="h-8 w-8 text-success" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Thank You!</h2>
            <p className="mt-3 text-muted-foreground">
              Your application has been received. Our team will review it and get back to you soon.
              This is a demo form — no data was actually submitted.
            </p>
            <Button
              className="mt-6"
              onClick={() => {
                setData(initialData);
                setSubmitted(false);
              }}
            >
              Submit Another Application
            </Button>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="Join NEY"
        title="Join Nepal Emerging Youth"
        description="Become part of a growing community of young leaders, innovators, and changemakers. Fill out the form below to get started."
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={data.fullName}
                    onChange={(e) => update("fullName", e.target.value)}
                    className={cn(errors.fullName && "border-destructive")}
                    placeholder="Your full name"
                  />
                  {errors.fullName && <p className="mt-1 text-xs text-destructive">{errors.fullName}</p>}
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={data.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={cn(errors.email && "border-destructive")}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    value={data.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className={cn(errors.phone && "border-destructive")}
                    placeholder="+977-XXXXXXXXXX"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                </div>
                <div>
                  <Label htmlFor="location">Location *</Label>
                  <Input
                    id="location"
                    value={data.location}
                    onChange={(e) => update("location", e.target.value)}
                    className={cn(errors.location && "border-destructive")}
                    placeholder="City, Nepal"
                  />
                  {errors.location && <p className="mt-1 text-xs text-destructive">{errors.location}</p>}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="college">College / Organization</Label>
                  <Input
                    id="college"
                    value={data.college}
                    onChange={(e) => update("college", e.target.value)}
                    placeholder="Your college or organization"
                  />
                </div>
                <div>
                  <Label htmlFor="educationLevel">Education Level</Label>
                  <Select value={data.educationLevel} onValueChange={(v) => update("educationLevel", v)}>
                    <SelectTrigger id="educationLevel">
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high-school">High School / +2</SelectItem>
                      <SelectItem value="bachelors">Bachelor's</SelectItem>
                      <SelectItem value="masters">Master's</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="areaOfInterest">Area of Interest</Label>
                  <Select value={data.areaOfInterest} onValueChange={(v) => update("areaOfInterest", v)}>
                    <SelectTrigger id="areaOfInterest">
                      <SelectValue placeholder="Select interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="leadership">Youth Leadership</SelectItem>
                      <SelectItem value="technology">Technology & Innovation</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="health">Health</SelectItem>
                      <SelectItem value="environment">Environment</SelectItem>
                      <SelectItem value="entrepreneurship">Entrepreneurship</SelectItem>
                      <SelectItem value="community">Community Development</SelectItem>
                      <SelectItem value="media">Media & Communications</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="preferredDepartment">Preferred Department</Label>
                  <Select value={data.preferredDepartment} onValueChange={(v) => update("preferredDepartment", v)}>
                    <SelectTrigger id="preferredDepartment">
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="it">Information Technology</SelectItem>
                      <SelectItem value="hr">Human Resources</SelectItem>
                      <SelectItem value="pr">Public Relations</SelectItem>
                      <SelectItem value="events">Events</SelectItem>
                      <SelectItem value="research">Research</SelectItem>
                      <SelectItem value="media">Media & Communications</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="outreach">Community Outreach</SelectItem>
                      <SelectItem value="international">International Relations</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="skills">Skills</Label>
                <Input
                  id="skills"
                  value={data.skills}
                  onChange={(e) => update("skills", e.target.value)}
                  placeholder="e.g. design, writing, coding, public speaking"
                />
              </div>

              <div>
                <Label htmlFor="portfolio">LinkedIn / Portfolio URL</Label>
                <Input
                  id="portfolio"
                  value={data.portfolio}
                  onChange={(e) => update("portfolio", e.target.value)}
                  placeholder="https://linkedin.com/in/..."
                />
              </div>

              <div>
                <Label htmlFor="whyJoin">Why do you want to join NEY? *</Label>
                <Textarea
                  id="whyJoin"
                  value={data.whyJoin}
                  onChange={(e) => update("whyJoin", e.target.value)}
                  className={cn(errors.whyJoin && "border-destructive", "min-h-[120px]")}
                  placeholder="Tell us about your motivation and what you hope to contribute..."
                  maxLength={500}
                />
                <div className="mt-1 flex items-center justify-between">
                  {errors.whyJoin ? (
                    <p className="text-xs text-destructive">{errors.whyJoin}</p>
                  ) : (
                    <span />
                  )}
                  <span className="text-xs text-muted-foreground">{data.whyJoin.length}/500</span>
                </div>
              </div>

              <div>
                <Label htmlFor="consent" className="flex items-start gap-2.5 text-sm font-normal">
                  <Checkbox
                    id="consent"
                    checked={data.consent}
                    onCheckedChange={(checked) => update("consent", checked === true)}
                    className="mt-0.5"
                  />
                  <span className="text-muted-foreground">
                    I consent to NEY contacting me about my application and organizational activities. I understand this is a demo form and no data is actually submitted.
                  </span>
                </Label>
                {errors.consent && <p className="mt-1 text-xs text-destructive">{errors.consent}</p>}
              </div>

              <Button type="submit" size="lg" className="w-full bg-accent text-white hover:bg-accent/90">
                <Send className="mr-2 h-4 w-4" />
                Submit Application
              </Button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
