import {exec} from "child_process";
import {LoginButton} from "@/app/LoginButton";
import {authOptions} from "@/app/auth";
import {getServerSession} from "next-auth";

export default async function Home() {
    const session = await getServerSession(authOptions);
    console.log(session);
    async function restartMC() {
        "use server"
        console.log("Restarting Minecraft Server")
        exec("sudo systemctl restart minecraft.service", (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }

            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }

            console.log(`stdout: ${stdout}`);
        });
    }

    async function restartAll() {
        "use server"
        console.log("Restarting Machine")
        exec("open https://google.com", (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }

            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }

            console.log(`stdout: ${stdout}`);
        });
    }

    return (
        <main className="mx-20 my-5 p-5 dark:bg-gray-800 rounded">
            <h1 className="text-4xl my-6">Server-Reboot</h1>
            {session ?
            <div>
                <form className="flex flex-col p-2 my-6" action={restartMC}>
                    <button type="submit" id="restartMC" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Restart Minecraft Server
                    </button>
                    <label htmlFor="restartMC" className="mx-5 text-s text-gray-500">This option only restarts the Minecraft server application.</label>
                </form>

                <form className="flex flex-col p-2 my-6" action={restartAll}>
                    <button type="submit" id="restartAll" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Restart Machine
                    </button>
                    <label htmlFor="restartAll" className="mx-5 text-s text-gray-500">This option restarts the entire machine.</label>
                </form>
            </div>
            :
                <LoginButton/>
            }
        </main>
    )
}
