function PersonalInfo({
    resumeData,
    setResumeData
}) {
    const handleChange = (e) => {
        setResumeData({
            ...resumeData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg">

            <h2 className="text-2xl font-bold mb-4">
                Personal Information
            </h2>

            <div className="space-y-4 border-t border-white/20 pt-4">

                <input
                    name="name"
                    placeholder="Full Name"
                    value={resumeData.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg text-white  "
                />

                <input
                    name="email"
                    placeholder="Email"
                    value={resumeData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg text-white "
                />

                <input
                    name="phone"
                    placeholder="Phone"
                    value={resumeData.phone}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg text-white"
                />

            </div>

        </div>
    );
}

export default PersonalInfo;