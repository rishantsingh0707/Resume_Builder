import { useState } from "react";

function SkillsSection({
    resumeData,
    setResumeData
}) {
    const [skill, setSkill] =
        useState("");

    const addSkill = () => {
        if (!skill.trim()) return;

        setResumeData({
            ...resumeData,
            skills: [
                ...resumeData.skills,
                skill
            ]
        });

        setSkill("");
    };

    const removeSkill = (index) => {
        const updated =
            resumeData.skills.filter(
                (_, i) => i !== index
            );

        setResumeData({
            ...resumeData,
            skills: updated
        });
    };

    return (
        <div className="bg-white/10 p-6 rounded-2xl">

            <h2 className="text-2xl font-bold mb-4">
                Skills
            </h2>

            <div className="flex gap-3">

                <input
                    value={skill}
                    onChange={(e) =>
                        setSkill(e.target.value)
                    }
                    placeholder="Add Skill"
                    className="flex-1 p-3 rounded-lg text-white "
                />

                <button
                    onClick={addSkill}
                    className="bg-indigo-600 px-4 rounded-lg"
                >
                    Add
                </button>

            </div>

            <div className="flex flex-wrap gap-2 mt-4">

                {resumeData.skills.map(
                    (skill, index) => (
                        <span
                            key={index}
                            className="bg-indigo-600 px-3 py-1 rounded-full"
                        >
                            {skill}
                        </span>
                    )
                )}

            </div>

        </div>
    );
}

export default SkillsSection;