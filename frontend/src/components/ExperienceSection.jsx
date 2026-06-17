function ExperienceSection({
    resumeData,
    setResumeData
}) {
    const addExperience = () => {
        setResumeData({
            ...resumeData,
            experience: [
                ...resumeData.experience,
                {
                    company: "",
                    role: ""
                }
            ]
        });
    };

    const updateExperience = (
        index,
        field,
        value
    ) => {
        const updated =
            [...resumeData.experience];

        updated[index][field] = value;

        setResumeData({
            ...resumeData,
            experience: updated
        });
    };

    return (
        <div className="bg-white/10 p-6 rounded-2xl">

            <div className="flex justify-between">

                <h2 className="text-2xl font-bold">
                    Experience
                </h2>

                <button
                    onClick={addExperience}
                    className="bg-indigo-600 px-4 py-2 rounded-lg"
                >
                    Add
                </button>

            </div>

            {resumeData.experience.map(
                (exp, index) => (
                    <div
                        key={index}
                        className="space-y-3 mt-4"
                    >
                        <input
                            placeholder="Company"
                            value={exp.company}
                            onChange={(e) =>
                                updateExperience(
                                    index,
                                    "company",
                                    e.target.value
                                )
                            }
                            className="w-full p-3 rounded-lg text-black"
                        />

                        <input
                            placeholder="Role"
                            value={exp.role}
                            onChange={(e) =>
                                updateExperience(
                                    index,
                                    "role",
                                    e.target.value
                                )
                            }
                            className="w-full p-3 rounded-lg text-black"
                        />
                    </div>
                )
            )}
        </div>
    );
}

export default ExperienceSection;