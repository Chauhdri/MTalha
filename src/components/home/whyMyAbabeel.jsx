

const WhyMyAbabeel = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-6">Why Choose Me?</h2>
                <p className="text-gray-600 mb-8">
                    Discover the reasons why I'm the right choice for your project.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Expertise</h3>
                        <p className="text-gray-700">
                            Years of experience in web development and mobile app
                            creation.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                        <p className="text-gray-700">
                            Always staying up-to-date with the latest technologies and
                            trends.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Results</h3>
                        <p className="text-gray-700">
                            Proven track record of delivering successful projects and
                            achieving client goals.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyMyAbabeel;
