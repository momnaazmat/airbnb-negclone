
import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import { useRouter } from "next/dist/client/router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function signIn({ providers }) {
    return (

    <>
    <div>
        <Header />
        {Object.values(providers).map((provider) => (
            <div key={provider.name}>
                <span className="px-80 max-h-60"></span>
                <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full  font-bold my-5 hover:shadow-xl active:scale-90 transition duration-150" onClick={() => SignIntoProvider(provider.id)}>
                    Sign in with {provider.name}
                </button>
            </div>
        ))}
        <Footer />

    </div>
    </>
    );


}

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers,
        },
    };
}

export default signIn;
