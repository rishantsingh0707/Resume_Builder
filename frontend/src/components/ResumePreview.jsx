function ResumePreview({
    resumeData
}) {
    return (
        <div className="bg-white text-black p-8 rounded-2xl shadow-xl min-h-screen">

            <h1 className="text-4xl font-bold">
                {resumeData.name ||
                    "Your Name"}
            </h1>

            <p>{resumeData.email}</p>
            <p>{resumeData.phone}</p>

            <hr className="my-6" />

            <h2 className="text-2xl font-bold mb-2">
                Education
            </h2>

            {resumeData.education.map(
                (edu, index) => (
                    <div
                        key={index}
                        className="mb-3"
                    >
                        <h3 className="font-semibold">
                            {edu.degree}
                        </h3>

                        <p>{edu.college}</p>
                    </div>
                )
            )}

            <h2 className="text-2xl font-bold mt-6 mb-2">
                Experience
            </h2>

            {resumeData.experience.map(
                (exp, index) => (
                    <div
                        key={index}
                        className="mb-3"
                    >
                        <h3 className="font-semibold">
                            {exp.role}
                        </h3>

                        <p>{exp.company}</p>
                    </div>
                )
            )}

            <h2 className="text-2xl font-bold mt-6 mb-2">
                Skills
            </h2>

            <div className="flex flex-wrap gap-2">

                {resumeData.skills.map(
                    (skill, index) => (
                        <span
                            key={index}
                            className="border px-3 py-1 rounded-full"
                        >
                            {skill}
                        </span>
                    )
                )}

            </div>

        </div>
    );
}

export default ResumePreview;