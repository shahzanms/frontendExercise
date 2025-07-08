import UserProfile from "@/app/_components/User";

interface PageProps {
    params: {
        userId: string;
    };
}

export default function Page({ params: { userId } }: PageProps) {
    return (
       <UserProfile userId={userId}/>
    );
}