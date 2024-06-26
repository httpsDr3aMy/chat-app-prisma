import Image from "next/image";
import {MainLogin} from "@/app/components/Buttons";
import {redirect} from "next/navigation";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/libs/auth-options";

export default async function Home () {
    const session = await getServerSession(authOptions);

    if (session) {
        redirect("/chat");
    }
    return (
        <div className="max-w-xl mx-auto border rounded-lg p-10 mt-32">
            <h1 className="text-4xl font-semibold text-center">Login to use chat!</h1>

            <div className="mt-8">
                <MainLogin />
            </div>
        </div>
    );
}
