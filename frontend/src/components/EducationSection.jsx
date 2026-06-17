function EducationSection({
    resumeData,
    setResumeData
}) {
    const addEducation = () => {
        setResumeData({
            ...resumeData,
            education: [
                ...resumeData.education,
                {
                    college: "",
                    degree: ""
                }
            ]
        });
    };

    const updateEducation = (
        index,
        field,
        value
    ) => {
        const updated =
            [...resumeData.education];

        updated[index][field] = value;

        setResumeData({
            ...resumeData,
            education: updated
        });
    };

    return (
        <div className="bg-white/10 p-6 rounded-2xl">

            <div className="flex justify-between">

                <h2 className="text-2xl font-bold">
                    Education
                </h2>

                <button
                    onClick={addEducation}
                    className="bg-indigo-600 px-4 py-2 rounded-lg"
                >
                    Add
                </button>

            </div>

            {resumeData.education.map(
                (edu, index) => (
                    <div
                        key={index}
                        className="space-y-3 mt-4"
                    >
                        <input
                            placeholder="College"
                            value={edu.college}
                            onChange={(e) =>
                                updateEducation(
                                    index,
                                    "college",
                                    e.target.value
                                )
                            }
                            className="w-full p-3 rounded-lg text-black"
                        />

                        <input
                            placeholder="Degree"
                            value={edu.degree}
                            onChange={(e) =>
                                updateEducation(
                                    index,
                                    "degree",
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

export default EducationSection;