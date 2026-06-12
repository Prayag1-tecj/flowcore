import AuthLayout from "../layouts/AuthLayout";

function Login() {
    return (
        <AuthLayout>

            <div className="w-full max-w-md">

                <div className="bg-slate-900/80 backdrop-blur rounded-2xl p-8 border border-slate-800">

                    <h2 className="text-3xl font-bold mb-2">
                        Welcome Back
                    </h2>

                    <p className="text-slate-400 mb-8">
                        Sign in to your account
                    </p>

                    <form className="space-y-4">

                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 outline-none"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 outline-none"
                        />

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-500 transition p-3 rounded-xl font-semibold"
                        >
                            Sign In
                        </button>

                    </form>

                </div>

            </div>

        </AuthLayout>
    );
}

export default Login;