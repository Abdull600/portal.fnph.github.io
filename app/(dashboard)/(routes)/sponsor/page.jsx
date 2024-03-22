import { SponsorForm } from "./_components/sponsor-form";

export const metadata = {
    title: "Student Sponsorship",
    description: "Generated by create next app",
};

export default function Sponsor() {
    return (
        <div className="bg-[#fff] md:rounded-[6px] lg:rounded-[6px] md:m-4 lg:m-4">
            <SponsorForm />
        </div>
    )
}