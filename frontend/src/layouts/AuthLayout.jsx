function AuthLayout({ children }) {
    return (
        <div className="min-h-screen bg-slate-950 text-white flex">

            <div className="hidden lg:flex w-1/2 items-center justify-center p-12">
                <div>
                    <h1 className="text-6xl font-bold mb-6">
                        FlowCore
                    </h1>

                    <p className="text-slate-400 text-lg max-w-md">
                        Scalable Task & Notes Management Platform
                        built with modern architecture and secure APIs.
                    </p>
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
                {children}
            </div>

        </div>
    );
}

export default AuthLayout;